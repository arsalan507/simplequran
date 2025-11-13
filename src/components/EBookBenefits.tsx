import { motion } from 'framer-motion';
import { CheckCircle, X, FileText, BookOpen } from 'lucide-react';

const EBookBenefits: React.FC = () => {
  const benefits = [
    {
      feature: 'Can print multiple times',
      pdf: true,
      physical: false,
    },
    {
      feature: 'Can share with family and friends',
      pdf: true,
      physical: false,
    },
    {
      feature: 'Can read anywhere any time',
      pdf: true,
      physical: false,
    },
    {
      feature: 'Cost effective',
      pdf: true,
      physical: false,
    },
    {
      feature: 'No fair of disrespect in transit (Delivery)',
      pdf: true,
      physical: false,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-gray-50 to-green-50">
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
            Benefits Of The <span className="text-green-600">eBook</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Why digital is the smarter choice for your Quran learning journey
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header Row */}
            <div className="grid grid-cols-3 gap-4 p-6 sm:p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b-2 border-green-100">
              <div></div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-3 shadow-lg">
                  <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">PDF</h3>
                <p className="text-xs sm:text-sm text-gray-600">Digital eBook</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mb-3 shadow-lg">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Physical Book</h3>
                <p className="text-xs sm:text-sm text-gray-600">Hardcopy</p>
              </div>
            </div>

            {/* Benefit Rows */}
            <div className="divide-y divide-gray-100">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-4 sm:p-6 hover:bg-green-50/50 transition-colors"
                >
                  {/* Feature Name */}
                  <div className="flex items-center">
                    <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                      {benefit.feature}
                    </p>
                  </div>

                  {/* PDF Column */}
                  <div className="flex items-center justify-center">
                    {benefit.pdf ? (
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full">
                        <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full">
                        <X className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
                      </div>
                    )}
                  </div>

                  {/* Physical Book Column */}
                  <div className="flex items-center justify-center">
                    {benefit.physical ? (
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full">
                        <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full">
                        <X className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 sm:p-8 text-center">
              <p className="text-white text-lg sm:text-xl font-bold mb-2">
                Get the PDF eBook Bundle at just ₹249
              </p>
              <p className="text-green-100 text-sm sm:text-base">
                Save ₹3,251 • Instant Download • Lifetime Access
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EBookBenefits;
