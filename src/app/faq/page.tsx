'use client'

import React from 'react';
import { FAQHero } from './faq-components/FAQHero';
import { FAQAccordion } from './faq-components/FAQAccordion';
import { FAQContact } from './faq-components/FAQContact';

export default function FAQPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-16">
      <FAQHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FAQAccordion />
        <FAQContact />
      </div>
    </main>
  );
} 