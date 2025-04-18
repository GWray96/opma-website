'use client'

import React from 'react';
import { ContactForm } from './contact-components/ContactForm';
import { ContactInfo } from './contact-components/ContactInfo';

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-16">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to learn more about our services? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </main>
  );
} 