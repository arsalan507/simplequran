import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { X, Loader2, Shield } from 'lucide-react';
import { PaymentModalProps, PaymentData } from '../types';
import { initiatePayment } from '../services/instamojo';

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PaymentData>();

  const onSubmit = async (data: PaymentData) => {
    setIsProcessing(true);
    setError(null);

    try {
      // Create payment request with Instamojo
      const result = await initiatePayment(
        data.name || 'Customer',
        data.email,
        data.phone
      );

      if (result.success && result.url) {
        // Store customer data in sessionStorage for success page
        sessionStorage.setItem('customerEmail', data.email);
        sessionStorage.setItem('customerName', data.name || 'Customer');

        // Redirect to Instamojo payment page
        window.location.href = result.url;
      } else {
        throw new Error(result.error || 'Failed to create payment request');
      }
    } catch (err: any) {
      setError(err.message || 'Payment initialization failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    if (!isProcessing) {
      reset();
      setError(null);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
          >
            {/* Close Button */}
            {!isProcessing && (
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Complete Your Purchase
              </h2>
              <p className="text-gray-600">
                Enter your details to proceed to secure payment
              </p>
            </div>

            {/* Price Display */}
            <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-5 mb-6 border-2 border-green-200">
              <div className="text-center mb-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  BUNDLE OFFER
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Regular Price</p>
                  <span className="text-2xl text-red-600 line-through font-bold">₹3,500</span>
                </div>
                <span className="text-2xl text-gray-400">→</span>
                <div className="text-center">
                  <p className="text-xs text-gray-700 font-semibold mb-1">Bundle Price</p>
                  <span className="text-4xl font-bold text-green-600">₹249</span>
                </div>
              </div>
              <p className="text-sm text-center text-gray-700 font-semibold">
                Get BOTH versions • One-time payment • Lifetime access
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                  disabled={isProcessing}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your@email.com"
                  disabled={isProcessing}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="9876543210"
                  maxLength={10}
                  disabled={isProcessing}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    <span>Proceed to Payment</span>
                  </>
                )}
              </button>
            </form>

            {/* Security Note */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secured by Instamojo • 100% Safe & Encrypted</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
