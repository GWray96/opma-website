'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { SolutionCheck } from './ui/solution-check';

const solutions = [
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand awareness through strategic social media campaigns.',
    benefits: [
      'Increased brand visibility',
      'Better audience engagement',
      'Higher conversion rates',
      'Improved customer loyalty'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Create valuable content that attracts and retains your target audience.',
    benefits: [
      'Enhanced brand authority',
      'Better search rankings',
      'Increased organic traffic',
      'Higher quality leads'
    ]
  },
  {
    title: 'Email Marketing',
    description: 'Build lasting relationships with your customers through personalized email campaigns.',
    benefits: [
      'Direct customer communication',
      'Higher ROI',
      'Improved customer retention',
      'Better conversion rates'
    ]
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive organic traffic to your website.',
    benefits: [
      'Better search visibility',
      'Increased organic traffic',
      'Lower acquisition costs',
      'Long-term sustainability'
    ]
  }
];

export default function HomeSolutions() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Digital Marketing Solutions That Drive Results
          </h2>
          <p className="text-xl text-gray-600">
            Transform your online presence with our comprehensive digital marketing services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-3">
                    <SolutionCheck className="w-6 h-6 text-indigo-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
} 