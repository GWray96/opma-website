'use client'

import React from 'react';
import { BlogHero } from './blog-components/BlogHero';
import { BlogList } from './blog-components/BlogList';
import { BlogCategories } from './blog-components/BlogCategories';
import { BlogNewsletter } from './blog-components/BlogNewsletter';

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen bg-white pt-16">
      <BlogHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogList />
          </div>
          <div className="lg:col-span-1">
            <BlogCategories />
            <BlogNewsletter />
          </div>
        </div>
      </div>
    </main>
  );
} 