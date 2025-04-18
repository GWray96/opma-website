'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServicePhone } from './ServicePhone';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface-light text-neutral overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-light/50 to-surface-light"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-8"
            >
              <div className="space-y-6">
                <h1 className="font-jakarta font-bold text-4xl md:text-6xl leading-tight">
                  Marketing. Automation. AI.
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    On Demand.
                  </span>
                </h1>
                <p className="font-jakarta text-xl md:text-2xl text-neutral/80">
                  Like Spotify — but for growing your business.
                </p>
                <p className="text-lg md:text-xl text-neutral/70">
                  A done-for-you subscription that gives you instant access to digital marketing, 
                  AI tools, and automation systems.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-jakarta font-semibold bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl shadow-soft hover:shadow-hover transition-all"
                >
                  Start Your Subscription
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="font-jakarta font-semibold border-2 border-primary text-primary bg-white/50 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-colors"
                >
                  Book Your Free Strategy Call
                </motion.button>
              </div>

              {/* Risk Reversal */}
              <p className="text-neutral/60 font-medium">
                No contracts. Cancel anytime. Full flexibility.
              </p>

              {/* Simplified Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-neutral/5 shadow-soft w-fit"
              >
                <div className="relative w-[120px] h-[60px] flex-shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/Rich and Niche Logo.png"
                    alt="Rich + Niche Academy"
                    width={120}
                    height={60}
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-sm text-neutral/70">
                  Trained at <span className="font-semibold text-neutral">Rich + Niche Academy</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Service UI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-end items-center w-full h-full"
            >
              <div className="w-full">
                <ServicePhone />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}; 