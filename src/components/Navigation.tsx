'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/" className="flex items-center group">
    <Image
      src="/IMG_5573.png"
      alt="Mac Lio Logo"
      width={200}
      height={200}
      className="h-20 w-auto invert opacity-20 transition-opacity duration-300 group-hover:opacity-100"
    />
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/menu" 
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            >
              Service
            </Link>
            <Link 
              href="/about" 
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
            <a 
              href="tel:+49151233666" 
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
            >
              Call Center
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            href="/menu"
            className="block px-3 py-2 text-base uppercase tracking-wider"
          >
            Service
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 text-base uppercase tracking-wider"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base uppercase tracking-wider"
          >
            Contact
          </Link>
          <a
            href="tel:+49151233666"
            className="block px-3 py-2 text-base uppercase tracking-wider"
          >
            Call Center
          </a>
        </div>
      </div>
    </nav>
  );
}