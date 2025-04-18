'use client'

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface CaseStudy {
  title: string;
  description: string;
  industry: string;
  imageUrl: string;
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Manufacturing Efficiency Transformation",
    description: "How a leading manufacturer achieved 30% efficiency improvement through process optimization.",
    industry: "Manufacturing",
    imageUrl: "/images/case-study-1.jpg",
    link: "#"
  },
  {
    title: "Healthcare Operations Excellence",
    description: "A healthcare provider's journey to operational excellence and improved patient care.",
    industry: "Healthcare",
    imageUrl: "/images/case-study-2.jpg",
    link: "#"
  },
  {
    title: "Retail Supply Chain Optimization",
    description: "Transforming supply chain operations for a major retail chain.",
    industry: "Retail",
    imageUrl: "/images/case-study-3.jpg",
    link: "#"
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Add actual images later */}
                <div className="w-full h-full bg-gradient-to-br from-green-500 to-teal-600" />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-green-600">{study.industry}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <a
                  href={study.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read Case Study
                  <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 