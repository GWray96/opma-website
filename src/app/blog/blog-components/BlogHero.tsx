'use client'

import React from 'react';

export const BlogHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6 sm:text-5xl">
            Blog & Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in operational excellence and business transformation.
          </p>
        </div>
      </div>
    </section>
  );
}; 