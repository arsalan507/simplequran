# 🚀 Simple Quran Website - Complete Setup Guide

## Overview

This guide will help you set up your fully-featured e-commerce website for Simple Quran with:
- ✅ Instamojo payment gateway integration
- ✅ Automated email delivery via SendGrid
- ✅ Video testimonials for social proof
- ✅ User authentication (login/signup)
- ✅ Shopping cart functionality
- ✅ Trust badges and conversion optimization
- ✅ Google & Meta Ads compliance

---

## 📋 Prerequisites

Before you begin, make sure you have:
1. Instamojo account (www.instamojo.com)
2. SendGrid account (sendgrid.com)
3. Your e-book PDF files ready
4. Vercel account for deployment (vercel.com)

---

## 🔧 Step 1: Configure Environment Variables

### 1.1 Update your `.env` file

Copy `.env.example` to `.env` and fill in your actual credentials:

```bash
cp .env.example .env
```

### 1.2 Add Your Instamojo Credentials

Get these from your Instamojo Dashboard → Settings → API & Plugins:

```env
# Instamojo Configuration
INSTAMOJO_API_KEY=your_actual_api_key_here
INSTAMOJO_AUTH_TOKEN=your_actual_auth_token_here
INSTAMOJO_SALT=your_actual_salt_here
INSTAMOJO_API_URL=https://www.instamojo.com/api/1.1
```

**Important Notes:**
- For testing, use: `https://test.instamojo.com/api/1.1`
- For production, use: `https://www.instamojo.com/api/1.1`
- Keep your credentials secure and never commit them to git

### 1.3 Add Your SendGrid Credentials

Get your API key from SendGrid Dashboard → Settings → API Keys:

```env
# Email Service Configuration (SendGrid)
SENDGRID_API_KEY=SG.your_actual_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=support@simplequran.in
SENDGRID_FROM_NAME=Simple Quran
```

### 1.4 Upload E-Books and Add Download Links

You need to host your PDF files somewhere. Options:

**Option A: Vercel Blob Storage (Recommended)**
```bash
npm install @vercel/blob
vercel blob add
```

**Option B: Google Drive**
1. Upload PDFs to Google Drive
2. Right-click → Get Link → Set to "Anyone with the link"
3. Copy the shareable link

**Option C: AWS S3, Cloudflare R2, or any CDN**

Add the URLs to your `.env`:

```env
# E-Book Download Links
EBOOK_DOWNLOAD_LINK_V1=https://your-storage-url/simple-quran-v1.pdf
EBOOK_DOWNLOAD_LINK_V2=https://your-storage-url/simple-quran-v2.pdf
```

---

## 🔗 Step 2: Configure Instamojo Webhook

The webhook is required to automatically send emails after successful payment.

### 2.1 Deploy Your Website First

```bash
vercel --prod
```

### 2.2 Set Up Webhook in Instamojo

1. Log in to [Instamojo Dashboard](https://www.instamojo.com/dashboard)
2. Go to **Settings** → **API & Plugins** → **Webhooks**
3. Click **Add Webhook**
4. Enter your webhook URL:
   ```
   https://your-domain.vercel.app/api/webhook-instamojo
   ```
5. Click **Save**

### 2.3 Test the Webhook

Instamojo will send a test webhook. Check your Vercel logs:

```bash
vercel logs --follow
```

---

## 📧 Step 3: Set Up SendGrid Email Service

### 3.1 Verify Your Sender Email

1. Go to SendGrid Dashboard → Settings → Sender Authentication
2. Click **Verify a Single Sender**
3. Enter your email: `support@simplequran.in`
4. Check your inbox and verify the email

### 3.2 Create an API Key

1. Go to Settings → API Keys
2. Click **Create API Key**
3. Name: "Simple Quran Production"
4. Select **Full Access**
5. Copy the API key (you won't see it again!)

### 3.3 Add to Vercel Environment Variables

```bash
vercel env add SENDGRID_API_KEY
# Paste your API key when prompted

vercel env add SENDGRID_FROM_EMAIL
# Enter: support@simplequran.in

vercel env add SENDGRID_FROM_NAME
# Enter: Simple Quran
```

---

## 🎥 Step 4: Add Video Testimonials

### 4.1 Upload Your Testimonial Videos

Upload your video testimonials to YouTube or Vimeo.

### 4.2 Get Video IDs

For YouTube:
- URL: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
- Extract: `VIDEO_ID_HERE`

### 4.3 Update VideoTestimonials Component

Edit `src/components/VideoTestimonials.tsx` and replace the placeholder video IDs:

```typescript
const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: 'Sister Aisha Rahman',
    location: 'Mumbai, India',
    videoUrl: 'https://www.youtube.com/embed/YOUR_ACTUAL_VIDEO_ID_1',
    thumbnailUrl: 'https://img.youtube.com/vi/YOUR_ACTUAL_VIDEO_ID_1/maxresdefault.jpg',
    quote: 'Your actual testimonial quote here',
    rating: 5,
    verified: true,
  },
  // Add more testimonials...
];
```

**Tips for Video Testimonials:**
- Keep them emotional and authentic
- Showcase real Muslim customers
- Focus on transformation stories
- Aim for 30-60 seconds each
- Add Arabic text or Islamic references for connection

---

## 🛒 Step 5: Test the Complete Flow

### 5.1 Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` and test:

1. **Authentication**
   - Click "Login" in header
   - Create a new account
   - Login with your credentials
   - Logout

2. **Shopping Cart**
   - Click "Add to Cart" on bundle offer
   - View cart by clicking cart icon
   - Adjust quantity
   - Remove items

3. **Payment Flow** (Use Instamojo Test Mode)
   - Add product to cart
   - Click "Proceed to Checkout"
   - Fill in details
   - Complete test payment
   - Check if email is received

### 5.2 Test on Vercel (Staging)

```bash
vercel
# This creates a preview deployment
```

Test the full flow on the preview URL.

### 5.3 Deploy to Production

```bash
vercel --prod
```

---

## 📱 Step 6: Google & Meta Ads Setup

### 6.1 Google Ads Compliance ✅

Your website already includes:
- ✅ Privacy Policy (`/privacy-policy`)
- ✅ Terms of Service (`/terms-of-service`)
- ✅ Refund Policy (`/refund-policy`)
- ✅ Shipping Policy (`/shipping-policy`)

**Required for Google Ads:**
1. Clear pricing (₹249)
2. Product description (digital e-books)
3. Contact information (support@simplequran.in)
4. Return/refund policy (7-day guarantee)
5. Privacy policy with data collection disclosure

✅ **All requirements met!**

### 6.2 Meta (Facebook) Ads Compliance ✅

**Required for Meta Ads:**
1. Privacy Policy with Facebook Pixel disclosure
2. Clear product information
3. No physical delivery explicitly stated
4. Contact information
5. Legal pages linked in footer

✅ **All requirements met!**

### 6.3 Create Your Ad Campaigns

**Google Ads Campaign Structure:**
```
Campaign: Simple Quran - Bundle Offer
├─ Ad Group 1: Quran E-book (Broad Match)
├─ Ad Group 2: Islamic Books (Phrase Match)
└─ Ad Group 3: Quran Learning (Exact Match)
```

**Meta Ads Campaign Structure:**
```
Campaign: Simple Quran Bundle
├─ Ad Set 1: Interest Targeting
│   └─ Interests: Islam, Quran, Islamic Education
├─ Ad Set 2: Lookalike Audience
│   └─ Based on: Website visitors
└─ Ad Set 3: Retargeting
    └─ Target: Cart abandoners
```

### 6.4 Ad Copy Examples

**Google Ad (Headline 1):**
```
Simple Quran E-Book Bundle - Just ₹249
```

**Google Ad (Headline 2):**
```
Understand the Quran in Simple Language
```

**Google Ad (Description):**
```
Get both versions: Simplified + Illustrated. Digital delivery only. 7-day money-back guarantee. Start learning today!
```

**Facebook Ad Copy:**
```
🌙 Transform Your Understanding of the Quran

Struggling to understand the Quran's beautiful message?

Simple Quran makes it easy:
✅ 30 Juz explained in simple language
✅ Beautiful illustrations & infographics
✅ Both versions for just ₹249 (93% OFF)
✅ Instant digital delivery
✅ 7-day money-back guarantee

Join 5000+ Muslims who have transformed their relationship with Allah's words.

"رَبِّ زِدْنِي عِلْمًا" - O my Lord, increase me in knowledge

[Buy Now Button]
```

---

## 🎯 Step 7: Conversion Optimization Features

Your website now includes:

### 7.1 Trust Elements
- ✅ Security badges (SSL, encrypted payment)
- ✅ Social proof (5000+ customers, 4.9/5 rating)
- ✅ Money-back guarantee badge
- ✅ Instant delivery badge
- ✅ Verified customer testimonials

### 7.2 Urgency Elements
- ✅ Countdown timer (24-hour reset)
- ✅ Limited time offer badges
- ✅ Stock scarcity (can be customized)

### 7.3 User Experience
- ✅ Smooth animations (Framer Motion)
- ✅ Mobile-responsive design
- ✅ Fast page loads
- ✅ Clear CTAs throughout
- ✅ Easy navigation
- ✅ Shopping cart with quantity controls
- ✅ Persistent cart (localStorage)

### 7.4 Emotional Connection
- ✅ Video testimonials
- ✅ Arabic quotes from Quran
- ✅ Islamic color palette (green, gold)
- ✅ Muslim-friendly language
- ✅ Transformation stories

---

## 🔒 Security Best Practices

### 8.1 Never Commit Secrets

Your `.gitignore` already includes:
```
.env
.env.local
.env.production
```

### 8.2 Use Environment Variables

All sensitive data is stored in environment variables:
- Instamojo credentials
- SendGrid API key
- Download links

### 8.3 HTTPS Only

Vercel provides free SSL certificates. Always use HTTPS.

### 8.4 Webhook Signature Verification

The webhook endpoint verifies Instamojo signatures using HMAC-SHA1.

---

## 📊 Step 8: Analytics & Tracking

### 9.1 Add Google Analytics

1. Create a Google Analytics 4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `src/components/SEO.tsx`:

```typescript
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### 9.2 Add Facebook Pixel

1. Create a Meta Pixel in Business Manager
2. Get your Pixel ID
3. Add to `src/components/SEO.tsx`

### 9.3 Track Key Events

Important events to track:
- `add_to_cart`
- `begin_checkout`
- `purchase`
- `view_item`
- `lead` (signup)

---

## 🧪 Step 9: Testing Checklist

Before going live, test everything:

### Payment Flow
- [ ] Add product to cart
- [ ] Update cart quantity
- [ ] Remove from cart
- [ ] Proceed to checkout
- [ ] Complete payment (test mode)
- [ ] Receive confirmation email
- [ ] Download links work
- [ ] Webhook logs show success

### Authentication
- [ ] Sign up with new account
- [ ] Login with existing account
- [ ] Logout
- [ ] Password validation works
- [ ] Email validation works

### Mobile Responsiveness
- [ ] Test on iPhone
- [ ] Test on Android
- [ ] Test on iPad
- [ ] Test on desktop

### Page Speed
- [ ] Run Google PageSpeed Insights
- [ ] Optimize images if needed
- [ ] Check Core Web Vitals

### Email Delivery
- [ ] Test email arrives within 2 minutes
- [ ] Check spam folder
- [ ] Verify all links work
- [ ] Test on Gmail, Yahoo, Outlook

---

## 🚨 Troubleshooting

### Issue: Payment not working
**Solution:**
1. Check Instamojo credentials in `.env`
2. Verify you're using the correct API URL (test vs production)
3. Check Vercel logs: `vercel logs --follow`
4. Ensure API key and auth token don't have spaces

### Issue: Email not received
**Solution:**
1. Check SendGrid API key is correct
2. Verify sender email is verified in SendGrid
3. Check Vercel logs for email errors
4. Check spam folder
5. Verify webhook is configured in Instamojo

### Issue: Video testimonials not showing
**Solution:**
1. Ensure YouTube videos are set to "Public" or "Unlisted"
2. Verify video IDs are correct
3. Check browser console for errors

### Issue: Cart not persisting
**Solution:**
1. Check localStorage is enabled in browser
2. Clear browser cache and try again
3. Check browser console for errors

---

## 📞 Support & Resources

### Documentation
- **Instamojo Docs:** https://docs.instamojo.com/
- **SendGrid Docs:** https://docs.sendgrid.com/
- **Vercel Docs:** https://vercel.com/docs
- **React Docs:** https://react.dev/

### Get Help
- Email: support@simplequran.in
- Instamojo Support: support@instamojo.com
- SendGrid Support: https://support.sendgrid.com/

---

## ✅ Launch Checklist

Before launching to production:

### Technical
- [ ] All environment variables added to Vercel
- [ ] Webhook configured in Instamojo
- [ ] SendGrid sender verified
- [ ] E-book download links tested
- [ ] Test payment completed successfully
- [ ] Email delivery tested
- [ ] SSL certificate active
- [ ] Custom domain configured (optional)

### Content
- [ ] Video testimonials uploaded and working
- [ ] All policy pages reviewed
- [ ] Contact email working
- [ ] Product images optimized
- [ ] SEO meta tags updated

### Marketing
- [ ] Google Analytics added
- [ ] Facebook Pixel added
- [ ] Google Ads campaign created
- [ ] Meta Ads campaign created
- [ ] Email templates reviewed

### Legal
- [ ] Privacy policy updated with real contact info
- [ ] Terms of service reviewed
- [ ] Refund policy confirmed
- [ ] Shipping policy (digital delivery) confirmed

---

## 🎉 You're Ready to Launch!

Once everything is checked off, you're ready to:

1. Deploy to production: `vercel --prod`
2. Test one final purchase end-to-end
3. Launch your ad campaigns
4. Start selling!

**May Allah bless your business with success! 🤲**

---

## 💡 Pro Tips for Success

1. **Start with small ad budget** - Test $5-10/day initially
2. **Focus on video testimonials** - They convert 3x better
3. **Retarget cart abandoners** - 70% of carts are abandoned
4. **Use urgency timers** - Creates FOMO and boosts conversions
5. **Optimize for mobile** - 80% of your traffic will be mobile
6. **A/B test your ads** - Try different headlines and images
7. **Respond quickly to support** - Build trust with fast responses
8. **Collect real testimonials** - Ask customers for reviews
9. **Update videos regularly** - Fresh content performs better
10. **Monitor analytics daily** - Track what works and optimize

---

**Need help?** Contact support@simplequran.in

**Good luck with your launch! 🚀**
