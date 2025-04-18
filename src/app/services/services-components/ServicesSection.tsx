import React from 'react';

const ServicesSection = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 