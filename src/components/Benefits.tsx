import { motion } from 'framer-motion';
import { BookOpen, Palette, Users, Zap } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    id: 1,
    icon: 'book-open',
    title: 'Easy to Understand',
    description: 'Clear explanations and simple language make Quranic teachings accessible for all ages and backgrounds.',
  },
  {
    id: 2,
    icon: 'palette',
    title: 'Beautifully Illustrated',
    description: 'Engaging visuals, timelines, and diagrams bring the stories and teachings to life.',
  },
  {
    id: 3,
    icon: 'users',
    title: 'Perfect for Families',
    description: 'Learn together with your children. Suitable for both beginners and those seeking deeper understanding.',
  },
  {
    id: 4,
    icon: 'zap',
    title: 'Instant Access',
    description: 'Download immediately after purchase. Read on any device - phone, tablet, or computer.',
  },
];

const iconComponents = {
  'book-open': BookOpen,
  'palette': Palette,
  'users': Users,
  'zap': Zap,
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white">
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
            Why Choose <span className="text-primary">SimpleQuran</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand and appreciate the Quran's timeless wisdom
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconComponents[benefit.icon as keyof typeof iconComponents];

            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100"
              >
                {/* Icon */}
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 font-medium">
            Join <span className="text-primary font-bold">500+ readers</span> who have already transformed their understanding
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
