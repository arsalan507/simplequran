# Email Delivery Setup Guide

This guide explains how to automatically send e-book download links to customers after successful payment.

## Table of Contents
1. [Overview](#overview)
2. [Setting Up Instamojo Webhook](#setting-up-instamojo-webhook)
3. [Email Service Options](#email-service-options)
4. [Implementation Steps](#implementation-steps)
5. [Testing](#testing)

---

## Overview

After a customer completes payment through Instamojo, you need to:
1. Verify the payment was successful
2. Generate/retrieve download links for the e-books
3. Send an email with the download links to the customer

This is accomplished using:
- **Instamojo Webhooks**: Notify your server when payment is completed
- **Email Service**: Send emails with download links
- **File Storage**: Store your e-book files securely

---

## Setting Up Instamojo Webhook

### Step 1: Create Webhook Endpoint

You need to create an API endpoint that Instamojo will call when a payment is completed.

Create a new file: `api/webhook-instamojo.ts`

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const INSTAMOJO_SALT = process.env.VITE_INSTAMOJO_SALT;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;

    // Verify webhook authenticity using MAC (Message Authentication Code)
    const mac = payload.mac;
    delete payload.mac;

    const message = Object.keys(payload)
      .sort()
      .map(key => \`\${key}=\${payload[key]}\`)
      .join('&');

    const calculatedMac = crypto
      .createHmac('sha1', INSTAMOJO_SALT!)
      .update(message)
      .digest('hex');

    if (mac !== calculatedMac) {
      console.error('Invalid webhook signature');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    // Payment details from Instamojo
    const {
      payment_id,
      payment_request_id,
      status,
      buyer_email,
      buyer_name,
      amount,
    } = payload;

    console.log('Payment webhook received:', {
      payment_id,
      status,
      buyer_email,
    });

    // Only process successful payments
    if (status === 'Credit') {
      // TODO: Send email with download links
      await sendDownloadEmail(buyer_email, buyer_name, payment_id);

      // TODO: Store order in database (optional)
      // await storeOrder({ payment_id, email: buyer_email, ... });
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: error.message });
  }
}

async function sendDownloadEmail(
  email: string,
  name: string,
  paymentId: string
) {
  // This will be implemented in the next steps
  console.log(\`TODO: Send email to \${email}\`);
}
```

### Step 2: Configure Webhook in Instamojo Dashboard

1. Log in to [Instamojo Dashboard](https://www.instamojo.com/dashboard)
2. Go to **Settings** → **API & Plugins** → **Webhooks**
3. Click **Add Webhook**
4. Enter your webhook URL:
   ```
   https://simplequran.in/api/webhook-instamojo
   ```
   Or for testing:
   ```
   https://your-vercel-app.vercel.app/api/webhook-instamojo
   ```
5. Click **Save**

### Step 3: Test Webhook

Instamojo will send a test webhook. Check your Vercel logs:
```bash
vercel logs --follow
```

---

## Email Service Options

Choose one of the following email service providers:

### Option 1: SendGrid (Recommended)
- **Free Tier**: 100 emails/day
- **Easy Setup**: Good documentation
- **Sign up**: https://sendgrid.com/

### Option 2: Mailgun
- **Free Tier**: 5,000 emails/month (3 months)
- **Good for transactional emails**
- **Sign up**: https://www.mailgun.com/

### Option 3: Resend
- **Free Tier**: 3,000 emails/month
- **Modern API, simple setup**
- **Sign up**: https://resend.com/

### Option 4: Gmail SMTP (Simple, but limited)
- **Free**: Limited to ~500 emails/day
- **Simple**: Use your existing Gmail account
- **Not recommended for production**

---

## Implementation Steps

### Using SendGrid (Recommended)

#### Step 1: Install SendGrid Package

```bash
npm install @sendgrid/mail
```

#### Step 2: Get SendGrid API Key

1. Sign up at https://sendgrid.com/
2. Go to **Settings** → **API Keys**
3. Create a new API key with "Full Access"
4. Copy the API key

#### Step 3: Add to Vercel Environment Variables

```bash
vercel env add SENDGRID_API_KEY production
# Paste your SendGrid API key when prompted

vercel env add SENDGRID_FROM_EMAIL production
# Enter: support@simplequran.in

vercel env add SENDGRID_FROM_NAME production
# Enter: Simple Quran
```

#### Step 4: Create Email Sending Function

Create file: `api/lib/email.ts`

```typescript
import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY!;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'support@simplequran.in';
const FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Simple Quran';

sgMail.setApiKey(SENDGRID_API_KEY);

interface DownloadLinks {
  version1: string;
  version2: string;
}

export async function sendDownloadEmail(
  toEmail: string,
  customerName: string,
  paymentId: string,
  downloadLinks: DownloadLinks
) {
  const msg = {
    to: toEmail,
    from: {
      email: FROM_EMAIL,
      name: FROM_NAME,
    },
    subject: 'Your Simple Quran E-Books - Download Links Inside',
    html: \`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #006B4E 0%, #059669 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .download-box {
            background: white;
            border: 2px solid #006B4E;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
          }
          .download-button {
            display: inline-block;
            background: #006B4E;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 0;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Thank You for Your Purchase!</h1>
          </div>
          <div class="content">
            <p>Dear \${customerName},</p>

            <p>Thank you for purchasing the Simple Quran bundle! Your order has been confirmed.</p>

            <p><strong>Payment ID:</strong> \${paymentId}</p>

            <div class="download-box">
              <h2>📚 Your E-Books</h2>

              <h3>Version 1: Simplified Quran Guide</h3>
              <p>30 Juz explained in a simple and easy-to-understand format.</p>
              <a href="\${downloadLinks.version1}" class="download-button">
                Download Version 1
              </a>

              <h3>Version 2: Illustrated Quran Guide (FREE Bonus)</h3>
              <p>Beautifully illustrated guide with visual explanations.</p>
              <a href="\${downloadLinks.version2}" class="download-button">
                Download Version 2
              </a>
            </div>

            <div class="download-box">
              <h3>💡 How to Access Your E-Books:</h3>
              <ol>
                <li>Click on the download buttons above</li>
                <li>Save the PDF files to your device</li>
                <li>Open with any PDF reader</li>
                <li>These links never expire - save this email for future access!</li>
              </ol>
            </div>

            <p><strong>Need Help?</strong></p>
            <p>If you have any issues downloading or accessing your e-books, please contact us at
            <a href="mailto:support@simplequran.in">support@simplequran.in</a></p>

            <p>We're available Monday-Sunday, 9 AM - 9 PM IST.</p>

            <p>May Allah bless you on your journey of learning!</p>

            <p>Best regards,<br>
            <strong>Simple Quran Team</strong></p>
          </div>
          <div class="footer">
            <p>© 2025 Simple Quran. All rights reserved.</p>
            <p><a href="https://simplequran.in">www.simplequran.in</a></p>
          </div>
        </div>
      </body>
      </html>
    \`,
    text: \`
Dear \${customerName},

Thank you for purchasing the Simple Quran bundle! Your order has been confirmed.

Payment ID: \${paymentId}

YOUR E-BOOKS:

Version 1: Simplified Quran Guide
Download: \${downloadLinks.version1}

Version 2: Illustrated Quran Guide (FREE Bonus)
Download: \${downloadLinks.version2}

These links never expire - save this email for future access!

Need Help?
Contact us at support@simplequran.in
Available: Monday-Sunday, 9 AM - 9 PM IST

May Allah bless you on your journey of learning!

Best regards,
Simple Quran Team
www.simplequran.in
    \`,
  };

  try {
    await sgMail.send(msg);
    console.log(\`Email sent successfully to \${toEmail}\`);
    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error.response?.body || error);
    throw error;
  }
}
```

#### Step 5: Update Webhook to Send Email

Update `api/webhook-instamojo.ts`:

```typescript
import { sendDownloadEmail } from './lib/email';

// Inside the webhook handler, after verifying payment:
if (status === 'Credit') {
  const downloadLinks = {
    version1: 'https://your-storage-url/simple-quran-v1.pdf',
    version2: 'https://your-storage-url/simple-quran-v2.pdf',
  };

  await sendDownloadEmail(
    buyer_email,
    buyer_name,
    payment_id,
    downloadLinks
  );
}
```

---

## File Storage for E-Books

You need to host your PDF files somewhere secure. Options:

### Option 1: Vercel Blob Storage (Recommended)
```bash
npm install @vercel/blob

# Add to Vercel
vercel blob add
```

Upload your PDFs via Vercel dashboard, get secure URLs.

### Option 2: AWS S3
- Industry standard
- Generate signed URLs for secure downloads
- More complex setup

### Option 3: Google Drive
- Simple for testing
- Create shareable links with "Anyone with link can view"
- Not ideal for production (no expiration control)

### Example: Using Vercel Blob

```typescript
import { put } from '@vercel/blob';

// Upload file (one-time)
const blob = await put('simple-quran-v1.pdf', pdfFileBuffer, {
  access: 'public',
});

console.log(blob.url); // Use this URL in emails
```

---

## Testing

### Test Locally

1. Use [ngrok](https://ngrok.com/) to expose your local server:
```bash
npm run dev
# In another terminal:
ngrok http 5173
```

2. Use the ngrok URL in Instamojo webhook settings

3. Make a test payment (use Instamojo test mode)

4. Check console logs for email sending

### Test on Vercel

1. Deploy to Vercel
2. Configure webhook with your Vercel URL
3. Make a test payment
4. Check Vercel logs:
```bash
vercel logs --follow
```

---

## Deployment Checklist

- [ ] Create webhook endpoint (`api/webhook-instamojo.ts`)
- [ ] Install email service package (SendGrid/Mailgun/Resend)
- [ ] Add email service API key to Vercel environment variables
- [ ] Create email template (`api/lib/email.ts`)
- [ ] Upload e-book PDFs to secure storage
- [ ] Update webhook to use actual download URLs
- [ ] Configure webhook in Instamojo dashboard
- [ ] Test with a real payment (test mode)
- [ ] Verify email is received with correct links
- [ ] Test download links work
- [ ] Switch to production mode
- [ ] Test with real payment

---

## Important Security Notes

1. **Never commit API keys** to git
2. **Always verify webhook signatures** to prevent fraud
3. **Use environment variables** for all credentials
4. **Generate time-limited download links** if possible (using signed URLs)
5. **Log all transactions** for debugging and accounting

---

## Support

If you need help setting this up:
1. Check Vercel logs: `vercel logs --follow`
2. Check Instamojo webhook logs in dashboard
3. Test email service separately first
4. Enable debug logging in your webhook

---

## Quick Start Commands

```bash
# Install dependencies
npm install @sendgrid/mail @vercel/node

# Add environment variables
vercel env add SENDGRID_API_KEY production
vercel env add SENDGRID_FROM_EMAIL production
vercel env add SENDGRID_FROM_NAME production

# Deploy
vercel --prod

# View logs
vercel logs --follow
```

---

Good luck! 🚀
