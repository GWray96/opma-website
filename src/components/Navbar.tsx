'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  
  // Check if we're on the calculator page
  const isCalculatorPage = pathname === '/calculator';

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
      isScrolled || isMobileMenuOpen || isCalculatorPage
        ? isCalculatorPage 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-white/80 backdrop-blur-md shadow-md'
        : 'bg-transparent md:bg-transparent'
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
            <Link href="/about" className={`${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              About
            </Link>
            <Link href="/menu" className={`${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              Menu
            </Link>
            <Link href="/subscription" className={`${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              Subscription
            </Link>
            
            {/* Insights Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('insights')}
                className={`${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors flex items-center`}
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

            <Link href="/contact" className={`${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons - Right aligned */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Calculator CTA Button */}
            <Link href="/calculator" className="relative group">
              <button className={`${isCalculatorPage 
                ? 'bg-purple-600 border-2 border-purple-600 text-white hover:bg-purple-700' 
                : 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50'} 
                font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-purple-200/50`}>
                Calculate Savings
              </button>
              {/* Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-purple-600 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
                See how much time you can save
                {/* Tooltip arrow */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-purple-600"></div>
              </div>
            </Link>
            
            {/* Original CTA Button */}
            <div className="relative group">
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
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}
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
            <Link href="/about" className={`block ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              About
            </Link>
            <Link href="/menu" className={`block ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              Menu
            </Link>
            <Link href="/subscription" className={`block ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              Subscription
            </Link>
            <Link href="/contact" className={`block ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}>
              Contact
            </Link>
            
            {/* Mobile Insights Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('insights-mobile')}
                className={`flex items-center ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}
              >
                Insights
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'insights-mobile' && (
                <div className="pl-4 mt-2 space-y-2">
                  {insightsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block ${isCalculatorPage ? 'text-gray-800' : 'text-gray-800'} hover:text-purple-600 transition-colors`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3">
              <Link href="/calculator" className="block">
                <button className={`w-full ${isCalculatorPage 
                  ? 'bg-purple-600 border-2 border-purple-600 text-white hover:bg-purple-700' 
                  : 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50'} 
                  font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-purple-200/50`}>
                  Calculate Savings
                </button>
              </Link>
              <button className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-200/50">
                Claim Your Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 