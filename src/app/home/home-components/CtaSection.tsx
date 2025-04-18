import React from 'react';
import { motion } from 'framer-motion';

export const CtaSection = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8">
              Join hundreds of businesses that have already optimized their processes and improved their bottom line with our services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors"
              >
                Get a Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our Case Studies
              </motion.button>
            </div>
            
            <p className="mt-6 text-sm text-blue-100">
              No commitment required. Our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 