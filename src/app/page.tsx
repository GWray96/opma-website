'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroSection from '@/components/pages/home/HeroSection'
import FeaturesSection from '@/components/pages/home/FeaturesSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  )
} 