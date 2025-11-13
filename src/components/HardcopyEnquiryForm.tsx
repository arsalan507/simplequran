import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const HardcopyEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    quantity: '1',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send enquiry to API endpoint
      const response = await fetch('/api/hardcopy-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setSubmitStatus('success');

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          quantity: '1',
          message: ''
        });
        setSubmitStatus('idle');
      }, 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');

      // Show error for 5 seconds then reset
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="hardcopy-enquiry" className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20 overflow-hidden">
      {/* Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60,0 L70,40 L110,40 L78,62 L90,102 L60,80 L30,102 L42,62 L10,40 L50,40 Z' fill='%23059669' fill-opacity='0.3' /%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      {/* Decorative Book and Pen */}
      <div className="absolute top-10 left-10 text-7xl opacity-10">✍️</div>
      <div className="absolute top-20 right-20 text-7xl opacity-10">📖</div>
      <div className="absolute bottom-20 left-20 text-7xl opacity-10">📦</div>
      <div className="absolute bottom-10 right-10 text-7xl opacity-10">📬</div>

      {/* Crescent and Star */}
      <div className="absolute top-1/2 left-5 text-5xl opacity-5 transform -translate-y-1/2">☪️</div>
      <div className="absolute top-1/2 right-5 text-5xl opacity-5 transform -translate-y-1/2">☪️</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
            LIMITED AVAILABILITY
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Want a <span className="text-green-600">Hardcopy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Get the beautiful physical edition of SimpleQuran delivered to your doorstep
          </p>
          <div className="inline-flex items-center space-x-4 bg-white rounded-xl px-6 py-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-green-600" />
            <div className="text-left">
              <p className="text-sm text-gray-600">Hardcopy Price</p>
              <p className="text-3xl font-bold text-green-600">₹3,500</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Enquiry Sent!</h3>
              <p className="text-lg text-gray-600">
                Thank you for your interest! We'll contact you shortly with details about the hardcopy.
              </p>
            </div>
          ) : submitStatus === 'error' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚠️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Submission Failed</h3>
              <p className="text-lg text-gray-600 mb-6">
                We couldn't process your enquiry at this moment.
              </p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all"
              >
                Try Again
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Or email us directly at{' '}
                <a href="mailto:info.simplequran@gmail.com" className="text-green-600 font-semibold hover:underline">
                  info.simplequran@gmail.com
                </a>
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fill in Your Details</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantity <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                    >
                      <option value="1">1 Copy - ₹3,500</option>
                      <option value="2">2 Copies - ₹7,000</option>
                      <option value="3">3 Copies - ₹10,500</option>
                      <option value="4">4 Copies - ₹14,000</option>
                      <option value="5">5+ Copies - Contact us</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors resize-none"
                      placeholder="House/Flat No, Street Name, Area"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="Your state"
                    />
                  </div>

                  <div>
                    <label htmlFor="pincode" className="block text-sm font-semibold text-gray-700 mb-2">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{6}"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="6-digit PIN"
                    />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:outline-none transition-colors resize-none"
                    placeholder="Any special instructions or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to be contacted regarding your hardcopy enquiry.
                </p>
              </form>
            </>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">📦</div>
            <h4 className="font-bold text-gray-900 mb-2">Secure Packaging</h4>
            <p className="text-sm text-gray-600">Carefully packed to ensure safe delivery</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">🚚</div>
            <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-600">Delivered within 7-10 business days</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center">
            <div className="text-3xl mb-2">✨</div>
            <h4 className="font-bold text-gray-900 mb-2">Premium Quality</h4>
            <p className="text-sm text-gray-600">High-quality print on premium paper</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HardcopyEnquiryForm;
