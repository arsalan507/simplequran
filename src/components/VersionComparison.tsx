import { motion } from 'framer-motion';

const VersionComparison: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Holy Quran Made <span className="text-green-600">Simple & Illustrated</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Made simple to learn & Illustrated to reflect and remember.{' '}
            <span className="font-semibold text-gray-900">( E-BOOK ONLY )</span>
          </p>
        </motion.div>

        {/* Animated GIF Showcase */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-50 via-white to-amber-50 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
          >
            {/* Animated GIF */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/version-comparison.gif"
                alt="Version 1 Simplified vs Version 2 Illustrated - Animated Comparison"
                className="w-full h-auto"
              />
            </div>

            {/* Description Below GIF */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* Version 1 Description */}
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Version 1 - Simplified
                </h3>
                <p className="text-gray-600 mb-4">
                  Clear and easy to understand
                </p>
                <div className="text-left space-y-2 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">Key Concepts:</span> Additional tools, Main theme, Highlighted Verse</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">Each section:</span> Story, Discussion, Content overview</p>
                  </div>
                </div>
              </div>

              {/* Version 2 Description */}
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Version 2 - Illustrated
                </h3>
                <p className="text-gray-600 mb-4">
                  Visual storytelling at its best
                </p>
                <div className="text-left space-y-2 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">Beautiful illustrations</span> that bring the Quran to life</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0"></div>
                    <p><span className="font-semibold">Perfect for visual learners</span> and children</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-green-600 to-amber-500 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <p className="text-white text-xl sm:text-2xl font-bold mb-2">
                  Get Both Versions for Just ₹249
                </p>
                <p className="text-white text-base sm:text-lg opacity-90">
                  Buy Version 1 & Get Version 2 <span className="font-extrabold">ABSOLUTELY FREE!</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VersionComparison;
