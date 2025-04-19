'use client';

import React from 'react';

const HomePainPoints = () => {
  const painPoints = [
    {
      title: "Time-Consuming Marketing Tasks",
      description: "Spending hours on campaigns instead of focusing on core business activities.",
      icon: "⏰"
    },
    {
      title: "Lack of Expertise in AI and Automation",
      description: "Uncertainty about how to implement AI tools to streamline operations.",
      icon: "🤖"
    },
    {
      title: "Inconsistent Online Presence",
      description: "Difficulty maintaining a cohesive brand across multiple digital platforms.",
      icon: "🎯"
    },
    {
      title: "Overwhelming Number of Tools and Platforms",
      description: "Juggling various software without a unified strategy.",
      icon: "🔄"
    },
    {
      title: "Limited Budget for Marketing Initiatives",
      description: "Struggling to achieve results without overspending.",
      icon: "💰"
    },
    {
      title: "Difficulty Measuring ROI",
      description: "Challenges in tracking the effectiveness of marketing efforts.",
      icon: "📊"
    }
  ];

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600">
            Sound Familiar?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            These are the real challenges business owners face every day. You're not alone.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 hover:scale-105"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-200/50 to-teal-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{point.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-6">
            Ready to transform these challenges into opportunities?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-purple-200/50">
            Let's Talk Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePainPoints; 