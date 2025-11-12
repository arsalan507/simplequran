import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShoppingCart, User, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { openCart, getTotalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-2 shadow-md">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary">
                Simple Quran
              </span>
            </motion.div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <a
                href="/contact"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openCart}
                className="relative p-2 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </motion.button>

              {/* Auth Button */}
              {isAuthenticated && user ? (
                <div className="flex items-center space-x-2">
                  <div className="hidden sm:block text-right">
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-600">{user.email}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={logout}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    aria-label="Logout"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Login</span>
                </motion.button>
              )}

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCTAClick}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base hidden sm:block"
              >
                Get Your Copy
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="login"
      />
    </>
  );
};

export default Header;
