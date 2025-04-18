import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Optimize Your Operations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We help businesses streamline processes, reduce costs, and improve efficiency through data-driven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}; 