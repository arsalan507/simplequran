import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Simple Quran's website (simplequran.in) and purchasing our digital products, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Simple Quran provides digital educational content in the form of e-books focused on Islamic teachings and Quranic studies. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Sale of digital e-books in PDF format</li>
                <li>Electronic delivery of purchased content via email</li>
                <li>Customer support for digital products</li>
                <li>Access to product updates and improvements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you make a purchase, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your purchase confirmation and download links</li>
                <li>Accept responsibility for all activities under your email account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Our Copyright</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, including but not limited to text, graphics, logos, images, and e-books sold on this website are the property of Simple Quran or our content suppliers and are protected by international copyright laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 License Grant</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon purchase, we grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Download and access the purchased e-books for personal use</li>
                <li>Print copies for personal use only</li>
                <li>Share with immediate family members in your household</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Restrictions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are NOT permitted to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Reproduce, duplicate, copy, or resell our digital products</li>
                <li>Modify, adapt, or create derivative works</li>
                <li>Distribute, share publicly, or upload to file-sharing platforms</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Use the content for commercial purposes without written permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our website or products for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Any unlawful purpose or to violate any laws</li>
                <li>Sharing download links on public forums, social media, or websites</li>
                <li>Uploading to torrent sites or file-sharing platforms</li>
                <li>Creating competing products or services</li>
                <li>Reverse engineering or attempting to extract source materials</li>
                <li>Harassing, abusing, or harming others</li>
                <li>Fraudulent or deceptive activities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Purchases and Payments</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Pricing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All prices are listed in Indian Rupees (INR). We reserve the right to modify our prices at any time. Promotional pricing is subject to terms and conditions specified in the offer.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Payment Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments are processed securely through Razorpay. We do not store your payment information on our servers. By making a purchase, you agree to Razorpay's terms and conditions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Order Confirmation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once payment is confirmed, you will receive an order confirmation email with download links. This constitutes acceptance of your order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Refunds and Cancellations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please refer to our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for detailed information about refunds, cancellations, and our 7-day money-back guarantee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Digital Product Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please refer to our <a href="/shipping-policy" className="text-primary hover:underline">Shipping & Delivery Policy</a> for information about how digital products are delivered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our digital products and services are provided "as is" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Merchantability or fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Freedom from defects, errors, or viruses</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not warrant that the content will meet your requirements or that the service will be uninterrupted, timely, secure, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Simple Quran shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Loss of profits, data, or goodwill</li>
                <li>Service interruption</li>
                <li>Computer damage or system failure</li>
                <li>Cost of substitute products or services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Our total liability shall not exceed the amount paid by you for the product in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Simple Quran, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your violation of these Terms of Service</li>
                <li>Your violation of any third-party rights</li>
                <li>Your use or misuse of our products or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Violation of these Terms of Service</li>
                <li>Fraudulent or illegal activity</li>
                <li>Copyright infringement or piracy</li>
                <li>Abusive behavior towards our staff or community</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after changes are posted constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of our services is also governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. Please review our Privacy Policy to understand our practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining terms remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service, together with our Privacy Policy, Refund Policy, and Shipping Policy, constitute the entire agreement between you and Simple Quran regarding the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a></p>
                <p className="text-gray-700 mt-2"><strong>Website:</strong> <a href="https://simplequran.in" className="text-primary hover:underline">https://simplequran.in</a></p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <p className="text-blue-900 font-semibold">
                By purchasing and using our products, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
