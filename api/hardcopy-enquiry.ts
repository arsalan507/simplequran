import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendEnquiryEmail } from './lib/email.js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, address, city, state, pincode, quantity, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !address || !city || !state || !pincode || !quantity) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'phone', 'address', 'city', 'state', 'pincode', 'quantity']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ error: 'Phone number must be 10 digits' });
    }

    // Validate pincode (6 digits)
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(pincode)) {
      return res.status(400).json({ error: 'Pincode must be 6 digits' });
    }

    // Send enquiry email
    await sendEnquiryEmail({
      name,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      quantity,
      message: message || ''
    });

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you shortly.'
    });
  } catch (error: any) {
    console.error('Hardcopy enquiry error:', error);
    console.error('Full error:', JSON.stringify(error, null, 2));
    return res.status(500).json({
      error: 'Failed to submit enquiry. Please try again or contact info.simplequran@gmail.com',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
