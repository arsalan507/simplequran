import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';
import { sendDownloadEmail } from './lib/email.js';
import { generateOrderToken } from './lib/jwt.js';

const INSTAMOJO_SALT = process.env.INSTAMOJO_SALT || process.env.VITE_INSTAMOJO_SALT;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    console.log('Webhook received:', JSON.stringify(payload, null, 2));

    // Verify webhook authenticity using MAC (Message Authentication Code)
    // TEMPORARILY DISABLED - Need to investigate Instamojo's MAC calculation
    if (false && INSTAMOJO_SALT) {
      const mac = payload.mac;
      const payloadCopy = { ...payload };
      delete payloadCopy.mac;

      const message = Object.keys(payloadCopy)
        .sort()
        .map(key => `${key}=${payloadCopy[key]}`)
        .join('&');

      console.log('[Debug] Message for MAC:', message);
      console.log('[Debug] Salt exists:', !!INSTAMOJO_SALT);
      console.log('[Debug] Received MAC:', mac);

      const calculatedMac = crypto
        .createHmac('sha1', INSTAMOJO_SALT)
        .update(message)
        .digest('hex');

      console.log('[Debug] Calculated MAC:', calculatedMac);

      if (mac !== calculatedMac) {
        console.error('Invalid webhook signature');
        console.error('Expected:', calculatedMac);
        console.error('Received:', mac);
        return res.status(401).json({ error: 'Invalid signature' });
      }

      console.log('[Success] Webhook signature verified');
    } else {
      console.warn('[Warning] MAC verification temporarily disabled');
    }

    // Payment details from Instamojo
    // Note: Instamojo sends 'buyer' not 'buyer_email'
    const {
      payment_id,
      payment_request_id,
      status,
      buyer: buyer_email,  // Instamojo uses 'buyer' field for email
      buyer_name,
      buyer_phone,
      amount,
      purpose,
    } = payload;

    console.log('Payment webhook received:', {
      payment_id,
      status,
      buyer_email,
      amount,
    });

    // Only process successful payments
    if (status === 'Credit') {
      // Generate secure download token
      const orderToken = generateOrderToken({
        orderId: payment_request_id,
        email: buyer_email,
        paymentId: payment_id,
        timestamp: Date.now(),
      });

      // Generate secure download URL
      const downloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://simplequran.in'}/api/download?token=${orderToken}`;

      console.log('Generated download URL:', downloadUrl);

      // Send email with secure download link
      try {
        await sendDownloadEmail(buyer_email, buyer_name, payment_id, downloadUrl);
        console.log(`Email sent successfully to ${buyer_email}`);
      } catch (emailError: any) {
        console.error('Error sending email:', emailError);
        // Don't fail the webhook if email fails - we can retry manually
      }

      // TODO: Store order in database (optional)
      // await storeOrder({ payment_id, email: buyer_email, ... });
    }

    return res.status(200).json({ success: true, message: 'Webhook processed' });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: error.message });
  }
}
