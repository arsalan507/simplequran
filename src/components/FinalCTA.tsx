import { motion } from 'framer-motion';
import { Download, Clock, Shield, CreditCard } from 'lucide-react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-green-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-primary/10">
            {/* Urgency Badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg"
            >
              <Clock className="w-5 h-5" />
              <span className="text-sm font-bold">🔥 Get Both Versions at ₹249 - ABSOLUTELY FREE Version 2!</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Start Your Journey <span className="text-primary">Today</span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Join hundreds of readers who are discovering the beauty and wisdom of the Quran
            </p>

            {/* Price Display */}
            <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-6 mb-8 border-2 border-green-200">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm mb-1">Hardcopy Price</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-red-600 line-through">₹3,500</span>
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                </div>
                <div className="text-3xl text-gray-400">→</div>
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold text-sm mb-1">E-book Bundle</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-5xl font-bold text-green-600">₹249</span>
                    <span className="text-green-600 font-bold text-2xl">✓</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">SAVE BIG!</span>
                <span className="text-green-700 font-semibold">Get both versions - A great deal!</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCTAClick}
              className="w-full sm:w-auto mx-auto block bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 mb-8"
            >
              <span className="flex items-center justify-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Get Instant Access Now</span>
              </span>
            </motion.button>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-sm font-medium">100% Secure Checkout</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <Download className="w-6 h-6 text-green-600" />
                <span className="text-sm font-medium">Instant Download</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <CreditCard className="w-6 h-6 text-green-600" />
                <span className="text-sm font-medium">7-Day Money Back</span>
              </div>
            </div>

            {/* Payment Logos */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600 mb-4">Secure payment powered by Razorpay</p>
              <div className="flex items-center justify-center space-x-6 flex-wrap">
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                  💳 Cards
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                  📱 UPI
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                  🏦 Net Banking
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                  👛 Wallets
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              🎁 <span className="font-semibold">Special Offer:</span> Buy Version 1 & Get Version 2 ABSOLUTELY FREE + Lifetime updates!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
