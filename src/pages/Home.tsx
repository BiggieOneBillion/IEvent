import { useState } from "react";
import Navigation from "../components/homepage/Navigation";
import BrandSection from "../components/homepage/BrandSection";
import HeroSection from "../components/homepage/HeroSection";
import Features from "../components/homepage/Features";
import Testimonial from "../components/homepage/Testimonial";
import HowItWorks from "../components/homepage/HowItWorks";
import CTASection from "../components/homepage/CTASection";
import Footer from "../components/homepage/Footer";
import RegisterModal from "../components/auth/RegisterModal";
import SignInModal from "../components/auth/SignInModal";


export default function HomePage() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        setShowRegisterModal={setShowRegisterModal}
        setShowSignInModal={setShowSignInModal}
      />
      {/* Main Section */}
      <main>
        {/* Hero Section */}
        <HeroSection setShowRegisterModal={setShowRegisterModal} />

        {/* Brands Section */}
        <BrandSection />

        {/* Features Section */}
        <Features />

        {/* Redesigned How It Works Section */}
        <HowItWorks setShowRegisterModal={setShowRegisterModal} />

        {/* Testimonials Section */}
        <Testimonial />

        {/* CTA Section */}
        <CTASection setShowRegisterModal={setShowRegisterModal} />

        {/* Contact Us */}
        {/* <ContactSection /> */}

        {/* Frequency Asked Question */}
        {/* <FAQSection /> */}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sign In Modal */}
      {showSignInModal && (
        <SignInModal
          onClose={() => setShowSignInModal(false)}
          onRegister={() => {
            setShowSignInModal(false);
            setShowRegisterModal(true);
          }}
        />
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <RegisterModal
          onClose={() => setShowRegisterModal(false)}
          onSignIn={() => {
            setShowRegisterModal(false);
            setShowSignInModal(true);
          }}
        />
      )}
    </div>
  );
}
