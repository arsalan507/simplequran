import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ as FAQType } from '../types';

const faqs: FAQType[] = [
  {
    id: 1,
    question: 'What format is the e-book available in?',
    answer: 'The e-book is available as a high-quality PDF file that works on all devices - smartphones, tablets, computers, and e-readers. You can read it online or download it for offline access.',
  },
  {
    id: 2,
    question: 'How do I access the e-book after purchase?',
    answer: 'After completing your payment, you\'ll receive an instant email with a secure download link. You can download the e-book immediately and start reading right away. The link never expires, so you can download it again anytime.',
  },
  {
    id: 3,
    question: 'Is this suitable for beginners?',
    answer: 'Absolutely! SimpleQuran is designed for readers of all levels. Whether you\'re just starting your journey or looking to deepen your understanding, the clear explanations and beautiful illustrations make it accessible for everyone.',
  },
  {
    id: 4,
    question: 'Can I share this with my family?',
    answer: 'Yes! Your purchase includes a personal license that allows you to share the e-book with your immediate family members. However, please don\'t distribute it publicly or share it on social media.',
  },
  {
    id: 5,
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods through Razorpay, including credit/debit cards, UPI, net banking, and digital wallets. All payments are 100% secure and encrypted.',
  },
  {
    id: 6,
    question: 'Do you offer refunds?',
    answer: 'Yes! We offer a 7-day money-back guarantee. If you\'re not satisfied with your purchase for any reason, simply email us within 7 days and we\'ll process a full refund, no questions asked.',
  },
  {
    id: 7,
    question: 'Will I get future updates?',
    answer: 'Yes! Your one-time payment includes lifetime access to all future updates and additions. Whenever we improve the content or add new features, you\'ll receive the updated version for free.',
  },
  {
    id: 8,
    question: 'Can I print the e-book?',
    answer: 'Yes, you can print the e-book for personal use. The PDF is optimized for both digital reading and printing. We also include bonus printable reference charts.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
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
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about SimpleQuran
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-green-50/50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700">
            Still have questions?{' '}
            <a
              href="mailto:support@simplequran.in"
              className="text-primary font-semibold hover:underline"
            >
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
