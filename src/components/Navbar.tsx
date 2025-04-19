'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const insightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (insightsRef.current && !insightsRef.current.contains(event.target as Node)) {
        setIsInsightsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Subscription', href: '/subscription' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  const insightsItems = [
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center group"
          >
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            } group-hover:text-teal-500`}>
              OPMA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled 
                    ? 'text-gray-500 hover:text-gray-700' 
                    : 'text-white/80 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
            
            {/* Insights Dropdown */}
            <div className="relative" ref={insightsRef}>
              <button
                onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                className={`${
                  isScrolled 
                    ? 'text-gray-500 hover:text-gray-700' 
                    : 'text-white/80 hover:text-white'
                } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group flex items-center`}
              >
                Insights
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isInsightsOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute right-0 mt-1 w-48 rounded-lg shadow-lg bg-white/90 backdrop-blur-lg ring-1 ring-black/5 transition-all duration-300 transform ${
                  isInsightsOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                }`}
              >
                {/* Speech Bubble Pointer */}
                <div className="absolute -top-2 right-4 w-4 h-4 bg-white/90 transform rotate-45 border-t border-l border-black/5"></div>
                
                <div className="p-1.5 relative">
                  {insightsItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-teal-50 to-purple-50 rounded-md transition-all duration-200 relative overflow-hidden"
                      style={{
                        transitionDelay: `${index * 50}ms`,
                        transform: isInsightsOpen ? 'translateX(0)' : 'translateX(-10px)',
                        opacity: isInsightsOpen ? 1 : 0
                      }}
                      onClick={() => setIsInsightsOpen(false)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-1/2 bg-gradient-to-b from-teal-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={`${
                isScrolled 
                  ? 'text-gray-500 hover:text-gray-700' 
                  : 'text-white/80 hover:text-white'
              } px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 relative group`}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <button
              className={`group relative ${
                isScrolled 
                  ? 'bg-rose-300 text-slate-900 hover:bg-rose-400' 
                  : 'bg-rose-300 text-slate-900 hover:bg-rose-400'
              } px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-rose-300/25 backdrop-blur-sm`}
            >
              <span>Secure Your Seat</span>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 text-gray-800 text-xs py-1 px-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Limited Spots Available
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isScrolled 
                  ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              } inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200`}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md rounded-b-lg shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Insights Dropdown */}
          <div className="px-3 py-2">
            <button
              onClick={() => setIsInsightsOpen(!isInsightsOpen)}
              className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-gray-900 group"
            >
              <span className="flex items-center">
                <span>Insights</span>
                <span className="ml-2 px-2 py-0.5 text-xs bg-gradient-to-r from-teal-100 to-purple-100 text-teal-700 rounded-full">New</span>
              </span>
              <svg 
                className={`h-4 w-4 transition-transform duration-200 ${isInsightsOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
              isInsightsOpen ? 'max-h-96' : 'max-h-0'
            }`}>
              {insightsItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block pl-4 pr-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r from-teal-50 to-purple-50 transition-all duration-200"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: isInsightsOpen ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: isInsightsOpen ? 1 : 0
                  }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsInsightsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Mobile CTA Button */}
          <button
            className="w-full mt-2 bg-rose-300 text-slate-900 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:bg-rose-400 hover:shadow-rose-300/25"
          >
            <span>Secure Your Seat</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 