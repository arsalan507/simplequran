import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import PaymentSuccess from './pages/PaymentSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsOfService from './pages/TermsOfService';
import DesignShowcase from './pages/DesignShowcase';
import ProductPage from './pages/ProductPage';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage variant="bold" />} />
        <Route path="/landing" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/design-showcase" element={<DesignShowcase />} />
        <Route path="/product" element={<ProductPage variant="bold" />} />
      </Routes>
      <CartDrawer />
    </Router>
  );
}

export default App;
