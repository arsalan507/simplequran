import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ShippingPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </motion.a>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8 sm:p-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping & Delivery Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Digital Product Delivery</h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-4">
                <p className="text-blue-900 font-semibold text-lg mb-2">📱 100% Digital Delivery</p>
                <p className="text-blue-800">
                  Simple Quran sells exclusively digital products (e-books). We do NOT ship any physical products. All products are delivered electronically via email immediately after purchase.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Instant Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon successful payment, you will receive instant access to your purchased e-books. The delivery process is as follows:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-3">
                <li>
                  <strong>Complete Payment:</strong> Once your payment is successfully processed through Razorpay, your order is confirmed.
                </li>
                <li>
                  <strong>Email Confirmation:</strong> You will receive an order confirmation email within 1-2 minutes.
                </li>
                <li>
                  <strong>Download Link:</strong> The same email will contain a secure download link to access your e-books.
                </li>
                <li>
                  <strong>Instant Access:</strong> Click the download link to immediately download your e-books in PDF format.
                </li>
                <li>
                  <strong>Lifetime Access:</strong> The download link never expires, so you can access your purchase anytime.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Delivery Timeline</h2>
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Delivery Times:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Email Delivery:</strong> 1-2 minutes after payment</li>
                  <li><strong>Maximum Time:</strong> 10 minutes (in case of technical delays)</li>
                  <li><strong>Download Speed:</strong> Depends on your internet connection</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In 99% of cases, you will receive your download link within 1-2 minutes of completing your purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What You'll Receive</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your purchase includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Version 1:</strong> Simplified Quran E-book (PDF format)</li>
                <li><strong>Version 2:</strong> Illustrated Quran E-book (PDF format) - FREE with purchase</li>
                <li><strong>Bonus Materials:</strong> Printable reference charts and guides</li>
                <li><strong>Lifetime Access:</strong> Ability to re-download anytime</li>
                <li><strong>Future Updates:</strong> Free updates when available</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Physical Shipping</h2>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-4">
                <p className="text-amber-900 font-semibold mb-2">⚠️ Important Notice</p>
                <p className="text-amber-800 mb-3">
                  <strong>NO physical books or hardcopies will be shipped or delivered.</strong>
                </p>
                <p className="text-amber-800">
                  All products are digital e-books in PDF format. If you are looking for physical books, please note that we only sell digital versions at this time.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Didn't Receive Your Email?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you haven't received your download email within 10 minutes, please check the following:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-3">
                <li>
                  <strong>Check Spam/Junk Folder:</strong> Sometimes emails end up in spam. Check your spam or junk folder.
                </li>
                <li>
                  <strong>Check Email Address:</strong> Verify that you entered the correct email address during checkout.
                </li>
                <li>
                  <strong>Wait a Few Minutes:</strong> In rare cases, email delivery may be delayed. Wait up to 10 minutes.
                </li>
                <li>
                  <strong>Contact Support:</strong> If you still haven't received it, contact us at <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a> with your order details.
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Re-Downloading Your Purchase</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you need to re-download your e-books:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Use the original download link from your email (it never expires)</li>
                <li>Contact our support team with your order number, and we'll resend the link</li>
                <li>Keep your purchase confirmation email for future reference</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. File Format & Compatibility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our e-books are provided in PDF format, which is compatible with:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Devices:</h4>
                  <ul className="list-disc pl-4 text-gray-700 space-y-1 text-sm">
                    <li>Smartphones (Android & iOS)</li>
                    <li>Tablets (iPad, Android tablets)</li>
                    <li>Computers (Windows, Mac, Linux)</li>
                    <li>E-readers (Kindle, Kobo, etc.)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">PDF Readers:</h4>
                  <ul className="list-disc pl-4 text-gray-700 space-y-1 text-sm">
                    <li>Adobe Acrobat Reader</li>
                    <li>Apple Books</li>
                    <li>Google PDF Viewer</li>
                    <li>Any standard PDF reader</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Download Issues</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you experience any issues downloading your e-books:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Ensure you have a stable internet connection</li>
                <li>Try using a different browser</li>
                <li>Disable any download managers or VPNs temporarily</li>
                <li>Check if you have sufficient storage space on your device</li>
                <li>Contact our support team for assistance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Geographic Restrictions</h2>
              <p className="text-gray-700 leading-relaxed">
                Our digital products are available worldwide. There are no geographic restrictions or additional charges based on location. As long as you have internet access and a valid email address, you can purchase and receive our e-books from anywhere in the world.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Secure Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your download links are secure and unique to your purchase. We use industry-standard security measures to ensure:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Secure email delivery</li>
                <li>Encrypted download links</li>
                <li>Protection against unauthorized access</li>
                <li>Privacy of your personal information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Customer Support</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions or issues with delivery, our support team is here to help:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a></p>
                <p className="text-gray-700 mt-2"><strong>Response Time:</strong> Within 24-48 hours</p>
                <p className="text-gray-700 mt-2"><strong>Support Hours:</strong> Monday - Sunday, 9 AM - 9 PM IST</p>
              </div>
            </section>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
              <h3 className="text-lg font-semibold text-green-900 mb-2">✓ Instant Access Guarantee</h3>
              <p className="text-green-800">
                We guarantee that you will receive your download link within 10 minutes of purchase. If you don't receive it, contact us immediately and we'll resolve it right away!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
