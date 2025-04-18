'use client'

import React from 'react';
import { FiPlay, FiCalendar, FiClock } from 'react-icons/fi';

interface Webinar {
  title: string;
  description: string;
  date: string;
  duration: string;
  type: 'upcoming' | 'recorded';
  link: string;
}

const webinars: Webinar[] = [
  {
    title: "Digital Transformation Best Practices",
    description: "Learn the key strategies for successful digital transformation in your organization.",
    date: "2024-04-15",
    duration: "60 minutes",
    type: "upcoming",
    link: "#"
  },
  {
    title: "Operational Excellence in Manufacturing",
    description: "Discover how to achieve operational excellence in manufacturing processes.",
    date: "2024-03-20",
    duration: "45 minutes",
    type: "recorded",
    link: "#"
  },
  {
    title: "Supply Chain Optimization Strategies",
    description: "Expert insights on optimizing your supply chain for maximum efficiency.",
    date: "2024-04-01",
    duration: "90 minutes",
    type: "upcoming",
    link: "#"
  }
];

export const Webinars = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Webinars</h2>
        <div className="space-y-8">
          {webinars.map((webinar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      webinar.type === 'upcoming' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {webinar.type === 'upcoming' ? 'Upcoming' : 'Recorded'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" />
                      {formatDate(webinar.date)}
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-2" />
                      {webinar.duration}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href={webinar.link}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {webinar.type === 'upcoming' ? 'Register Now' : 'Watch Now'}
                    <FiPlay className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 