import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import AddToCartButton from './AddToCartButton';

interface BundleOfferProps {
  onCTAClick: () => void;
}

const BundleOffer: React.FC<BundleOfferProps> = ({ onCTAClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-xl"
          >
            🔥 LIMITED TIME OFFER 🔥
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Both Versions at Only ₹249/-
          </h2>
          <p className="text-xl text-white/90">
            Buy Version 1 & Get Version 2 - <span className="font-bold text-yellow-300">ABSOLUTELY FREE!</span>
          </p>
        </motion.div>

        {/* Bundle Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Version 1 - Simplified */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="relative mb-4">
                <img
                  src="/images/Main_PDP_Image.webp"
                  alt="Version 1 - Simplified"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Variation 1- Simplified
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mt-6 mb-2">
                Spiral Bound Edition
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Easy to read, simplified explanations
              </p>
            </motion.div>

            {/* Plus Icon */}
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="bg-white rounded-full p-6 shadow-2xl"
              >
                <Plus className="w-12 h-12 text-green-600" strokeWidth={3} />
              </motion.div>
            </div>

            {/* Version 2 - Illustrated */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-2xl"
            >
              <div className="relative mb-4">
                <img
                  src="/images/book-illustrated.webp"
                  alt="Version 2 - Illustrated"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Variation 2- Illustrated
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mt-6 mb-2">
                Hardcover Edition
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Beautifully illustrated with visuals
              </p>
            </motion.div>
          </div>

          {/* Price Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30"
          >
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              {/* Physical Books */}
              <div className="text-center">
                <p className="text-white/80 mb-2">Physical Books Cost:</p>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-4xl font-bold text-white line-through">₹3,500</span>
                  <span className="text-3xl text-red-400">✕</span>
                </div>
                <p className="text-white/60 text-sm mt-2">Hardcopy not available</p>
              </div>

              {/* E-books */}
              <div className="text-center">
                <p className="text-white/80 mb-2">E-book Bundle Price:</p>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-5xl font-bold text-yellow-300">₹249</span>
                  <span className="text-3xl text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">SAVE BIG!</span>
                  <span className="text-green-300 text-sm font-semibold">A great deal!</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AddToCartButton
                productId="simple-quran-bundle"
                productName="Simple Quran - Complete Bundle"
                productPrice={249}
                productDescription="Both Version 1 (Simplified) & Version 2 (Illustrated)"
                className="text-lg px-10 py-4"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCTAClick}
                className="bg-white text-green-700 px-10 py-4 rounded-lg font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300"
              >
                🎁 Buy Now - ₹249
              </motion.button>
            </div>
            <p className="text-white/80 mt-4 text-sm">
              📱 Digital delivery only • Instant access after payment • 7-day money-back guarantee
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BundleOffer;
