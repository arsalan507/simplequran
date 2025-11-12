import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  productPrice: number;
  productDescription?: string;
  className?: string;
  fullWidth?: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  productName,
  productPrice,
  productDescription,
  className = '',
  fullWidth = false,
}) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price: productPrice,
      description: productDescription,
    });

    // Show success state
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleAddToCart}
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${justAdded
          ? 'bg-green-500 hover:bg-green-600'
          : 'bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90'
        }
        text-white py-4 px-8 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2
        ${className}
      `}
      disabled={justAdded}
    >
      {justAdded ? (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          >
            <CheckCircle className="w-6 h-6" />
          </motion.div>
          <span>Added to Cart!</span>
        </>
      ) : (
        <>
          <ShoppingCart className="w-6 h-6" />
          <span>Add to Cart</span>
        </>
      )}
    </motion.button>
  );
};

export default AddToCartButton;
