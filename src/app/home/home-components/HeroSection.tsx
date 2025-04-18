'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  icon: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
  >
    <div className="flex items-center space-x-3">
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{title}</span>
    </div>
  </motion.div>
);

const services = [
  { title: "Build Me a Funnel", icon: "🎯" },
  { title: "Create Content for My Brand", icon: "✍️" },
  { title: "Automate My Lead Follow-up", icon: "🔁" },
  { title: "Set Up My AI Chatbot", icon: "🤖" }
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center filter blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Marketing. Automation. AI.<br />
              <span className="text-3xl md:text-5xl text-blue-300">On Demand.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-200">
              Like Spotify — but for growing your business.
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              A done-for-you subscription that gives you instant access to digital marketing, 
              AI tools, and automation systems — so you can reclaim your time and scale stress-free.
            </p>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  icon={service.icon}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-600 transition-colors"
              >
                Start Your Subscription
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white bg-transparent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Book Your Free Strategy Call
              </motion.button>
            </div>

            {/* Risk Reversal */}
            <p className="text-blue-200 mb-8">
              No contracts. Cancel anytime. Full flexibility.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20 flex-shrink-0">
                  <Image
                    src="/images/rich-niche-logo.png"
                    alt="Rich + Niche Academy"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm md:text-base text-blue-100">
                    Trained by the <span className="font-semibold text-white">Rich + Niche Academy</span> in cutting-edge Digital Marketing, 
                    AI, and Automation systems. Backed by 10+ years of hands-on experience.
                  </p>
                </div>
              </motion.div>

              {/* Mini Testimonial */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10"
              >
                <p className="italic text-lg mb-2 text-blue-50">
                  "Wrayvolution gave me back 10+ hours a week. I now focus on vision, not busywork."
                </p>
                <p className="text-blue-300 font-medium">— Recruitment Agency Owner</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-blue-200">Explore Services</span>
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