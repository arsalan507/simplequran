import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail, Home, ArrowRight } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    // Get customer info from sessionStorage
    const email = sessionStorage.getItem('customerEmail') || '';
    const name = sessionStorage.getItem('customerName') || 'Customer';
    setCustomerEmail(email);
    setCustomerName(name);

    // Get payment details from URL params (Instamojo adds these)
    const paymentId = searchParams.get('payment_id');
    const paymentRequestId = searchParams.get('payment_request_id');
    const paymentStatus = searchParams.get('payment_status');

    console.log('Payment Details:', {
      paymentId,
      paymentRequestId,
      paymentStatus,
      email,
      name,
    });

    // In production, you would:
    // 1. Verify payment with Instamojo API
    // 2. Send download link to customer email
    // 3. Store order in database
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 sm:p-12"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50"></div>
            <CheckCircle className="w-24 h-24 text-green-500 relative" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Payment Successful! 🎉
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Thank you for your purchase, {customerName}!
          </p>
          <p className="text-gray-500">
            Your order has been confirmed and is being processed.
          </p>
        </motion.div>

        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-6 mb-6 border-2 border-green-200"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">What You'll Receive:</h2>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Version 1:</strong> Simplified Quran Guide (30 Juz Explained)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Version 2:</strong> Illustrated Quran Guide - FREE Bonus
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Format:</strong> High-quality PDF files
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                <strong>Access:</strong> Lifetime download link
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Email Notification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6"
        >
          <div className="flex items-start space-x-3">
            <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Check Your Email</h3>
              <p className="text-blue-800 text-sm mb-2">
                We've sent a confirmation email with download links to:
              </p>
              <p className="font-semibold text-blue-900">{customerEmail}</p>
              <p className="text-blue-700 text-sm mt-3">
                <strong>Didn't receive it?</strong> Check your spam folder or contact us at{' '}
                <a href="mailto:support@simplequran.in" className="underline hover:text-blue-900">
                  support@simplequran.in
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Download Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-50 rounded-lg p-6 mb-6"
        >
          <div className="flex items-start space-x-3">
            <Download className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                <li>Open the email from Simple Quran</li>
                <li>Click on the download links for both e-book versions</li>
                <li>Save the PDF files to your device</li>
                <li>Open with any PDF reader and start learning!</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <a
            href="/contact"
            className="flex-1 bg-white hover:bg-gray-50 text-primary border-2 border-primary px-6 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Need Help?</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Support Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t border-gray-200 text-center"
        >
          <p className="text-sm text-gray-600 mb-2">
            Having trouble accessing your e-books?
          </p>
          <p className="text-sm text-gray-600">
            Our support team is here to help:{' '}
            <a
              href="mailto:support@simplequran.in"
              className="text-primary hover:underline font-semibold"
            >
              support@simplequran.in
            </a>
          </p>
          <p className="text-xs text-gray-500 mt-3">
            Support Hours: Monday - Sunday, 9 AM - 9 PM IST
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
