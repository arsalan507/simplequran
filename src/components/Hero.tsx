import { motion } from 'framer-motion';
import { Download, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  onCTAClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-amber-50 pt-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Limited Time Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Simple Quran{' '}
              <span className="text-primary">- Made Simple</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Get <span className="font-bold text-red-600">BOTH versions</span> - Simplified AND Illustrated guide{' '}
              <span className="font-semibold text-primary">30 Juz Explained</span>{' '}
              in one amazing bundle
            </motion.p>

            {/* Special Offer Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg mb-6 shadow-lg"
            >
              <span className="text-lg font-bold">🎁 Buy Version 1 & Get Version 2 - ABSOLUTELY FREE</span>
            </motion.div>

            {/* Price Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-xl mb-8 border-2 border-green-100"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Hardcopy Costs:</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl text-red-600 line-through font-bold">₹3500</span>
                    <span className="text-red-600 font-bold">✕</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-3">
                  <div>
                    <span className="text-gray-800 font-semibold">Soft Copy (E-book):</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">SAVE BIG!</span>
                      <span className="text-sm text-green-600">A great deal!</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl text-green-600 font-bold">₹249</span>
                    <span className="text-green-600 font-bold text-2xl">✓</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCTAClick}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </motion.button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600"
            >
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">Instant Digital Access • Secure Payment</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Book Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              {/* Actual Product Image */}
              <div className="relative mx-auto max-w-md lg:max-w-lg">
                <img
                  src="/images/Main_PDP_Image.webp"
                  alt="Quran Made Simple - Spiral Bound Edition"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
                >
                  FIRST TIME IN INDIA 🇮🇳
                </motion.div>

                {/* Info Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg text-sm whitespace-nowrap"
                >
                  📱 E-book: No physical book will be delivered
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-amber-400/30 rounded-2xl blur-3xl transform scale-110 -z-10"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 8.87C120 17.73 240 35.47 360 44.33C480 53.2 600 53.2 720 48.83C840 44.47 960 35.73 1080 35.73C1200 35.73 1320 44.47 1380 48.83L1440 53.2V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
