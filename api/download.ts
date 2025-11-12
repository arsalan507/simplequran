import type { VercelRequest, VercelResponse } from '@vercel/node';
import { verifyOrderToken } from './lib/jwt.js';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.query;

    if (!token || typeof token !== 'string') {
      return res.status(400).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Invalid Download Link</title>
          <style>
            body { font-family: Arial; text-align: center; padding: 50px; }
            h1 { color: #dc2626; }
          </style>
        </head>
        <body>
          <h1>❌ Invalid Download Link</h1>
          <p>This download link is invalid or has expired.</p>
          <p>Please contact <a href="mailto:support@simplequran.in">support@simplequran.in</a> for assistance.</p>
        </body>
        </html>
      `);
    }

    // Verify the JWT token
    const orderData = verifyOrderToken(token);

    if (!orderData) {
      return res.status(401).send(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Expired Download Link</title>
          <style>
            body { font-family: Arial; text-align: center; padding: 50px; }
            h1 { color: #dc2626; }
          </style>
        </head>
        <body>
          <h1>⏰ Download Link Expired</h1>
          <p>This download link has expired.</p>
          <p>Please contact <a href="mailto:support@simplequran.in">support@simplequran.in</a> with your payment ID: <strong>${req.query.payment_id || 'N/A'}</strong></p>
        </body>
        </html>
      `);
    }

    // Log the download attempt
    console.log('Download accessed:', {
      orderId: orderData.orderId,
      email: orderData.email,
      timestamp: new Date().toISOString(),
    });

    // Get download links from environment variables
    const downloadLinkV1 = process.env.EBOOK_DOWNLOAD_LINK_V1;
    const downloadLinkV2 = process.env.EBOOK_DOWNLOAD_LINK_V2;

    // Return download portal page
    return res.status(200).send(`
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Download Your E-Books - Simple Quran</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            min-height: 100vh;
            padding: 20px;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 107, 78, 0.2);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #006B4E 0%, #059669 100%);
            color: white;
            padding: 40px;
            text-align: center;
          }
          .header h1 {
            font-size: 32px;
            margin-bottom: 10px;
          }
          .content {
            padding: 40px;
          }
          .order-info {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 30px;
          }
          .order-info p {
            margin: 8px 0;
            color: #374151;
          }
          .download-card {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border: 2px solid #10b981;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 20px;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .download-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
          }
          .download-card h2 {
            color: #006B4E;
            font-size: 24px;
            margin-bottom: 15px;
          }
          .download-card p {
            color: #666;
            margin-bottom: 20px;
            line-height: 1.6;
          }
          .download-button {
            display: inline-block;
            background: linear-gradient(135deg, #006B4E 0%, #059669 100%);
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 10px;
            font-weight: bold;
            font-size: 18px;
            transition: transform 0.2s;
          }
          .download-button:hover {
            transform: scale(1.05);
          }
          .support-box {
            background: #eff6ff;
            border: 2px solid #3b82f6;
            border-radius: 10px;
            padding: 20px;
            margin-top: 30px;
            text-align: center;
          }
          .support-box h3 {
            color: #1e40af;
            margin-bottom: 10px;
          }
          .support-box a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
          }
          .footer {
            background: #1f2937;
            color: #9ca3af;
            text-align: center;
            padding: 20px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Barakallahu Feekum!</h1>
            <p>Your E-Books Are Ready to Download</p>
          </div>

          <div class="content">
            <div class="order-info">
              <p><strong>Order ID:</strong> ${orderData.orderId}</p>
              <p><strong>Payment ID:</strong> ${orderData.paymentId}</p>
              <p><strong>Email:</strong> ${orderData.email}</p>
            </div>

            <div class="download-card">
              <h2>📖 Version 1: Simplified Quran Guide</h2>
              <p>Complete 30 Juz explained in simple, easy-to-understand language. Perfect for daily study and reflection.</p>
              <a href="${downloadLinkV1}" class="download-button" download>
                ⬇️ Download Version 1
              </a>
            </div>

            <div class="download-card">
              <h2>🎨 Version 2: Illustrated Quran Guide</h2>
              <p>Beautifully illustrated guide with visual explanations, timelines, and infographics for enhanced understanding. <strong>(FREE Bonus)</strong></p>
              <a href="${downloadLinkV2}" class="download-button" download>
                ⬇️ Download Version 2
              </a>
            </div>

            <div class="support-box">
              <h3>🤝 Need Help?</h3>
              <p>If you have any issues downloading or accessing your e-books:</p>
              <p><a href="mailto:support@simplequran.in">support@simplequran.in</a></p>
              <p style="margin-top: 10px; color: #64748b; font-size: 13px;">
                Available: Monday-Sunday, 9 AM - 9 PM IST
              </p>
            </div>
          </div>

          <div class="footer">
            <p>© 2025 Simple Quran. All rights reserved.</p>
            <p style="margin-top: 5px;">JazakAllah Khair for your trust in us!</p>
          </div>
        </div>
      </body>
      </html>
    `);
  } catch (error: any) {
    console.error('Download portal error:', error);
    return res.status(500).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error</title>
        <style>
          body { font-family: Arial; text-align: center; padding: 50px; }
          h1 { color: #dc2626; }
        </style>
      </head>
      <body>
        <h1>❌ Something Went Wrong</h1>
        <p>Please contact <a href="mailto:support@simplequran.in">support@simplequran.in</a> for assistance.</p>
      </body>
      </html>
    `);
  }
}
