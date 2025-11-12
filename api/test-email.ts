import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendDownloadEmail } from './lib/email.js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Generate a test download URL
    const testDownloadUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://simplequran.in'}/api/download?token=test_token_${Date.now()}`;

    await sendDownloadEmail(
      email,
      name || 'Valued Customer',
      'TEST_' + Date.now(),
      testDownloadUrl
    );

    return res.status(200).json({
      success: true,
      message: `Test email sent to ${email}`
    });
  } catch (error: any) {
    console.error('Test email error:', error);
    console.error('Full error:', JSON.stringify(error, null, 2));
    return res.status(500).json({
      error: error.message,
      details: error.response?.body || error
    });
  }
}
