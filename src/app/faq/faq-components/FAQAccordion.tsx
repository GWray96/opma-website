'use client'

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What services does OPMA offer?',
    answer: 'OPMA offers a comprehensive range of operational excellence services including process optimization, data analytics, cost reduction strategies, and automation solutions. Our services are tailored to help businesses streamline operations, reduce costs, and improve efficiency through data-driven approaches.',
    category: 'Services'
  },
  {
    id: '2',
    question: 'How long does it typically take to see results from your services?',
    answer: 'The timeline for seeing results varies depending on the scope and complexity of the project. Some clients see initial improvements within weeks, while comprehensive transformations may take several months. We provide regular progress updates and measurable KPIs throughout the engagement.',
    category: 'Process'
  },
  {
    id: '3',
    question: 'Do you work with businesses of all sizes?',
    answer: 'Yes, we work with businesses of all sizes, from small startups to large enterprises. We tailor our approach and solutions to meet the specific needs, resources, and goals of each client, ensuring that our services provide value regardless of company size.',
    category: 'Clients'
  },
  {
    id: '4',
    question: 'What industries do you specialize in?',
    answer: 'We have experience across multiple industries including manufacturing, healthcare, retail, logistics, and professional services. Our diverse experience allows us to bring best practices and innovative solutions from various sectors to benefit our clients.',
    category: 'Industries'
  },
  {
    id: '5',
    question: 'How do you measure the success of your engagements?',
    answer: 'We establish clear, measurable KPIs at the beginning of each engagement. These typically include metrics such as cost reduction percentages, efficiency improvements, process cycle time reduction, and ROI. We provide regular reporting and analytics to track progress against these goals.',
    category: 'Process'
  },
  {
    id: '6',
    question: 'What is your approach to implementing changes?',
    answer: 'Our approach is collaborative and data-driven. We begin with a thorough assessment of current operations, identify opportunities for improvement, develop a tailored strategy, and implement changes in phases to minimize disruption. We also provide training and support to ensure sustainable results.',
    category: 'Process'
  },
  {
    id: '7',
    question: 'Do you offer ongoing support after the initial engagement?',
    answer: 'Yes, we offer various support options after the initial engagement, including ongoing consulting, periodic reviews, and maintenance services. We\'re committed to ensuring that our clients continue to benefit from our expertise and maintain the improvements achieved.',
    category: 'Services'
  },
  {
    id: '8',
    question: 'How do you ensure data security and confidentiality?',
    answer: 'We take data security and confidentiality very seriously. We adhere to industry best practices and compliance standards, implement robust security measures, and have strict confidentiality agreements in place. Your business data and information are always protected.',
    category: 'Security'
  }
];

export const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories using Array methods instead of Set
  const categories = ['All', ...Array.from(new Set(faqItems.map(item => item.category)))];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = activeCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Questions</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(item.id)}
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openItems.includes(item.id) ? (
                  <FiChevronUp className="text-gray-500" />
                ) : (
                  <FiChevronDown className="text-gray-500" />
                )}
              </button>
              
              {openItems.includes(item.id) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 