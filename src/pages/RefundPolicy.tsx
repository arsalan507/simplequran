import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const RefundPolicy = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Simple Quran, we want you to be completely satisfied with your purchase. This Refund and Cancellation Policy outlines the circumstances under which refunds and cancellations are available for our digital products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Order Cancellation</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since our products are digital and delivered instantly, the cancellation policy is as follows:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Before Download</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you wish to cancel your order <strong>before downloading the e-book</strong>, please contact us immediately at <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a>. We will process a full refund within 24 hours.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 After Download</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once you have downloaded the e-book, cancellations are subject to our 7-day money-back guarantee policy (see section 4 below). You may still request a refund within 7 days if you are not satisfied with the product.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Payment Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you encounter any payment issues or accidental duplicate purchases, contact us within 24 hours for immediate cancellation and full refund.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <p className="text-blue-800 font-semibold">To cancel an order, email us at support@simplequran.in with your order number and reason for cancellation.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Digital Products</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All our products are digital e-books delivered electronically. Once you complete your purchase, you will receive instant access to download the e-books via email.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-amber-800 font-semibold">Important: No physical products will be shipped or delivered.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 7-Day Money-Back Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a <strong>7-day money-back guarantee</strong> for all our digital products. If you are not satisfied with your purchase for any reason, you can request a full refund within 7 days of your purchase date.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Eligibility for Refund</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are eligible for a refund if:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You request a refund within 7 days of purchase</li>
                <li>You provide a valid reason for the refund request</li>
                <li>You have not violated our Terms of Service</li>
                <li>You have not shared or distributed the e-book to others</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Non-Refundable Circumstances</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will NOT be provided in the following cases:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Refund requests made after 7 days of purchase</li>
                <li>Claims of "I didn't read the product description"</li>
                <li>Technical issues on your device (we provide technical support)</li>
                <li>Change of mind after downloading the product</li>
                <li>Violation of our Terms of Service or copyright infringement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-3">
                <li>
                  <strong>Contact Us:</strong> Send an email to <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a> with the subject line "Refund Request"
                </li>
                <li>
                  <strong>Provide Details:</strong> Include your order number, purchase date, and reason for refund
                </li>
                <li>
                  <strong>Verification:</strong> We will verify your purchase and eligibility
                </li>
                <li>
                  <strong>Processing:</strong> Once approved, your refund will be processed within 5-7 business days
                </li>
                <li>
                  <strong>Confirmation:</strong> You will receive a confirmation email once the refund is processed
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Refund Method</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refunds will be processed using the same payment method used for the original purchase:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Credit/Debit Card:</strong> Refund will be credited to the original card within 5-7 business days</li>
                <li><strong>UPI:</strong> Refund will be credited to your UPI account within 3-5 business days</li>
                <li><strong>Net Banking:</strong> Refund will be credited to your bank account within 5-7 business days</li>
                <li><strong>Wallets:</strong> Refund will be credited to your wallet within 3-5 business days</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Please note that the actual time for the refund to reflect in your account may vary depending on your bank or payment provider.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Technical Issues</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are experiencing technical issues with downloading or accessing your e-book, please contact our support team before requesting a refund. We are committed to helping you resolve any technical problems.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Common technical issues we can help with:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Download link not working</li>
                <li>File format compatibility issues</li>
                <li>Unable to open the PDF file</li>
                <li>Email not received</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Partial Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not offer partial refunds. Since our product is a bundle of both e-book versions (Simplified and Illustrated), refunds are only available for the complete purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Chargebacks</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you file a chargeback or payment dispute with your bank or payment provider without first contacting us, we reserve the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Permanently ban your account</li>
                <li>Revoke access to all purchased products</li>
                <li>Report fraudulent chargebacks to relevant authorities</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Please contact us first at <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a> if you have any concerns about your purchase.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Refund Processing Time</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Timeline:</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Request Review:</strong> 1-2 business days</li>
                  <li><strong>Refund Approval:</strong> 1 business day</li>
                  <li><strong>Refund Processing:</strong> 5-7 business days</li>
                  <li><strong>Bank Processing:</strong> Additional 3-5 business days (varies by bank)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after any changes constitutes acceptance of the new policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our Refund Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:support@simplequran.in" className="text-primary hover:underline">support@simplequran.in</a></p>
                <p className="text-gray-700 mt-2"><strong>Website:</strong> <a href="https://simplequran.in" className="text-primary hover:underline">https://simplequran.in</a></p>
                <p className="text-gray-700 mt-2"><strong>Response Time:</strong> Within 24-48 hours</p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Commitment</h3>
              <p className="text-blue-800">
                We are committed to providing high-quality digital products and excellent customer service. If you are not satisfied with your purchase, we will work with you to resolve the issue or process your refund promptly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
