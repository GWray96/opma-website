'use client';

import React from 'react';

const HomeSolutions = () => {
  const solutions = [
    {
      title: "Flexibility",
      description: "Our service adapts to your business needs, allowing you to scale up or down as your requirements change.",
      icon: "🔄",
      benefits: ["Adapt to changing business needs", "Customize service to your workflow", "Scale resources as needed"]
    },
    {
      title: "No Contracts",
      description: "Start using our services immediately without being locked into long-term commitments.",
      icon: "📝",
      benefits: ["No long-term obligations", "Start and stop on your terms", "Transparent pricing model"]
    },
    {
      title: "Pause or Cancel Anytime",
      description: "You have complete control over your subscription with the freedom to pause or cancel at any time.",
      icon: "⏸️",
      benefits: ["Full control over your subscription", "Pause during slow periods", "Cancel without penalties"]
    },
    {
      title: "Unlimited Requests",
      description: "Submit as many requests as you need without worrying about usage limits or additional charges.",
      icon: "♾️",
      benefits: ["No request caps", "Submit as many tasks as needed", "Predictable monthly cost"]
    },
    {
      title: "Fixed Monthly Fee",
      description: "Enjoy predictable budgeting with our transparent, fixed monthly fee structure.",
      icon: "💰",
      benefits: ["No surprise charges", "Simplified budgeting", "Transparent pricing"]
    },
    {
      title: "Limited Seats = More Attention",
      description: "Our limited client roster ensures you receive personalized attention and dedicated support.",
      icon: "👥",
      benefits: ["Personalized service", "Dedicated support team", "Priority response times"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
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
            Why Choose Our Service
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a flexible, transparent approach to marketing services that puts you in control.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200/50 hover:scale-105"
            >
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600 group-hover:text-gray-700">
                      <span className="text-indigo-500 mt-1">✓</span>
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
            Ready to experience these benefits for your business?
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-indigo-200/50">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions; 