'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from './components/CaseStudyCard';

interface CaseStudy {
  id: string | number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Digital Transformation Success',
    client: 'TechCorp Solutions',
    industry: 'Technology',
    challenge: 'TechCorp needed to modernize their business operations and improve efficiency.',
    solution: 'Implemented a comprehensive digital transformation strategy including cloud migration and process automation.',
    results: [
      'Increased operational efficiency by 45%',
      'Reduced operational costs by 30%',
      'Improved customer satisfaction scores by 25%'
    ],
    imageUrl: '/images/case-studies/techcorp.jpg'
  },
  {
    id: 2,
    title: 'Supply Chain Optimization',
    client: 'Global Logistics Ltd',
    industry: 'Logistics',
    challenge: 'Inefficient supply chain processes leading to delays and increased costs.',
    solution: 'Developed and implemented an integrated supply chain management system.',
    results: [
      'Reduced delivery times by 40%',
      'Decreased inventory costs by 25%',
      'Improved supplier relationships'
    ],
    imageUrl: '/images/case-studies/logistics.jpg'
  },
  {
    id: 3,
    title: 'Customer Experience Enhancement',
    client: 'Retail Innovations',
    industry: 'Retail',
    challenge: 'Poor customer experience and low engagement rates.',
    solution: 'Launched a comprehensive customer experience improvement program.',
    results: [
      'Increased customer retention by 35%',
      'Improved NPS score by 20 points',
      'Enhanced customer engagement metrics'
    ],
    imageUrl: '/images/case-studies/retail.jpg'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Success Stories
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CaseStudyCard caseStudy={study} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Write Your Success Story?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let's discuss how we can help transform your business operations.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 