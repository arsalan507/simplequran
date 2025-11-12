// Type definitions for SimpleQuran landing page

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

export interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface PaymentData {
  email: string;
  name?: string;
  phone: string;
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (data: RazorpayResponse) => void;
}
