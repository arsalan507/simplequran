import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const UrgencyTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl p-6 shadow-2xl"
    >
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Flame className="w-6 h-6 animate-pulse" />
        <h3 className="text-xl font-bold">Limited Time Offer!</h3>
        <Flame className="w-6 h-6 animate-pulse" />
      </div>

      <p className="text-center text-sm mb-4 opacity-95">
        Bundle offer ends in:
      </p>

      <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs uppercase mt-1 opacity-90">Hours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs uppercase mt-1 opacity-90">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
          <div className="text-3xl font-bold animate-pulse">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs uppercase mt-1 opacity-90">Seconds</div>
        </div>
      </div>

      <p className="text-center text-sm mt-4 font-semibold">
        Don't miss out on 93% OFF!
      </p>
    </motion.div>
  );
};

export default UrgencyTimer;
