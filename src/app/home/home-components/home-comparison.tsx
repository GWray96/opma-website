'use client';

import React from 'react';
import { CheckIcon } from './ui/check-icon';
import { CrossIcon } from './ui/cross-icon';
import { SolutionCheck } from './ui/solution-check';

const HomeComparison = () => {
  const comparisonPoints = [
    {
      feature: "Unlimited Requests & Revisions",
      traditional: false,
      freelancer: false,
      solution: true,
      description: "Submit as many requests as you need"
    },
    {
      feature: "No Long-Term Contracts",
      traditional: false,
      freelancer: true,
      solution: true,
      description: "Freedom to pause or cancel anytime"
    },
    {
      feature: "Fixed Monthly Price",
      traditional: false,
      freelancer: false,
      solution: true,
      description: "Predictable pricing, no surprises"
    },
    {
      feature: "Dedicated Support",
      traditional: false,
      freelancer: true,
      solution: true,
      description: "Direct access to your marketing expert"
    },
    {
      feature: "AI-Powered Efficiency",
      traditional: false,
      freelancer: false,
      solution: true,
      description: "Advanced tools for better results"
    },
    {
      feature: "Quick Implementation",
      traditional: false,
      freelancer: true,
      solution: true,
      description: "Focus on execution, not just strategy"
    },
    {
      feature: "Consistent Availability",
      traditional: false,
      freelancer: false,
      solution: true,
      description: "No gaps in service delivery"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 -left-4 w-64 h-64 md:w-96 md:h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 md:w-96 md:h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 md:w-96 md:h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-100/50 to-purple-100/50"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Compare Your Options
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See how our service stands out from traditional alternatives
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-2xl shadow-indigo-200/20 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 via-white to-gray-50">
            <div className="font-semibold text-gray-800 text-lg">Feature</div>
            <div className="text-center">
              <div className="font-semibold text-red-500 text-lg">Traditional Agency</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-amber-500 text-lg">Freelancer</div>
            </div>
            <div className="text-center relative">
              <div className="absolute -inset-3 bg-indigo-500/5 rounded-xl -z-10"></div>
              <div className="font-semibold text-indigo-600 text-lg">Our Solution</div>
              <div className="absolute -right-6 -top-6">
                <div className="bg-indigo-500 text-white text-sm px-3 py-1 rounded-full shadow-lg transform -rotate-12">
                  Recommended
                </div>
              </div>
            </div>
          </div>
          
          {/* Table Body */}
          <div className="divide-y divide-gray-50">
            {comparisonPoints.map((point, index) => (
              <div key={index} 
                className="grid grid-cols-4 gap-4 p-8 items-center hover:bg-gradient-to-r hover:from-white hover:via-indigo-50/30 hover:to-white transition-all duration-300">
                <div>
                  <div className="font-medium text-gray-800 text-lg">{point.feature}</div>
                  <div className="text-sm text-gray-500 mt-2">{point.description}</div>
                </div>
                <div className="flex justify-center">{point.traditional ? <CheckIcon /> : <CrossIcon />}</div>
                <div className="flex justify-center">{point.freelancer ? <CheckIcon /> : <CrossIcon />}</div>
                <div className="flex justify-center">{point.solution ? <SolutionCheck /> : <CrossIcon />}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-gray-700 text-lg mb-6">
            Ready to experience the difference?
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-xl transition duration-300 shadow-lg hover:shadow-indigo-200/50 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeComparison; 