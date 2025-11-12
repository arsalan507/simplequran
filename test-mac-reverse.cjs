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

// Get salt from command line argument
const testSalt = process.argv[2];

if (!testSalt) {
  console.log('Usage: node test-mac-reverse.js <private-salt>');
  console.log('\nExample:');
  console.log('  node test-mac-reverse.js 1b3453d5c62848e4837a22f8eac8bc26');
  process.exit(1);
}

const message = Object.keys(payload)
  .sort()
  .map(key => `${key}=${payload[key]}`)
  .join('&');

console.log('Testing with salt:', testSalt);
console.log('\n');

const calculatedMac = crypto
  .createHmac('sha1', testSalt)
  .update(message)
  .digest('hex');

console.log('Received MAC from Instamojo:', receivedMac);
console.log('Calculated MAC with provided salt:', calculatedMac);
console.log('\n');

if (receivedMac === calculatedMac) {
  console.log('✅ SUCCESS! This is the correct salt!');
  console.log('\nNext steps:');
  console.log('1. Update Vercel environment variable:');
  console.log(`   vercel env add INSTAMOJO_SALT production`);
  console.log(`   Then paste: ${testSalt}`);
  console.log('2. Redeploy:');
  console.log('   vercel --prod');
} else {
  console.log('❌ MISMATCH - This salt is incorrect');
  console.log('\nMake sure you copied the Private Salt from:');
  console.log('https://www.instamojo.com/dashboard (PRODUCTION environment)');
  console.log('NOT from test.instamojo.com');
}
