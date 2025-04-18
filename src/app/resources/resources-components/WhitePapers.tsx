'use client'

import React from 'react';
import { FiDownload } from 'react-icons/fi';

interface WhitePaper {
  title: string;
  description: string;
  downloadUrl: string;
  imageUrl: string;
}

const whitePapers: WhitePaper[] = [
  {
    title: "Operational Excellence Guide",
    description: "Learn how to achieve operational excellence through proven methodologies and best practices.",
    downloadUrl: "#",
    imageUrl: "/images/whitepaper-1.jpg"
  },
  {
    title: "Digital Transformation Strategy",
    description: "A comprehensive guide to transforming your business operations for the digital age.",
    downloadUrl: "#",
    imageUrl: "/images/whitepaper-2.jpg"
  },
  {
    title: "Process Optimization Framework",
    description: "Discover effective strategies for optimizing your business processes and workflows.",
    downloadUrl: "#",
    imageUrl: "/images/whitepaper-3.jpg"
  }
];

export const WhitePapers = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">White Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitePapers.map((paper, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Add actual images later */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <a
                  href={paper.downloadUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <FiDownload className="mr-2" />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 