import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

// Instamojo API configuration
// Note: Use non-VITE prefixed env vars for backend (set these in Vercel dashboard)
// API v1.1 (with X-Api-Key and X-Auth-Token):
// - Test Mode: https://test.instamojo.com/api/1.1
// - Production Mode: https://www.instamojo.com/api/1.1
const INSTAMOJO_API_URL = process.env.INSTAMOJO_API_URL || process.env.VITE_INSTAMOJO_API_URL || 'https://www.instamojo.com/api/1.1';

// Sanitize API credentials: remove all whitespace, newlines, and control characters
const sanitize = (str: string | undefined): string => {
  if (!str) return '';
  return str.replace(/[\s\r\n\t\0\x0B\x0C\u0085\u2028\u2029]/g, '');
};

const API_KEY = sanitize(process.env.INSTAMOJO_API_KEY || process.env.VITE_INSTAMOJO_API_KEY);
const AUTH_TOKEN = sanitize(process.env.INSTAMOJO_AUTH_TOKEN || process.env.VITE_INSTAMOJO_AUTH_TOKEN);

interface PaymentRequestBody {
  name: string;
  email: string;
  phone: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone }: PaymentRequestBody = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Format phone number - Instamojo requires +91XXXXXXXXXX format for UPI to work
    // Remove any spaces, hyphens, or special characters
    let cleanPhone = phone.replace(/[\s\-\(\)]/g, '');

    // Remove any leading + or country code
    if (cleanPhone.startsWith('+91')) {
      cleanPhone = cleanPhone.substring(3);
    } else if (cleanPhone.startsWith('91') && cleanPhone.length > 10) {
      cleanPhone = cleanPhone.substring(2);
    }

    // Ensure we have exactly 10 digits
    if (!/^\d{10}$/.test(cleanPhone)) {
      console.error('Invalid phone format after cleaning:', cleanPhone);
      return res.status(400).json({ error: 'Invalid phone number format. Please provide a valid 10-digit Indian mobile number.' });
    }

    // Add +91 prefix for Instamojo
    const formattedPhone = `+91${cleanPhone}`;

    // Validate environment variables
    if (!API_KEY || !AUTH_TOKEN) {
      console.error('Missing Instamojo credentials');
      return res.status(500).json({ error: 'Payment gateway not configured' });
    }

    // Debug: Log credential lengths (NOT the actual values)
    console.log('API Key length:', API_KEY.length, 'Auth Token length:', AUTH_TOKEN.length);
    console.log('API Key first 8 chars:', API_KEY.substring(0, 8));
    console.log('Auth Token first 8 chars:', AUTH_TOKEN.substring(0, 8));

    const productPrice = parseFloat(process.env.PRODUCT_PRICE || process.env.VITE_PRODUCT_PRICE || '249');
    const productName = process.env.PRODUCT_NAME || process.env.VITE_PRODUCT_NAME || 'Simple Quran - Complete Bundle';

    // Get the base URL from the request
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    const redirectUrl = `${protocol}://${host}/payment-success`;

    console.log('Creating payment request:', {
      email,
      name,
      phone: formattedPhone,
      amount: productPrice,
      redirectUrl,
      apiUrl: INSTAMOJO_API_URL,
      purpose: productName,
    });

    // Create payment request with Instamojo
    // Note: v1.1 API uses payment-requests (hyphen)
    const response = await axios.post(
      `${INSTAMOJO_API_URL}/payment-requests/`,
      {
        purpose: productName,
        amount: productPrice.toString(), // Ensure amount is string
        buyer_name: name || 'Customer',
        email: email,
        phone: formattedPhone,
        redirect_url: redirectUrl,
        send_email: true,
        send_sms: false,
        allow_repeated_payments: false,
        // webhook: `${protocol}://${host}/api/payment-webhook`, // Uncomment if you add webhook handler
      },
      {
        headers: {
          'X-Api-Key': API_KEY,
          'X-Auth-Token': AUTH_TOKEN,
          'Content-Type': 'application/json',
        },
        timeout: 30000, // 30 second timeout
      }
    );

    if (response.data && response.data.payment_request) {
      const paymentRequest = response.data.payment_request;
      console.log('Payment request created successfully:', {
        id: paymentRequest.id,
        longurl: paymentRequest.longurl,
        shorturl: paymentRequest.shorturl,
        status: paymentRequest.status,
      });

      return res.status(200).json({
        success: true,
        payment_url: paymentRequest.longurl,
        payment_id: paymentRequest.id,
      });
    } else {
      console.error('Invalid response from Instamojo:', response.data);
      return res.status(500).json({
        success: false,
        error: 'Failed to create payment request',
        details: 'Invalid response structure from payment gateway',
      });
    }
  } catch (error: any) {
    console.error('Instamojo API error:', error.response?.data || error.message);
    console.error('Full error details:', JSON.stringify(error.response?.data, null, 2));
    console.error('Request config:', {
      url: error.config?.url,
      method: error.config?.method,
      headers: error.config?.headers ? Object.keys(error.config.headers) : [],
    });

    if (error.response?.data) {
      // Extract user-friendly error message
      let errorMessage = 'Payment request failed';

      if (error.response.data.message) {
        errorMessage = typeof error.response.data.message === 'string'
          ? error.response.data.message
          : JSON.stringify(error.response.data.message);
      } else if (error.response.data.error) {
        errorMessage = typeof error.response.data.error === 'string'
          ? error.response.data.error
          : JSON.stringify(error.response.data.error);
      }

      return res.status(error.response.status || 500).json({
        success: false,
        error: errorMessage,
        details: error.response.data,
      });
    }

    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error',
    });
  }
}
