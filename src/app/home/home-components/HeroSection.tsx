'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ServicePhone } from './ServicePhone';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface-50 overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-50/50 to-surface-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-8"
          >
            <div className="space-y-6">
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight text-surface-900">
                Marketing. Automation. AI.
                <br />
                <span className="bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
                  On Demand.
                </span>
              </h1>
              <p className="font-display text-xl md:text-2xl text-surface-900/80">
                Like Spotify — but for growing your business.
              </p>
              <p className="text-lg md:text-xl text-surface-900/70">
                A done-for-you subscription that gives you instant access to digital marketing, 
                AI tools, and automation systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-display font-semibold bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 rounded-xl shadow-soft hover:shadow-medium transition-all"
              >
                Start Your Subscription
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-display font-semibold border-2 border-brand-primary text-brand-primary bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-brand-primary hover:text-white transition-colors"
              >
                Book Your Free Strategy Call
              </motion.button>
            </div>

            {/* Risk Reversal */}
            <p className="text-surface-900/60 font-medium">
              No contracts. Cancel anytime. Full flexibility.
            </p>

            {/* Simplified Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-4 p-4 rounded-xl w-fit"
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
              <p className="text-sm text-surface-900/70">
                Trained at <span className="font-display font-semibold text-surface-900">Rich + Niche Academy</span>
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
    </section>
  );
}; 