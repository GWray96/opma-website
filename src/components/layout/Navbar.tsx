'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive, onClick = () => {} }) => (
  <Link
    href={href}
    className={`relative group ${isActive ? 'text-blue-600' : 'text-gray-700'}`}
    onClick={onClick}
  >
    <span className="relative px-3 py-2 block transition-colors duration-300 rounded-md group-hover:text-blue-600">
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-blue-50 rounded-md -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </span>
  </Link>
);

export const Navbar = () => {
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsInsightsOpen(false);
  }, [pathname]);

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
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-white/80 backdrop-blur-sm py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative px-3 py-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              OPMA
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href}
                isActive={isActive(item.href)}
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Insights Dropdown */}
            <div className="relative">
              <motion.button
                className={`flex items-center font-medium group relative px-3 py-2 ${
                  insightsItems.some(item => isActive(item.href)) ? 'text-blue-600' : 'text-gray-700'
                }`}
                onMouseEnter={() => setIsInsightsOpen(true)}
                onMouseLeave={() => setIsInsightsOpen(false)}
                whileHover={{ color: '#2563eb' }}
              >
                <span className="flex items-center">
                  Insights
                  <motion.div
                    animate={{ rotate: isInsightsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="ml-1" />
                  </motion.div>
                </span>
              </motion.button>
              
              <AnimatePresence>
                {isInsightsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                    onMouseEnter={() => setIsInsightsOpen(true)}
                    onMouseLeave={() => setIsInsightsOpen(false)}
                  >
                    {insightsItems.map((item) => (
                      <NavLink
                        key={item.href}
                        href={item.href}
                        isActive={isActive(item.href)}
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                Get Started
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <motion.div 
              className="max-w-7xl mx-auto px-4 py-4 space-y-2"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.07,
                    delayChildren: 0.2
                  }
                }
              }}
              initial="closed"
              animate="open"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    closed: { x: -20, opacity: 0 },
                    open: { x: 0, opacity: 1 }
                  }}
                >
                  <NavLink 
                    href={item.href}
                    isActive={isActive(item.href)}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Mobile Insights Dropdown */}
              <motion.div 
                className="py-2"
                variants={{
                  closed: { x: -20, opacity: 0 },
                  open: { x: 0, opacity: 1 }
                }}
              >
                <button
                  className={`flex items-center font-medium w-full px-3 py-2 ${
                    insightsItems.some(item => isActive(item.href)) ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsInsightsOpen(!isInsightsOpen)}
                >
                  <span className="flex items-center">
                    Insights
                    <motion.div
                      animate={{ rotate: isInsightsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown className="ml-1" />
                    </motion.div>
                  </span>
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
                        <motion.div
                          key={item.href}
                          variants={{
                            closed: { x: -20, opacity: 0 },
                            open: { x: 0, opacity: 1 }
                          }}
                        >
                          <NavLink
                            href={item.href}
                            isActive={isActive(item.href)}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <motion.div
                className="pt-2"
                variants={{
                  closed: { x: -20, opacity: 0 },
                  open: { x: 0, opacity: 1 }
                }}
              >
                <Link
                  href="/contact"
                  className="block bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}; 