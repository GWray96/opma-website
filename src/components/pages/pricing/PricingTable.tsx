'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '/contact',
    priceMonthly: '$997',
    description: 'Perfect for small businesses just getting started with digital marketing.',
    features: [
      'Basic SEO optimization',
      'Social media management (2 platforms)',
      'Email marketing setup',
      'Basic analytics reporting',
      'Monthly strategy call',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    id: 'tier-growth',
    href: '/contact',
    priceMonthly: '$1,997',
    description: 'Ideal for growing businesses looking to scale their digital presence.',
    features: [
      'Everything in Starter',
      'Advanced SEO optimization',
      'Social media management (4 platforms)',
      'Content marketing strategy',
      'Basic AI workflow automation',
      'Weekly strategy calls',
      'Competitor analysis',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    id: 'tier-scale',
    href: '/contact',
    priceMonthly: '$3,997',
    description: 'For established businesses ready to dominate their market.',
    features: [
      'Everything in Growth',
      'Full-scale digital marketing',
      'Custom AI integration',
      'Advanced workflow automation',
      'Dedicated account manager',
      'Daily strategy support',
      'Market expansion strategy',
      'Custom reporting dashboard',
    ],
    featured: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PricingTable() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Choose the right plan for&nbsp;you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        All plans include a 14-day money-back guarantee. No long-term contracts required.
      </p>
      <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={classNames(
              tier.featured ? 'lg:z-10 lg:rounded-xl lg:shadow-xl' : 'lg:mt-8',
              'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
            )}
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
              <Link
                href={tier.href}
                className={classNames(
                  tier.featured
                    ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-500'
                    : 'text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                )}
              >
                Get started
              </Link>
            </div>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 