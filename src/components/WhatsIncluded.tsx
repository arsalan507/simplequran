import { motion } from 'framer-motion';
import { Check, FileText, BookMarked, Star } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const features = [
    'Complete overview of all 114 Surahs with context and background',
    'Beautiful illustrations and timelines for key events',
    'Easy-to-understand explanations of complex concepts',
    'Practical applications for modern daily life',
    'Stories of the Prophets with engaging narratives',
    'Key themes and lessons from each Surah',
    'Historical context and revelation circumstances',
    'Glossary of important Arabic terms',
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's <span className="text-primary">Included</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A comprehensive guide packed with everything you need to deepen your understanding of the Quran
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 bg-primary/10 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Card 1: Format */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-xl p-3">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Format Details</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Pages:</span> 250+ beautifully designed pages</p>
                    <p><span className="font-semibold">Format:</span> PDF (works on all devices)</p>
                    <p><span className="font-semibold">Size:</span> Optimized for quick download</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Bonus */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 shadow-lg border border-secondary/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 rounded-xl p-3">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bonus Materials</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>✨ Printable reference charts</p>
                    <p>✨ Surah quick-reference guide</p>
                    <p>✨ Daily reflection prompts</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Updates */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 rounded-xl p-3">
                  <BookMarked className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime Access</h3>
                  <p className="text-gray-600">
                    One-time payment for lifetime access. Get all future updates and additions for free.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
