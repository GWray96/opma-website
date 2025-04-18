'use client'

import React from 'react';
import { ResourceHero } from './resources-components/ResourceHero';
import { WhitePapers } from './resources-components/WhitePapers';
import { CaseStudies } from './resources-components/CaseStudies';
import { Webinars } from './resources-components/Webinars';
import { Blog } from './resources-components/Blog';

export default function ResourcesPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-16">
      <ResourceHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <WhitePapers />
        <CaseStudies />
        <Webinars />
        <Blog />
      </div>
    </main>
  );
} 