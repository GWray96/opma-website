'use client'

import React from 'react';
import { HeroSection } from './home/home-components/HeroSection';
import { FeaturesSection } from './home/home-components/FeaturesSection';
import { TestimonialsSection } from './home/home-components/TestimonialsSection';
import { CtaSection } from './home/home-components/CtaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}