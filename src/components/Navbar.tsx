'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const insightsItems = [
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              OPMA
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/about" className="text-gray-800 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/menu" className="text-gray-800 hover:text-purple-600 transition-colors">
              Menu
            </Link>
            <Link href="/subscription" className="text-gray-800 hover:text-purple-600 transition-colors">
              Subscription
            </Link>
            
            {/* Insights Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('insights')}
                className="text-gray-800 hover:text-purple-600 transition-colors flex items-center"
              >
                Insights
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'insights' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {/* Speech bubble pointer */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-4 h-4 bg-white border border-gray-100 transform rotate-45"></div>
                  </div>
                  {insightsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-800 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button - Right aligned */}
          <div className="hidden md:block relative group">
            <button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-200/50">
              Claim Your Seat
            </button>
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
              Limited Seats Available
              {/* Tooltip arrow */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-purple-600"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 hover:text-purple-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-4">
            <Link href="/about" className="block text-gray-800 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/menu" className="block text-gray-800 hover:text-purple-600 transition-colors">
              Menu
            </Link>
            <Link href="/subscription" className="block text-gray-800 hover:text-purple-600 transition-colors">
              Subscription
            </Link>
            
            {/* Mobile Insights Dropdown */}
            <div ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('mobile-insights')}
                className="w-full text-left text-gray-800 hover:text-purple-600 transition-colors flex items-center justify-between"
              >
                Insights
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-insights' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-insights' && (
                <div className="pl-4 mt-2 space-y-2">
                  {insightsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-800 hover:text-purple-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="block text-gray-800 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <div className="relative">
              <button className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-200/50">
                Claim Your Seat
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
                Limited Seats Available
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-purple-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 