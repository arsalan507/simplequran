# Instamojo UPI Payment Troubleshooting Guide

## Problem
QR code scanning and PhonePe/GPay direct links show error: "Sorry, looks like there is an error in the provided details. Please try again."

However, manually entering UPI ID works fine.

## Root Cause
This issue occurs on **Instamojo's payment page**, not in your website code. The problem is with how Instamojo generates the UPI deep links and QR codes.

---

## Solutions to Try (In Order)

### 1. Verify Instamojo Account Setup

#### Check KYC Status
1. Login to your Instamojo Dashboard: https://www.instamojo.com/dashboard
2. Go to **Settings** → **Account Details**
3. Verify that:
   - ✅ **Business verification** is complete
   - ✅ **KYC documents** are approved
   - ✅ **PAN card** is verified
   - ✅ **Bank account** is linked and verified

#### Check UPI Settings
1. Go to **Settings** → **Payment Methods**
2. Ensure **UPI** is enabled
3. Check if there are any warnings or errors for UPI
4. Verify your **business category** is set correctly

---

### 2. Verify Bank Account Details

Instamojo uses your linked bank account for UPI payments. Ensure:

1. Go to **Settings** → **Bank Details**
2. Verify:
   - ✅ Bank account number is correct
   - ✅ IFSC code is correct
   - ✅ Account holder name matches your business name
   - ✅ Account is **verified** (look for green checkmark)

**Important**: If you recently added/changed your bank account, it may take 24-48 hours for UPI to work properly.

---

### 3. Check Environment Variables

Ensure you're using the correct Instamojo credentials:

**For Production (Live Payments):**
```
INSTAMOJO_API_URL=https://www.instamojo.com/api/1.1
INSTAMOJO_API_KEY=<your_production_api_key>
INSTAMOJO_AUTH_TOKEN=<your_production_auth_token>
```

**For Testing:**
```
INSTAMOJO_API_URL=https://test.instamojo.com/api/1.1
INSTAMOJO_API_KEY=<your_test_api_key>
INSTAMOJO_AUTH_TOKEN=<your_test_auth_token>
```

#### How to Get Your API Credentials:
1. Login to Instamojo Dashboard
2. Go to **Settings** → **API & Plugins**
3. Click on **Generate Credentials** if not already generated
4. Copy **API Key** and **Auth Token**
5. Make sure you're using **Production** credentials for live site

---

### 4. Test Mode vs Production Mode

The issue might be that you're using **Test Mode** credentials in production:

**Test Mode Issues:**
- UPI payments may not work in test mode
- QR codes might not be generated properly
- Limited payment methods available

**Solution:**
1. Switch to **Production Mode** in Instamojo
2. Update your environment variables with **Production API credentials**
3. Update Vercel environment variables:
   ```bash
   vercel env add INSTAMOJO_API_KEY production
   vercel env add INSTAMOJO_AUTH_TOKEN production
   vercel env add INSTAMOJO_API_URL production
   ```

---

### 5. Contact Instamojo Support

If the above steps don't resolve the issue, contact Instamojo support:

**Email**: support@instamojo.com
**Phone**: +91 80 6802 9879
**Dashboard**: Settings → Support

**What to tell them:**
```
Subject: UPI QR Code and Deep Links Not Working

Hi Instamojo Support,

I'm facing an issue where UPI payments via QR code scanning and direct app links
(PhonePe, GPay) are showing errors. However, manual UPI ID entry works fine.

Error message: "Sorry, looks like there is an error in the provided details."

My Payment Link: https://www.instamojo.com/@Simplequran/f32d24fda76a426eb9f0a9eb585ee6cc

Details:
- Account Name: [Your Account Name]
- Business Name: Simple Quran
- Amount: ₹249
- Phone format used: +91XXXXXXXXXX

Please check:
1. If UPI is properly enabled for my account
2. If there's an issue with QR code generation
3. If my bank account is properly linked for UPI

Thank you!
```

---

### 6. Common Instamojo UPI Issues

#### Issue: UPI Not Enabled
- **Solution**: Email Instamojo to enable UPI for your account

#### Issue: Bank Account Not Verified
- **Solution**: Complete bank account verification process
- May require uploading cancelled cheque or bank statement

#### Issue: Business Category Restrictions
- Some business categories have restricted UPI access
- **Solution**: Contact Instamojo to verify your category

#### Issue: Settlement Issues
- If you have unsettled disputes or chargebacks
- **Solution**: Resolve any pending issues in dashboard

---

### 7. Alternative Solution: Use Different Payment Gateway

If Instamojo continues to have UPI issues, consider:

1. **Razorpay** - Better UPI support, more reliable
2. **PayU** - Good for Indian payments
3. **PhonePe Payment Gateway** - Native PhonePe integration
4. **Cashfree** - Excellent UPI support

---

## Testing Checklist

After making changes, test with:

- [ ] Scan QR code with PhonePe app
- [ ] Scan QR code with Google Pay
- [ ] Scan QR code with Paytm
- [ ] Click PhonePe icon on payment page
- [ ] Click GPay icon on payment page
- [ ] Enter UPI ID manually
- [ ] Test with different phone numbers
- [ ] Test from different devices (Android/iOS)

---

## Code Changes Made

I've updated your payment API (`api/create-payment.ts`) with:

1. **Better phone number validation**
   - Removes spaces, hyphens, and special characters
   - Ensures exactly 10 digits
   - Adds +91 prefix correctly

2. **Enhanced error logging**
   - Logs full request details
   - Better error messages
   - Easier debugging

3. **Improved API call**
   - Amount sent as string (Instamojo requirement)
   - Added timeout handling
   - Better response validation

---

## Next Steps

1. **Deploy the updated code** to Vercel
   ```bash
   git add .
   git commit -m "Fix: Improve phone number validation for Instamojo UPI payments"
   git push
   ```

2. **Check Vercel logs** for any API errors
   ```bash
   vercel logs
   ```

3. **Test the payment flow** and monitor console logs

4. **Contact Instamojo support** if issue persists

---

## Important Notes

- The issue is on **Instamojo's side**, not your code
- Your website is correctly sending the payment request
- The problem occurs when Instamojo generates the UPI deep links
- Manual UPI ID entry works because it bypasses Instamojo's deep link generation

---

## Questions?

If you need help:
1. Check Vercel logs for errors
2. Check browser console for frontend errors
3. Test with Instamojo test account first
4. Contact Instamojo support with payment link URL

Good luck! 🚀
