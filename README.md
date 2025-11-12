# Quran Made Simple - Landing Page

A modern, conversion-optimized landing page for "Quran Made Simple", an Islamic e-book bundle offer website built with React, TypeScript, and TailwindCSS.

**Special Offer:** Buy Version 1 & Get Version 2 - ABSOLUTELY FREE! Bundle price: ₹249

## Features

- 🎨 Clean, modern design with Islamic aesthetic (green/gold accents)
- 📱 Fully responsive mobile-first design
- ✨ Smooth animations with Framer Motion
- 💳 Razorpay payment integration
- 🔒 Secure checkout flow
- 📧 Email capture and validation
- ⚡ Optimized performance with Vite
- 🎯 SEO optimized with meta tags and structured data
- ♿ Accessible components

## Tech Stack

- **React 18+** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Form handling
- **Lucide React** - Icons
- **Razorpay** - Payment gateway

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Benefits.tsx        # Benefits grid with icons
│   ├── WhatsIncluded.tsx   # What's included section
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── SocialProof.tsx     # Stats and social proof
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── FinalCTA.tsx        # Final call-to-action
│   ├── Footer.tsx          # Footer with links
│   ├── PaymentModal.tsx    # Razorpay payment modal
│   └── SEO.tsx             # SEO meta tags component
├── types/
│   └── index.ts            # TypeScript type definitions
├── App.tsx                 # Main app component
├── main.tsx                # App entry point
└── index.css               # Global styles

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Razorpay Integration Setup

1. Sign up for a Razorpay account at [razorpay.com](https://razorpay.com)
2. Get your API keys from the Razorpay dashboard
3. Replace `YOUR_RAZORPAY_KEY_ID` in `src/components/PaymentModal.tsx` with your actual Razorpay key
4. Set up a backend endpoint to:
   - Create Razorpay orders
   - Verify payment signatures
   - Send download links via email

### Backend Requirements

You'll need to implement these endpoints:

- `POST /api/create-order` - Creates a Razorpay order
- `POST /api/verify-payment` - Verifies payment signature
- `POST /api/send-download` - Sends download link via email

Example backend implementation (Node.js/Express):

```javascript
const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
app.post('/api/create-order', async (req, res) => {
  const options = {
    amount: 9900, // ₹99 in paise
    currency: 'INR',
    receipt: `order_${Date.now()}`,
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});

// Verify payment
app.post('/api/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + '|' + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature === razorpay_signature) {
    // Payment is valid, send download link
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#006B4E',    // Islamic green
  secondary: '#D4AF37',  // Gold
  accent: '#059669',     // Accent green
}
```

### Content

All content is defined within the components. Update the following files to customize:

- `src/components/Hero.tsx` - Hero section text
- `src/components/Benefits.tsx` - Benefits list
- `src/components/Testimonials.tsx` - Customer reviews
- `src/components/FAQ.tsx` - FAQ questions and answers

### Pricing

Update the price in:
- `src/components/Hero.tsx`
- `src/components/FinalCTA.tsx`
- `src/components/PaymentModal.tsx`

## SEO Configuration

Update SEO settings in `index.html` and `src/components/SEO.tsx`:

- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Structured data (Schema.org)

## Email Integration

To send download links after successful payment, integrate with an email service:

- **SendGrid**
- **Mailgun**
- **AWS SES**
- **Postmark**

Example SendGrid integration:

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: customerEmail,
  from: 'support@simplequran.in',
  subject: 'Your SimpleQuran E-Book Download Link',
  html: `
    <h1>Thank you for your purchase!</h1>
    <p>Download your e-book here: <a href="${downloadLink}">Download Now</a></p>
  `,
};

await sgMail.send(msg);
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Custom Server

1. Build the project: `npm run build`
2. Serve the `dist` folder with any static file server (nginx, Apache, etc.)

## Environment Variables

Create a `.env` file for backend configuration:

```env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
SENDGRID_API_KEY=your_sendgrid_key
DATABASE_URL=your_database_url
```

## Performance Optimization

- ✅ Lazy loading images
- ✅ Code splitting with dynamic imports
- ✅ Optimized animations
- ✅ Minified CSS and JS
- ✅ Compressed assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved

## Support

For questions or support, contact: support@simplequran.in

## Todo

- [ ] Add actual e-book cover image
- [ ] Implement backend API for payments
- [ ] Set up email service
- [ ] Add analytics (Google Analytics, Facebook Pixel)
- [ ] Implement A/B testing
- [ ] Add loading states for images
- [ ] Create thank you page
- [ ] Add refund policy page
- [ ] Implement affiliate program (optional)

## Credits

Built with ❤️ for the Muslim community
