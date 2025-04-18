'use client'

import React from 'react';
import { motion } from 'framer-motion';

export const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          
          <div className="grid gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
            >
              <p className="text-xl md:text-2xl italic text-blue-50 mb-6">
                "Outstanding service from Gareth! He took care of everything, from setting up automations to creating lead magnets. Excited for what we can achieve together 👍 Highly recommend!"
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl">
                  👤
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Mazin Alneami</p>
                  <p className="text-sm text-blue-300">The Lead Hive</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 