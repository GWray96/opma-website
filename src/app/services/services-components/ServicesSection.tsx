'use client'

import React from 'react';

export const ServicesSection = () => {
  const services = [
    {
      title: 'Process Optimization',
      description: 'Streamline your business processes for maximum efficiency and productivity.',
      icon: '🔄'
    },
    {
      title: 'Data Analytics',
      description: 'Make data-driven decisions with our advanced analytics solutions.',
      icon: '📊'
    },
    {
      title: 'Cost Reduction',
      description: 'Identify and eliminate unnecessary expenses while maintaining quality.',
      icon: '💰'
    },
    {
      title: 'Automation',
      description: 'Implement automated solutions to reduce manual work and errors.',
      icon: '⚙️'
    }
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 