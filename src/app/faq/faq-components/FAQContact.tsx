'use client'

import React from 'react';
import Link from 'next/link';
import { FiMail, FiMessageSquare } from 'react-icons/fi';

export const FAQContact = () => {
  return (
    <section className="py-16 bg-gray-50 rounded-lg my-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our team is here to help with any questions you may have.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link 
            href="/contact" 
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <FiMail className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-center">
              Send us an email and we'll get back to you as soon as possible.
            </p>
          </Link>
          
          <Link 
            href="/contact#chat" 
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <FiMessageSquare className="text-green-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-center">
              Chat with our support team for immediate assistance.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}; 