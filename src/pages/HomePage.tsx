import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BundleOffer from '../components/BundleOffer';
import Benefits from '../components/Benefits';
import WhatsIncluded from '../components/WhatsIncluded';
import Testimonials from '../components/Testimonials';
import VideoTestimonials from '../components/VideoTestimonials';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';
import TrustBadges from '../components/TrustBadges';
import UrgencyTimer from '../components/UrgencyTimer';
import SEO from '../components/SEO';

function HomePage() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      {/* SEO Component */}
      <SEO />

      {/* Main Landing Page */}
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header onCTAClick={handleCTAClick} />

        {/* Hero Section */}
        <Hero onCTAClick={handleCTAClick} />

        {/* Trust Badges */}
        <TrustBadges />

        {/* Bundle Offer Section */}
        <BundleOffer onCTAClick={handleCTAClick} />

        {/* Benefits Section */}
        <Benefits />

        {/* What's Included Section */}
        <WhatsIncluded />

        {/* Social Proof Section */}
        <SocialProof />

        {/* Video Testimonials Section */}
        <VideoTestimonials />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Urgency Timer */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <UrgencyTimer />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA onCTAClick={handleCTAClick} />

        {/* Footer */}
        <Footer />

        {/* Payment Modal */}
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
        />
      </div>
    </>
  );
}

export default HomePage;
