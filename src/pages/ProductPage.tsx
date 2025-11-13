import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Truck, BookOpen, Award, CheckCircle, ArrowRight } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import HardcopyEnquiryForm from '../components/HardcopyEnquiryForm';
import EBookBenefits from '../components/EBookBenefits';
import VersionComparison from '../components/VersionComparison';

// Design variation selector
type DesignVariation = 'minimalist' | 'bold' | 'warm' | 'classic' | 'magazine';

interface ProductPageProps {
  variant?: DesignVariation;
}

const ProductPage: React.FC<ProductPageProps> = ({ variant = 'minimalist' }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const productImages = [
    '/images/Main_PDP_Image.webp',
    '/images/book-offer.webp',
    '/images/book-illustrated.webp',
    '/images/bundle-offer.webp',
  ];

  const reviews = [
    {
      name: 'Ahmed Khan',
      rating: 5,
      text: 'Best Quran guide I\'ve ever used. Simple and beautiful! My kids love reading it and it helped them understand the Quran much better. The illustrations are stunning!',
      date: '2 weeks ago',
      verified: true
    },
    {
      name: 'Fatima Rahman',
      rating: 5,
      text: 'The illustrations make it so easy to understand. Highly recommend! I bought this for my entire family and everyone is enjoying it. Worth every penny!',
      date: '1 month ago',
      verified: true
    },
    {
      name: 'Ibrahim Siddiqui',
      rating: 5,
      text: 'Worth every rupee. Both versions are excellent! The simplified version is perfect for daily reading and the illustrated one is amazing for kids. Great value bundle!',
      date: '3 weeks ago',
      verified: true
    },
    {
      name: 'Aisha Malik',
      rating: 5,
      text: 'Such a beautiful book! The way each Surah is explained makes it so easy to connect with the Quran. My whole family reads it together now.',
      date: '1 week ago',
      verified: true
    },
    {
      name: 'Mohammed Ali',
      rating: 5,
      text: 'Excellent quality and content. The PDF is high resolution and the explanations are clear and easy to understand. Highly recommend for all ages!',
      date: '2 months ago',
      verified: true
    },
  ];

  // Design Variation 1: Minimalist Premium
  const MinimalistDesign = () => (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Images */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-gray-50 rounded-3xl overflow-hidden"
            >
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-gray-900' : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-4">
                Simple Quran Bundle
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(346 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-5xl font-light text-gray-900">₹249</span>
                <span className="text-2xl text-gray-400 line-through">₹3,500</span>
              </div>
              <p className="text-sm text-gray-600">Save 93% • Limited time offer</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {[
                'Instills a love for the Quran',
                'All the 30 Juz simplified',
                'Breaks down each Surah and story',
                'Excellent for all learning stages',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buy Button */}
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full bg-gray-900 text-white py-5 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
            >
              Buy It Now
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <p className="text-xs text-gray-600">30-Day<br />Money Back</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <p className="text-xs text-gray-600">Made with<br />Love</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="text-xs text-gray-600">Instant<br />Delivery</p>
              </div>
            </div>

            {/* Reviews Preview */}
            <div className="pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">What people say</h3>
              <div className="space-y-4">
                {reviews.slice(0, 2).map((review, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{review.name}</span>
                    </div>
                    <p className="text-sm text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Design Variation 2: Modern Bold
  const BoldDesign = () => (
    <>
      <SEO />
      <Header onCTAClick={() => setIsPaymentModalOpen(true)} />
      <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-green-50 overflow-hidden">
        {/* Decorative Islamic Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="text-green-600 fill-current">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M100,20 L100,180 M20,100 L180,100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Arabic Calligraphy Style Pattern */}
        <div className="absolute bottom-20 left-10 text-9xl font-serif text-green-600 opacity-5 transform -rotate-12">بسم</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Images - Sticky on Desktop */}
          <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                93% OFF
              </div>
            </motion.div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-3 transition-transform hover:scale-105 ${
                    selectedImage === idx ? 'border-green-600 ring-2 ring-green-300' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              BESTSELLER 🔥
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Quran Made Simple &<br />Illustrated Bundle
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">5.0</span>
              <span className="text-gray-600">(346 reviews)</span>
            </div>

            {/* Price Box */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-2xl">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-5xl font-bold">₹249</span>
                <span className="text-xl line-through opacity-70">₹3,500</span>
              </div>
              <p className="text-green-100">✨ Limited Time Bundle Offer</p>
            </div>

            {/* What's Included */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-green-600" />
                What You Get
              </h3>
              <div className="space-y-3">
                {[
                  'Version 1: Simplified Quran Guide (30 Juz)',
                  'Version 2: Illustrated Quran Guide (FREE)',
                  'High-quality PDF format',
                  'Lifetime access & updates',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-6 rounded-xl font-bold text-xl hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              BUY IT NOW →
            </button>

            {/* Trust Row */}
            <div className="flex items-center justify-around py-4 border-t-2 border-b-2 border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">30</div>
                <div className="text-xs text-gray-600">Days Guarantee</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <Heart className="w-6 h-6 text-red-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Made with Love</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <Award className="w-6 h-6 text-amber-500 mx-auto mb-1" />
                <div className="text-xs text-gray-600">Top Rated</div>
              </div>
            </div>

            {/* Customer Reviews Section */}
            <div id="testimonials" className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">What Our Readers Say</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">5.0 out of 5</span>
                </div>
              </div>

              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center text-white font-bold text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="font-bold text-gray-900">{review.name}</p>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
                                <CheckCircle className="w-3 h-3" />
                                <span>Verified</span>
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Review Stats */}
              <div className="mt-6 bg-white rounded-xl p-6 shadow-md">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-green-600">346+</p>
                    <p className="text-sm text-gray-600">Happy Readers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-500">5.0</p>
                    <p className="text-sm text-gray-600">Average Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">98%</p>
                    <p className="text-sm text-gray-600">Would Recommend</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose SimpleQuran Section */}
      <div id="benefits" className="relative bg-white py-20 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" className="text-green-600 fill-current">
            <path d="M0,0 Q50,50 0,100 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 transform rotate-180">
          <svg viewBox="0 0 100 100" className="text-amber-600 fill-current">
            <path d="M0,0 Q50,50 0,100 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">SimpleQuran</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand and appreciate the Quran's timeless wisdom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '📖',
                title: 'Easy to Understand',
                desc: 'Clear explanations and simple language make Quranic teachings accessible for all ages and backgrounds.',
              },
              {
                icon: '🎨',
                title: 'Beautifully Illustrated',
                desc: 'Engaging visuals, timelines, and diagrams bring the stories and teachings to life.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Perfect for Families',
                desc: 'Learn together with your children. Suitable for both beginners and those seeking deeper understanding.',
              },
              {
                icon: '⚡',
                title: 'Instant Access',
                desc: 'Download immediately after purchase. Read on any device - phone, tablet, or computer.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Join <span className="font-bold text-green-600">500+ readers</span> who have already transformed their understanding
            </p>
          </div>
        </div>
      </div>

      {/* Version Comparison Section */}
      <VersionComparison />

      {/* eBook Benefits Section */}
      <EBookBenefits />

      {/* What's Included Section */}
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 overflow-hidden">
        {/* Decorative Book Pattern */}
        <div className="absolute top-10 right-10 text-8xl opacity-5">📚</div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-5">📖</div>

        {/* Islamic Star Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 15 L61 38 L85 38 L66 53 L75 76 L50 61 L25 76 L34 53 L15 38 L39 38 Z' fill='%23d97706' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Checklist */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What's <span className="text-green-600">Included</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A comprehensive guide packed with everything you need to deepen your understanding of the Quran
              </p>

              <div className="space-y-4">
                {[
                  'Complete overview of all 114 Surahs with context and background',
                  'Beautiful illustrations and timelines for key events',
                  'Easy-to-understand explanations of complex concepts',
                  'Practical applications for modern daily life',
                  'Stories of the Prophets with engaging narratives',
                  'Key themes and lessons from each Surah',
                  'Historical context and revelation circumstances',
                  'Glossary of important Arabic terms',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Format Details</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Pages:</strong> 250+ beautifully designed pages</li>
                      <li><strong>Format:</strong> PDF (works on all devices)</li>
                      <li><strong>Size:</strong> Optimized for quick download</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">⭐</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Bonus Materials</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✨ Printable reference charts</li>
                      <li>✨ Surah quick-reference guide</li>
                      <li>✨ Daily reflection prompts</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime Access</h3>
                    <p className="text-gray-700">
                      One-time payment for lifetime access. Get all future updates and additions for free.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Stats Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 py-20 overflow-hidden">
        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg viewBox="0 0 1200 300" className="w-full text-white fill-current">
            <path d="M0,300 L0,200 Q150,180 200,150 L200,100 Q200,80 220,80 Q240,80 240,100 L240,150 Q290,180 440,200 L440,300 Z" />
            <path d="M400,300 L400,200 Q550,180 600,150 L600,100 Q600,80 620,80 Q640,80 640,100 L640,150 Q690,180 840,200 L840,300 Z" />
            <path d="M800,300 L800,200 Q950,180 1000,150 L1000,100 Q1000,80 1020,80 Q1040,80 1040,100 L1040,150 Q1090,180 1200,200 L1200,300 Z" />
            <circle cx="220" cy="60" r="15" />
            <circle cx="620" cy="60" r="15" />
            <circle cx="1020" cy="60" r="15" />
          </svg>
        </div>

        {/* Stars Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10">⭐</div>
          <div className="absolute top-20 right-20">✨</div>
          <div className="absolute bottom-20 left-40">⭐</div>
          <div className="absolute top-40 right-60">✨</div>
          <div className="absolute bottom-40 right-20">⭐</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Families <span className="text-amber-300">Worldwide</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Join a growing community of readers who are discovering the beauty of the Quran
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: '500+', label: 'Happy Readers' },
              { number: '4.9★', label: 'Average Rating' },
              { number: '15+', label: 'Cities Reached' },
              { number: '98%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white text-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span>Instant Download</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span>Secure Payment</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-300"></div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6" />
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="relative bg-white py-20 overflow-hidden">
        {/* Islamic Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='1'%3E%3Cpath d='M0 40L40 0 80 40 40 80z M40 40L0 0v80l40-40z M40 40l40-40v80L40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Crescent Moon Decorations */}
        <div className="absolute top-10 right-10 text-6xl opacity-5">🌙</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-5">🌙</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about SimpleQuran</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What format is the e-book available in?',
                a: 'The e-book is available as a high-quality PDF file that works on all devices including phones, tablets, computers, and e-readers.',
              },
              {
                q: 'How do I access the e-book after purchase?',
                a: 'Immediately after payment, you\'ll receive an email with download links for both versions. You can download them right away and keep them forever.',
              },
              {
                q: 'Is this suitable for beginners?',
                a: 'Absolutely! SimpleQuran is designed for everyone - from complete beginners to those seeking deeper understanding. The simplified language and clear explanations make it perfect for all learning stages.',
              },
              {
                q: 'Can I share this with my family?',
                a: 'Yes! Once you purchase, you can share the e-books with your immediate family members. However, please don\'t distribute publicly as it helps us continue creating quality content.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major payment methods including Credit/Debit Cards, UPI, Net Banking, and digital wallets through our secure payment partner Instamojo.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-r from-green-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hardcopy Enquiry Form */}
      <HardcopyEnquiryForm />

      {/* Final CTA Section */}
      <div className="relative bg-gradient-to-br from-amber-50 to-green-50 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 text-6xl">☪️</div>
          <div className="absolute top-40 right-40 text-6xl">⭐</div>
          <div className="absolute bottom-20 left-40 text-6xl">🕌</div>
          <div className="absolute bottom-40 right-20 text-6xl">📿</div>
        </div>

        {/* Radial Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="400" height="400" viewBox="0 0 400 400" className="text-green-600 fill-current">
              <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⏰ Get Both Versions at ₹249 - ABSOLUTELY FREE Version 2!
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Start Your Journey <span className="text-green-600">Today</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of readers who are discovering the beauty and wisdom of the Quran
            </p>

            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-8 border-2 border-green-300">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Hardcopy Price</p>
                  <p className="text-3xl font-bold text-red-600 line-through">₹3,500</p>
                  <p className="text-sm text-red-600">✗</p>
                </div>
                <div className="text-4xl text-gray-400">→</div>
                <div className="text-center">
                  <p className="text-sm text-green-700 font-semibold mb-1">E-book Bundle Price</p>
                  <p className="text-5xl font-bold text-green-600">₹249</p>
                  <p className="text-sm text-green-600 font-semibold">✓</p>
                </div>
              </div>
              <div className="inline-block bg-green-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                SAVE BIG! 💰 Get both versions - A great deal!
              </div>
            </div>

            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-6 rounded-xl font-bold text-2xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 mb-8"
            >
              📦 Get Instant Access Now
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>100% Secure Checkout</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Truck className="w-5 h-5 text-green-600" />
                <span>Instant Download</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Award className="w-5 h-5 text-green-600" />
                <span>30-Day Money Back</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Secure payment powered by Instamojo
            </p>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              🎁 <strong>Special Offer:</strong> Buy Version 1 & Get Version 2 ABSOLUTELY FREE + Lifetime updates!
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );

  // Design Variation 3: Warm & Trustworthy
  const WarmDesign = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Images */}
            <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-square bg-white rounded-2xl overflow-hidden shadow-lg mb-6"
              >
                <img
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden transition-all ${
                      selectedImage === idx
                        ? 'ring-4 ring-orange-400 shadow-lg scale-105'
                        : 'hover:ring-2 ring-orange-200'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Trust Badges Below */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center shadow-md">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <p className="text-sm font-semibold text-gray-900">30-Day</p>
                  <p className="text-xs text-gray-600">Money Back</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-md">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-red-500" />
                  <p className="text-sm font-semibold text-gray-900">Made with</p>
                  <p className="text-xs text-gray-600">Love for Quran</p>
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="p-8 lg:p-12 space-y-6">
              {/* Header */}
              <div>
                <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  ⭐ FIRST TIME IN INDIA
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3 leading-tight">
                  Simple Quran Bundle<br />
                  <span className="text-amber-600">Version 1 & 2 + Bonuses</span>
                </h1>
                <p className="text-gray-600 text-lg">E-Book Bundle (Digital Download)</p>
              </div>

              {/* Reviews */}
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">5.0</span>
                <span className="text-gray-500">(346 happy readers)</span>
              </div>

              {/* Benefits */}
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-amber-600" />
                  Why readers love this:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Instills a love for the Quran',
                    'All the 30 Juz simplified',
                    'Breaks down each Surah and story',
                    'Perfect for all learning stages',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Special Bundle Price</p>
                    <div className="flex items-baseline space-x-3">
                      <span className="text-4xl font-bold text-green-600">₹249</span>
                      <span className="text-xl text-gray-400 line-through">₹3,500</span>
                    </div>
                  </div>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm transform -rotate-12">
                    SAVE 93%
                  </div>
                </div>
                <p className="text-sm text-gray-600">✨ Get both versions for the price of one!</p>
              </div>

              {/* CTA */}
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-5 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Buy It Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-gray-500">
                🔒 Secure checkout • Instant delivery to your email
              </p>

              {/* Social Proof */}
              <div className="pt-6 border-t">
                <p className="text-sm text-gray-600 mb-3">What our readers say:</p>
                <div className="space-y-3">
                  {reviews.slice(0, 2).map((review, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{review.name}</span>
                      </div>
                      <p className="text-sm text-gray-600">"{review.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Design Variation 4: Classic E-commerce
  const ClassicDesign = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          Home / E-Books / <span className="text-gray-900 font-medium">Simple Quran Bundle</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 border border-gray-200">
                <img
                  src={productImages[selectedImage]}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-md overflow-hidden border-2 ${
                      selectedImage === idx ? 'border-blue-600' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="space-y-5">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Simple Quran Bundle - Version 1 & 2 + FREE Bonuses (E-Book Only)
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer">
                    346 ratings
                  </span>
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex items-baseline space-x-3 mb-1">
                  <span className="text-3xl font-bold text-red-600">₹249</span>
                  <span className="text-lg text-gray-500 line-through">₹3,500</span>
                  <span className="text-sm text-red-600 font-semibold">(93% off)</span>
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Product Highlights */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Product Highlights:</h3>
                <ul className="space-y-2">
                  {[
                    'Instills a love for the Quran',
                    'All the 30 Juz simplified',
                    'Breaks down each Surah and story',
                    'Excellent for all learning stages',
                    '67 people are currently looking at this',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to cart / Buy button */}
              <div className="space-y-3">
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="w-full bg-amber-400 text-gray-900 py-3 rounded-lg font-semibold text-lg hover:bg-amber-500 transition-colors"
                >
                  Buy Now
                </button>
                <button className="w-full bg-white border-2 border-gray-300 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Add to Wishlist
                </button>
              </div>

              {/* Delivery & Returns */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <Truck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Instant Delivery</p>
                    <p className="text-sm text-gray-600">Digital download link sent to your email</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">30-Day Money Back Guarantee</p>
                    <p className="text-sm text-gray-600">Not satisfied? Get a full refund</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Made with Love</p>
                    <p className="text-sm text-gray-600">Crafted with care for Quran learners</p>
                  </div>
                </div>
              </div>

              {/* Offers */}
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Available Offers:</h4>
                <ul className="space-y-1 text-sm text-green-800">
                  <li>• Get Version 2 absolutely FREE (worth ₹1,750)</li>
                  <li>• Complete Quran Blueprint E-Book included</li>
                  <li>• Lifetime access to both versions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">"{review.text}"</p>
                  <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-500">Verified Purchase</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Design Variation 5: Contemporary Magazine
  const MagazineDesign = () => (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block border border-gray-300 px-4 py-1 rounded-full text-sm font-medium text-gray-700 mb-4">
            DIGITAL COLLECTION
          </div>
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            The Simple Quran
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautifully crafted bundle of two comprehensive guides designed to deepen your understanding of the Holy Quran
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Images - Magazine Style */}
          <div className="sticky top-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[3/4] bg-gray-100 overflow-hidden"
            >
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Thumbnails - Horizontal */}
            <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-20 h-28 overflow-hidden transition-all ${
                    selectedImage === idx ? 'opacity-100 ring-2 ring-gray-900' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Magazine-style info boxes */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border border-gray-200 p-6 text-center">
                <p className="text-3xl font-serif font-bold text-gray-900 mb-1">346+</p>
                <p className="text-sm text-gray-600">Happy Readers</p>
              </div>
              <div className="border border-gray-200 p-6 text-center">
                <p className="text-3xl font-serif font-bold text-gray-900 mb-1">5.0</p>
                <p className="text-sm text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right: Product Details - Editorial Style */}
          <div className="space-y-8">
            {/* Price & Purchase */}
            <div className="border-t border-b border-gray-300 py-8">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Bundle Price</p>
                  <div className="flex items-baseline space-x-4">
                    <span className="text-5xl font-serif font-bold text-gray-900">₹249</span>
                    <span className="text-2xl text-gray-400 line-through">₹3,500</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-gray-900 text-white px-4 py-2 rounded text-sm font-medium">
                    LIMITED OFFER
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="w-full bg-gray-900 text-white py-4 font-medium text-lg hover:bg-gray-800 transition-colors mb-4"
              >
                Add to Cart — ₹249
              </button>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>30-Day Guarantee</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Truck className="w-4 h-4" />
                  <span>Instant Delivery</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                About This Collection
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Simple Quran Bundle brings together two meticulously crafted guides that make understanding the Holy Quran accessible to everyone, regardless of their current knowledge level.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each page is thoughtfully designed to instill love for the Quran while breaking down complex concepts into simple, digestible explanations. Perfect for personal study or family learning.
              </p>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                What's Included
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Version 1: Simplified Guide',
                    desc: 'All 30 Juz explained with clarity and simplicity',
                  },
                  {
                    title: 'Version 2: Illustrated Guide',
                    desc: 'Beautiful illustrations that bring stories to life',
                  },
                  {
                    title: 'Bonus Materials',
                    desc: 'Complete Quran Blueprint E-Book included',
                  },
                  {
                    title: 'Lifetime Access',
                    desc: 'Download and access forever, no restrictions',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium text-gray-900">{idx + 1}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews - Editorial Style */}
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">
                Reader Testimonials
              </h3>
              <div className="space-y-6">
                {reviews.map((review, idx) => (
                  <div key={idx} className="border-l-2 border-gray-300 pl-6">
                    <p className="text-gray-700 italic mb-3">"{review.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-900">— {review.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-gray-50 p-8 -mx-4">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <Heart className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                  <p className="text-sm font-medium text-gray-900">Made with Love</p>
                </div>
                <div>
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                  <p className="text-sm font-medium text-gray-900">Secure Payment</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                  <p className="text-sm font-medium text-gray-900">Top Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render selected variation
  const renderVariation = () => {
    switch (variant) {
      case 'minimalist':
        return <MinimalistDesign />;
      case 'bold':
        return <BoldDesign />;
      case 'warm':
        return <WarmDesign />;
      case 'classic':
        return <ClassicDesign />;
      case 'magazine':
        return <MagazineDesign />;
      default:
        return <MinimalistDesign />;
    }
  };

  return (
    <>
      {renderVariation()}
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </>
  );
};

export default ProductPage;
