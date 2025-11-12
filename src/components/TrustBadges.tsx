import { motion } from 'framer-motion';
import { Shield, Lock, Award, CheckCircle, Clock, RefreshCw } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: '100% Secure',
      subtitle: 'SSL Encrypted',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: CheckCircle,
      title: '5000+ Satisfied',
      subtitle: 'Customers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: RefreshCw,
      title: '7-Day',
      subtitle: 'Money Back',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      title: 'Instant',
      subtitle: 'Delivery',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: Award,
      title: '4.9/5',
      subtitle: 'Rating',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: Lock,
      title: 'Privacy',
      subtitle: 'Protected',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${badge.bgColor} rounded-xl p-4 text-center transition-all duration-300 border-2 border-transparent hover:border-${badge.color.replace('text-', '')}`}
            >
              <badge.icon className={`w-10 h-10 ${badge.color} mx-auto mb-2`} />
              <h3 className="font-bold text-gray-900 text-sm">{badge.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{badge.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
