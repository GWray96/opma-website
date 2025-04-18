'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PricingTable from '@/components/PricingTable'

const faqs = [
  {
    question: "What's included in the monthly subscription?",
    answer:
      'Each plan includes a comprehensive suite of digital marketing services, AI integration, and workflow automation tools. You'll get regular strategy calls, performance reports, and ongoing support from our team of experts.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer:
      'Absolutely! Our Scale plan includes custom AI integration and workflow automation. We can also create a custom plan tailored to your specific needs.',
  },
  {
    question: 'How long does it take to get started?',
    answer:
      'Once you subscribe, we'll schedule an onboarding call within 24 hours. Most clients are up and running within 1-2 weeks.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'All plans include email support. Growth and Scale plans include weekly strategy calls, and Scale plan clients get a dedicated account manager and daily support.',
  },
]

export default function PricingPage() {
  return (
    <>
      <Navigation />
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
                Simple, transparent pricing
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose the perfect plan for your business. All plans include our core services with the option to scale as you grow.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Pricing table */}
        <PricingTable />

        {/* FAQ section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-6"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to transform your business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Join hundreds of businesses that have already streamlined their operations with our help.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Contact sales <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 