'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FounderStory() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the founder
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <motion.div
            className="relative lg:order-last lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              Hi, I'm John Smith, the founder of OPMA. With over 15 years of experience in digital marketing and technology,
              I've seen firsthand how businesses struggle with the complexities of modern marketing and automation.
            </p>
            <p className="mt-6">
              After working with hundreds of businesses, I noticed a common pattern: entrepreneurs and business owners
              were spending too much time on tasks that could be automated, leaving them with less time to focus on
              growing their businesses.
            </p>
            <p className="mt-6">
              That's why I founded OPMA - to help busy entrepreneurs and business owners reclaim their time through
              done-for-you digital marketing, AI system setup, and workflow automations.
            </p>
            <h3 className="mt-8 text-lg font-semibold tracking-tight text-gray-900">Our Mission</h3>
            <p className="mt-2">
              Our mission is to empower businesses with the tools and strategies they need to thrive in the digital age.
              We believe that by automating repetitive tasks and leveraging the power of AI, businesses can focus on what
              they do best - creating value for their customers.
            </p>
            <h3 className="mt-8 text-lg font-semibold tracking-tight text-gray-900">Our Vision</h3>
            <p className="mt-2">
              We envision a world where every business, regardless of size, has access to the same powerful marketing
              and automation tools that were once only available to large enterprises. By democratizing these technologies,
              we're helping to level the playing field and create opportunities for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 