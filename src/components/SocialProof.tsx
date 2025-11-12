import { motion } from 'framer-motion';
import { Download, Star, Globe, TrendingUp } from 'lucide-react';

const SocialProof: React.FC = () => {
  const stats = [
    {
      id: 1,
      icon: Download,
      value: '500+',
      label: 'Happy Readers',
      color: 'from-primary to-accent',
    },
    {
      id: 2,
      icon: Star,
      value: '4.9★',
      label: 'Average Rating',
      color: 'from-secondary to-amber-400',
    },
    {
      id: 3,
      icon: Globe,
      value: '15+',
      label: 'Cities Reached',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 4,
      icon: TrendingUp,
      value: '98%',
      label: 'Satisfaction Rate',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Families <span className="text-secondary">Worldwide</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Join a growing community of readers who are discovering the beauty of the Quran
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-lg">
                <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} style={{
                  filter: 'drop-shadow(0 0 8px currentColor)',
                }} />
              </div>

              {/* Value */}
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-white/90 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
            <span className="text-white font-semibold">✓ Instant Download</span>
            <span className="text-white/50 hidden sm:block">•</span>
            <span className="text-white font-semibold">✓ Secure Payment</span>
            <span className="text-white/50 hidden sm:block">•</span>
            <span className="text-white font-semibold">✓ Lifetime Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
