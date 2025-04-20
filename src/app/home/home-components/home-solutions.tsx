'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const solutions = [
  {
    title: 'Time Liberation System',
    description: 'Free up your time by outsourcing all marketing tasks to me, letting you focus on what you do best.',
    icon: '🌟',
    benefits: [
      '80% reduction in marketing tasks',
      'Personalized attention',
      'Regular progress updates',
      'More time for core business'
    ]
  },
  {
    title: 'Expert Marketing Guidance',
    description: 'Access professional marketing expertise without the cost of a full-time marketing department.',
    icon: '💡',
    benefits: [
      'Strategic marketing planning',
      'Industry best practices',
      'Data-driven decisions',
      'Continuous optimization'
    ]
  },
  {
    title: 'Custom Marketing Strategy',
    description: 'Get a tailored marketing plan that aligns with your business goals and target audience.',
    icon: '🎯',
    benefits: [
      'Clear marketing roadmap',
      'Defined success metrics',
      'Focused marketing efforts',
      'Measurable results'
    ]
  },
  {
    title: 'Done-For-You Marketing',
    description: 'Stop trying to do everything yourself. Let me handle your marketing while you run your business.',
    icon: '✨',
    benefits: [
      'Professional content creation',
      'Managed advertising campaigns',
      'Social media management',
      'Email marketing automation'
    ]
  },
  {
    title: 'Trend Analysis & Adaptation',
    description: 'Stay ahead of the competition with my market research and trend analysis services.',
    icon: '🚀',
    benefits: [
      'Market opportunity identification',
      'Competitor analysis',
      'Trend forecasting',
      'Strategic adaptation'
    ]
  },
  {
    title: 'Simplified Marketing Approach',
    description: 'Cut through the noise with my streamlined, focused marketing strategy that delivers results.',
    icon: '🌈',
    benefits: [
      'Channel prioritization',
      'Focused marketing efforts',
      'Clear action steps',
      'Reduced decision fatigue'
    ]
  }
];

export default function HomeSolutions() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        {/* Animated Circles - Large Screens */}
        <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 md:w-96 md:h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Additional Floating Circles - Responsive Sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-indigo-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-52 h-52 md:w-72 md:h-72 bg-cyan-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
        
        {/* Small Screen Additional Circles */}
        <div className="md:hidden absolute top-1/2 left-1/2 w-32 h-32 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="md:hidden absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-1000"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-100/50 to-indigo-100/50"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Solutions That Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            I transform your marketing challenges into opportunities for growth and success.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-200/50 to-teal-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      {solution.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <span className="text-purple-500">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Ready to transform your marketing challenges into opportunities?
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-200/50"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 