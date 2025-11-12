const crypto = require('crypto');

// The exact webhook payload from the logs
const payload = {
  "amount": "249.00",
  "buyer": "kinetic@gmail.com",
  "buyer_name": "Customer",
  "buyer_phone": "+919999999990",
  "currency": "INR",
  "fees": "4.73",
  "longurl": "https://www.instamojo.com/@arsalanahmed507/842ab25cf71445289e4c0b24514457b4",
  "payment_id": "MOJO3153545375370851",
  "payment_request_id": "842ab25cf71445289e4c0b24514457b4",
  "purpose": "Simple Quran - Complete Bundle (Version 1 & 2)",
  "shorturl": "https://imjo.in/5WjuCM",
  "status": "Credit",
  "mac": "713f23f47b9aa850f2c5cb313dd2217c1ac6f548"
};

const receivedMac = payload.mac;
delete payload.mac;

// Try with current salt
const currentSalt = '1b3453d5c62848e4837a22f8eac8bc26';

const message = Object.keys(payload)
  .sort()
  .map(key => `${key}=${payload[key]}`)
  .join('&');

console.log('Message for MAC calculation:');
console.log(message);
console.log('\n');

const calculatedMac = crypto
  .createHmac('sha1', currentSalt)
  .update(message)
  .digest('hex');

console.log('Received MAC:', receivedMac);
console.log('Calculated MAC with current salt:', calculatedMac);
console.log('Match:', receivedMac === calculatedMac);
console.log('\n');

// If they don't match, the user needs to provide the correct production salt
if (receivedMac !== calculatedMac) {
  console.log('❌ MAC MISMATCH!');
  console.log('\nPossible reasons:');
  console.log('1. You are using TEST credentials but receiving PRODUCTION webhooks');
  console.log('2. The salt in Vercel does not match the production private salt');
  console.log('\nAction required:');
  console.log('1. Log into https://www.instamojo.com/dashboard (PRODUCTION, not test)');
  console.log('2. Go to Settings → API & Plugins');
  console.log('3. Copy the Private Salt value');
  console.log('4. Run: node test-mac-reverse.js <paste-private-salt-here>');
} else {
  console.log('✅ MAC VERIFIED! The salt is correct.');
}
