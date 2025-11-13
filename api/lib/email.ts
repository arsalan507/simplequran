import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'support@simplequran.in';
const FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Simple Quran';

// Initialize SendGrid if API key is available
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

/**
 * Send download email with secure portal link to customer
 */
export async function sendDownloadEmail(
  toEmail: string,
  customerName: string,
  paymentId: string,
  downloadUrl: string
) {
  if (!SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured');
    throw new Error('Email service not configured');
  }

  const msg = {
    to: toEmail,
    from: {
      email: FROM_EMAIL,
      name: FROM_NAME,
    },
    subject: 'Your Simple Quran Order Confirmation - Download Your E-Books',
    html: generateEmailHTML(customerName, paymentId, downloadUrl),
    text: generateEmailText(customerName, paymentId, downloadUrl),
  };

  try {
    await sgMail.send(msg);
    console.log(`Email sent successfully to ${toEmail}`);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error.response?.body || error);
    throw error;
  }
}

function generateEmailHTML(
  customerName: string,
  paymentId: string,
  downloadUrl: string
): string {
  return `
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.8;
          color: #333;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
        }
        .header {
          background: linear-gradient(135deg, #006B4E 0%, #059669 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          font-size: 28px;
          margin-bottom: 10px;
        }
        .header p {
          font-size: 16px;
          opacity: 0.95;
        }
        .content {
          padding: 40px 30px;
        }
        .greeting {
          font-size: 18px;
          color: #006B4E;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .message {
          font-size: 16px;
          color: #555;
          margin-bottom: 30px;
          line-height: 1.8;
        }
        .download-box {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 2px solid #10b981;
          border-radius: 12px;
          padding: 30px;
          margin: 30px 0;
        }
        .download-box h2 {
          color: #006B4E;
          font-size: 22px;
          margin-bottom: 25px;
          text-align: center;
        }
        .ebook-item {
          background: white;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .ebook-item:last-child {
          margin-bottom: 0;
        }
        .ebook-title {
          color: #006B4E;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .ebook-desc {
          color: #666;
          font-size: 14px;
          margin-bottom: 15px;
        }
        .download-button {
          display: inline-block;
          background: linear-gradient(135deg, #006B4E 0%, #059669 100%);
          color: white !important;
          padding: 14px 32px;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 16px;
          text-align: center;
          transition: transform 0.2s;
        }
        .download-button:hover {
          transform: translateY(-2px);
        }
        .info-box {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 20px;
          margin: 25px 0;
          border-radius: 6px;
        }
        .info-box h3 {
          color: #92400e;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .info-box ol {
          color: #78350f;
          padding-right: 20px;
          margin: 0;
        }
        .info-box li {
          margin-bottom: 8px;
        }
        .payment-info {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
          font-size: 14px;
          color: #666;
        }
        .support-box {
          background: #eff6ff;
          border: 1px solid #3b82f6;
          border-radius: 8px;
          padding: 20px;
          margin: 25px 0;
          text-align: center;
        }
        .support-box h3 {
          color: #1e40af;
          margin-bottom: 10px;
          font-size: 18px;
        }
        .support-box p {
          color: #1e3a8a;
          margin-bottom: 15px;
        }
        .support-box a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }
        .dua {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          padding: 25px;
          border-radius: 10px;
          text-align: center;
          margin: 25px 0;
          border: 2px solid #fbbf24;
        }
        .dua p {
          color: #78350f;
          font-size: 16px;
          font-weight: 500;
          font-style: italic;
        }
        .footer {
          background: #1f2937;
          color: #9ca3af;
          text-align: center;
          padding: 30px;
          font-size: 13px;
        }
        .footer a {
          color: #60a5fa;
          text-decoration: none;
        }
        .signature {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid #e5e7eb;
          color: #374151;
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 25px 20px;
          }
          .header {
            padding: 30px 20px;
          }
          .header h1 {
            font-size: 24px;
          }
          .download-box {
            padding: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>🎉 بارك الله فيكم</h1>
          <h1>Barakallahu Feekum!</h1>
          <p>Thank you for your purchase</p>
        </div>

        <!-- Content -->
        <div class="content">
          <div class="greeting">
            As-salamu alaykum ${customerName},
          </div>

          <p class="message">
            May Allah bless you abundantly! We are honored to be part of your Quranic learning journey.
            Your payment has been confirmed, and your e-books are ready for download.
          </p>

          <div class="payment-info">
            <strong>Payment ID:</strong> ${paymentId}<br>
            <strong>Order Status:</strong> Confirmed ✅
          </div>

          <!-- Access Content Box -->
          <div class="download-box">
            <h2>📚 Your E-Books Are Ready</h2>
            <p style="font-size: 16px; color: #374151; margin-bottom: 20px; text-align: center;">
              Click the button below to access your digital content:
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${downloadUrl}" class="download-button" style="font-size: 20px; padding: 18px 50px;">
                📥 Access Your E-Books
              </a>
            </div>
            <p style="font-size: 14px; color: #666; text-align: center; margin-top: 20px;">
              ✅ Version 1: Simplified Quran Guide (30 Juz)<br>
              ✅ Version 2: Illustrated Quran Guide (FREE Bonus)
            </p>
          </div>

          <!-- How to Access -->
          <div class="info-box">
            <h3>💡 How to Access Your E-Books:</h3>
            <ol>
              <li>Click the "Access Your E-Books" button above</li>
              <li>You'll be taken to your secure download portal</li>
              <li>Download both PDF files to your device (phone, tablet, or computer)</li>
              <li>Open with any PDF reader app</li>
              <li>Your access link NEVER expires - bookmark this email!</li>
            </ol>
          </div>

          <!-- Dua Box -->
          <div class="dua">
            <p>
              "رَبِّ زِدْنِي عِلْمًا"<br>
              "Rabbi zidni 'ilma"<br>
              "O my Lord, increase me in knowledge"<br>
              <small>(Quran 20:114)</small>
            </p>
          </div>

          <!-- Support Box -->
          <div class="support-box">
            <h3>🤝 Need Help?</h3>
            <p>
              If you have any issues downloading or accessing your e-books,
              we're here to help!
            </p>
            <p>
              Email us at: <a href="mailto:support@simplequran.in">support@simplequran.in</a><br>
              We typically respond within 2-4 hours
            </p>
            <p style="margin-bottom: 0; font-size: 14px; color: #64748b;">
              Available: Monday-Sunday, 9 AM - 9 PM IST
            </p>
          </div>

          <!-- Signature -->
          <div class="signature">
            <p style="font-size: 16px; color: #059669; font-weight: 600; margin-bottom: 5px;">
              JazakAllah Khair for your trust in us!
            </p>
            <p style="color: #666; margin-bottom: 3px;">
              May Allah accept your efforts and grant you success in both worlds.
            </p>
            <p style="color: #006B4E; font-weight: 600; margin-top: 15px;">
              Simple Quran Team
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="footer">
          <p style="margin-bottom: 10px;">
            © 2025 Simple Quran. All rights reserved.
          </p>
          <p style="margin-bottom: 10px;">
            <a href="https://simplequran.in">www.simplequran.in</a>
          </p>
          <p style="font-size: 12px; color: #6b7280;">
            <a href="https://simplequran.in/privacy-policy">Privacy Policy</a> •
            <a href="https://simplequran.in/refund-policy">Refund Policy</a> •
            <a href="https://simplequran.in/terms-of-service">Terms of Service</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateEmailText(
  customerName: string,
  paymentId: string,
  downloadUrl: string
): string {
  return `
As-salamu alaykum ${customerName},

Barakallahu Feekum! Thank you for purchasing the Simple Quran bundle.

Your order has been confirmed and your e-books are ready for download.

Payment ID: ${paymentId}

========================================
ACCESS YOUR E-BOOKS
========================================

Click the link below to access your digital content:
${downloadUrl}

✅ Version 1: Simplified Quran Guide (30 Juz)
✅ Version 2: Illustrated Quran Guide (FREE Bonus)

========================================
HOW TO ACCESS YOUR E-BOOKS
========================================

1. Click the access link above
2. You'll be taken to your secure download portal
3. Download both PDF files to your device
4. Open with any PDF reader
5. Your access link NEVER expires - save this email!

"Rabbi zidni 'ilma" - O my Lord, increase me in knowledge (Quran 20:114)

========================================
NEED HELP?
========================================

If you have any issues downloading or accessing your e-books, contact us:

Email: support@simplequran.in
Available: Monday-Sunday, 9 AM - 9 PM IST
Response time: 2-4 hours

========================================

JazakAllah Khair for your trust in us!
May Allah accept your efforts and grant you success in both worlds.

Simple Quran Team
www.simplequran.in

© 2025 Simple Quran. All rights reserved.
  `.trim();
}

/**
 * Send hardcopy enquiry email to support
 */
export async function sendEnquiryEmail(enquiryData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  quantity: string;
  message: string;
}) {
  if (!SENDGRID_API_KEY) {
    console.error('SendGrid API key not configured');
    throw new Error('Email service not configured');
  }

  const totalPrice = 3500 * parseInt(enquiryData.quantity);

  const msg = {
    to: 'support@simplequran.in',
    from: {
      email: FROM_EMAIL,
      name: FROM_NAME,
    },
    replyTo: enquiryData.email,
    subject: `🔔 New Hardcopy Enquiry from ${enquiryData.name}`,
    html: generateEnquiryHTML(enquiryData, totalPrice),
    text: generateEnquiryText(enquiryData, totalPrice),
  };

  try {
    await sgMail.send(msg);
    console.log(`Enquiry email sent successfully from ${enquiryData.email}`);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending enquiry email:', error.response?.body || error);
    throw error;
  }
}

function generateEnquiryHTML(
  data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    quantity: string;
    message: string;
  },
  totalPrice: number
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #006B4E 0%, #059669 100%);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section h2 {
          color: #006B4E;
          font-size: 18px;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #059669;
        }
        .info-row {
          display: flex;
          padding: 10px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          font-weight: bold;
          color: #374151;
          width: 140px;
          flex-shrink: 0;
        }
        .info-value {
          color: #6b7280;
        }
        .highlight-box {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
        .price-box {
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 2px solid #10b981;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
        }
        .price-box .amount {
          font-size: 32px;
          font-weight: bold;
          color: #006B4E;
        }
        .footer {
          background: #f3f4f6;
          padding: 20px;
          text-align: center;
          font-size: 14px;
          color: #6b7280;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📦 New Hardcopy Enquiry</h1>
          <p>SimpleQuran - Physical Book Order</p>
        </div>

        <div class="content">
          <div class="section">
            <h2>👤 Customer Information</h2>
            <div class="info-row">
              <span class="info-label">Name:</span>
              <span class="info-value">${data.name}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value"><a href="mailto:${data.email}">${data.email}</a></span>
            </div>
            <div class="info-row">
              <span class="info-label">Phone:</span>
              <span class="info-value"><a href="tel:${data.phone}">${data.phone}</a></span>
            </div>
          </div>

          <div class="section">
            <h2>📍 Delivery Address</h2>
            <div class="info-row">
              <span class="info-label">Address:</span>
              <span class="info-value">${data.address}</span>
            </div>
            <div class="info-row">
              <span class="info-label">City:</span>
              <span class="info-value">${data.city}</span>
            </div>
            <div class="info-row">
              <span class="info-label">State:</span>
              <span class="info-value">${data.state}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Pincode:</span>
              <span class="info-value">${data.pincode}</span>
            </div>
          </div>

          <div class="section">
            <h2>📦 Order Details</h2>
            <div class="info-row">
              <span class="info-label">Quantity:</span>
              <span class="info-value">${data.quantity} ${parseInt(data.quantity) === 1 ? 'copy' : 'copies'}</span>
            </div>
            <div class="price-box">
              <p style="margin: 0 0 10px 0; color: #374151; font-weight: 600;">Total Amount</p>
              <div class="amount">₹${totalPrice.toLocaleString('en-IN')}</div>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #6b7280;">
                (${data.quantity} × ₹3,500)
              </p>
            </div>
          </div>

          ${data.message ? `
          <div class="section">
            <h2>💬 Additional Message</h2>
            <div class="highlight-box">
              ${data.message}
            </div>
          </div>
          ` : ''}

          <div class="section">
            <h2>⏱️ Timestamp</h2>
            <div class="info-row">
              <span class="info-label">Received on:</span>
              <span class="info-value">${new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                dateStyle: 'full',
                timeStyle: 'long'
              })}</span>
            </div>
          </div>
        </div>

        <div class="footer">
          <p><strong>Action Required:</strong> Please contact the customer within 24 hours to confirm availability and payment details.</p>
          <p style="margin-top: 10px;">SimpleQuran Support System</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateEnquiryText(
  data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    quantity: string;
    message: string;
  },
  totalPrice: number
): string {
  return `
NEW HARDCOPY ENQUIRY - SIMPLEQURAN
=====================================

CUSTOMER INFORMATION
--------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

DELIVERY ADDRESS
----------------
${data.address}
${data.city}, ${data.state} - ${data.pincode}

ORDER DETAILS
-------------
Quantity: ${data.quantity} ${parseInt(data.quantity) === 1 ? 'copy' : 'copies'}
Total Amount: ₹${totalPrice.toLocaleString('en-IN')}

${data.message ? `ADDITIONAL MESSAGE
------------------
${data.message}

` : ''}TIMESTAMP
---------
Received on: ${new Date().toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  dateStyle: 'full',
  timeStyle: 'long'
})}

=====================================
ACTION REQUIRED: Please contact the customer within 24 hours
to confirm availability and payment details.
  `.trim();
}
