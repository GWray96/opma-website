'use client'

import { motion } from 'framer-motion'
import ServicesSection from '@/components/pages/services/ServicesSection'

const stats = [
  { id: 1, name: 'Clients served', value: '500+' },
  { id: 2, name: 'Projects completed', value: '1000+' },
  { id: 3, name: 'Hours saved', value: '50,000+' },
  { id: 4, name: 'ROI average', value: '300%' },
]

const testimonials = [
  {
    content: "OPMA's digital marketing services helped us increase our online presence by 200% in just 6 months.",
    author: {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart',
    },
  },
  {
    content: 'The AI integration they provided has completely transformed how we handle customer service.',
    author: {
      name: 'Michael Chen',
      role: 'CTO at InnovateCorp',
    },
  },
  {
    content: 'Their workflow automation solutions saved us countless hours of manual work each week.',
    author: {
      name: 'Emily Rodriguez',
      role: 'Operations Manager at GrowthCo',
    },
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
          >
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive digital solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a complete suite of digital marketing, AI integration, and workflow automation services to help your business grow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Services section */}
      <div className="py-24 sm:py-32">
        <ServicesSection />
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between bg-white p-6 shadow-lg ring-1 ring-gray-200 xl:p-8"
              >
                <blockquote className="text-gray-600">{testimonial.content}</blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.author.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 