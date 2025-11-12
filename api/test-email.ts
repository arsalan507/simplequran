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

    await sendDownloadEmail(
      email,
      name || 'Valued Customer',
      'TEST_' + Date.now()
    );

    return res.status(200).json({
      success: true,
      message: `Test email sent to ${email}`
    });
  } catch (error: any) {
    console.error('Test email error:', error);
    return res.status(500).json({ error: error.message });
  }
}
