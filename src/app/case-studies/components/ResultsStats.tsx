'use client'

import React from 'react';
import { motion } from 'framer-motion'

const stats = [
  {
    title: 'Client Satisfaction',
    value: '98%',
    description: 'Average client satisfaction rating'
  },
  {
    title: 'Project Success',
    value: '95%',
    description: 'Projects completed on time and within budget'
  },
  {
    title: 'Cost Reduction',
    value: '40%',
    description: 'Average cost savings for clients'
  },
  {
    title: 'Efficiency Gain',
    value: '60%',
    description: 'Average improvement in operational efficiency'
  }
]

export default function ResultsStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. Here are some key statistics that demonstrate our commitment to delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.title}
              </h4>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 