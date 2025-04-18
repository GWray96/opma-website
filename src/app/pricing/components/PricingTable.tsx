'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Tier {
  name: string
  id: string
  href: string
  priceMonthly: string
  description: string
  features: string[]
  featured: boolean
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/contact',
    priceMonthly: '$499',
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Basic digital marketing setup',
      'Monthly content creation (2 pieces)',
      'Basic SEO optimization',
      'Monthly performance report',
      'Email support',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '/contact',
    priceMonthly: '$999',
    description: 'Ideal for growing businesses with advanced needs.',
    features: [
      'Comprehensive digital marketing strategy',
      'Weekly content creation (4 pieces)',
      'Advanced SEO optimization',
      'Social media management',
      'Basic workflow automation',
      'Weekly performance reports',
      'Priority email & phone support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '/contact',
    priceMonthly: 'Custom',
    description: 'For large organizations with complex requirements.',
    features: [
      'Custom digital marketing strategy',
      'Daily content creation',
      'Advanced SEO & PPC campaigns',
      'Full social media management',
      'Custom AI integration',
      'Advanced workflow automation',
      'Real-time analytics dashboard',
      'Dedicated account manager',
      '24/7 priority support',
    ],
    featured: false,
  },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

const PricingTable: React.FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for&nbsp;you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose from our range of flexible pricing plans. All plans include a 14-day free trial.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={classNames(
                tier.featured ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-blue-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                Get started today
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingTable 