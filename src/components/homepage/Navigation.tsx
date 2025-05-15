import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>
};

const Navigation = ({ setShowRegisterModal, setShowSignInModal }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                eventify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              How It Works
            </Link>
            <Link
              to="#testimonials"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Testimonials
            </Link>
            <button
              onClick={() => setShowSignInModal(true)}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowRegisterModal(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#features"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="#testimonials"
              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowSignInModal(true);
              }}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowRegisterModal(true);
              }}
              className="block w-full text-left px-3 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md hover:from-violet-700 hover:to-indigo-700"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
