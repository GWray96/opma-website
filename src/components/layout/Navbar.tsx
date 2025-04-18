'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const DrawCircle = () => (
  <svg
    className="absolute w-[calc(100%+2rem)] h-[calc(100%+1.5rem)] pointer-events-none"
    style={{ 
      left: '-1rem',
      top: '-0.75rem'
    }}
    viewBox="0 0 100 60"
  >
    <motion.path
      d="M 20,30 
         C 20,18 28,12 35,10 
         C 42,8 58,8 65,10 
         C 72,12 80,18 80,30 
         C 80,42 72,48 65,50 
         C 58,52 42,52 35,50 
         C 28,48 20,42 20,30 
         M 20,30 
         C 20,28 21,26 22,25"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-600/70"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1]
      }}
      strokeDasharray="4 2"
    />
    <motion.path
      d="M 19,32 
         C 19,35 22,38 24,40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className="text-blue-600/70"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.8,
        ease: "easeOut"
      }}
    />
  </svg>
);

export const Navbar = () => {
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ];

  const insightsItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Resources', href: '/resources' },
    { label: 'FAQs', href: '/faq' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center space-x-2 group relative ${isActive('/') ? 'text-blue-600' : ''}`}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300 relative px-4 py-2">
              OPMA
              {isActive('/') && <DrawCircle />}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium relative ${
                  isActive(item.href) ? 'text-blue-600' : ''
                }`}
              >
                <span className="relative px-4 py-2 block">
                  {item.label}
                  {isActive(item.href) && <DrawCircle />}
                </span>
              </Link>
            ))}
            
            {/* Insights Dropdown */}
            <div className="relative">
              <button
                className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium group relative ${
                  insightsItems.some(item => isActive(item.href)) ? 'text-blue-600' : ''
                }`}
                onMouseEnter={() => setIsInsightsOpen(true)}
                onMouseLeave={() => setIsInsightsOpen(false)}
              >
                <span className="relative px-4 py-2 block">
                  Insights
                  <FiChevronDown className={`ml-1 inline-block transition-transform duration-200 ${isInsightsOpen ? 'rotate-180' : ''}`} />
                  {insightsItems.some(item => isActive(item.href)) && <DrawCircle />}
                </span>
              </button>
              
              <AnimatePresence>
                {isInsightsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                    onMouseEnter={() => setIsInsightsOpen(true)}
                    onMouseLeave={() => setIsInsightsOpen(false)}
                  >
                    {insightsItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors relative ${
                          isActive(item.href) ? 'text-blue-600 bg-blue-50' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className={`block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 relative ${
                    isActive(item.href) ? 'text-blue-600' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {isActive(item.href) && <DrawCircle />}
                </Link>
              ))}
              
              {/* Mobile Insights Dropdown */}
              <div className="py-2">
                <button
                  className={`flex items-center text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 relative ${
                    insightsItems.some(item => isActive(item.href)) ? 'text-blue-600' : ''
                  }`}
                  onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                >
                  Insights
                  <FiChevronDown className={`ml-1 transition-transform duration-200 ${isInsightsOpen ? 'rotate-180' : ''}`} />
                  {insightsItems.some(item => isActive(item.href)) && <DrawCircle />}
                </button>
                
                <AnimatePresence>
                  {isInsightsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 mt-2 space-y-2"
                    >
                      {insightsItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 relative ${
                            isActive(item.href) ? 'text-blue-600' : ''
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                          {isActive(item.href) && <DrawCircle />}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link
                href="/contact"
                className="block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}; 