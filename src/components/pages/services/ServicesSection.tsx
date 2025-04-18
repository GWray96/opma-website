'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Tab } from '@headlessui/react'
import {
  ChartBarIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const services = {
  marketing: {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions to grow your online presence.',
    icon: ChartBarIcon,
    features: [
      {
        name: 'SEO Optimization',
        description: 'Improve your search rankings and drive organic traffic.',
        icon: RocketLaunchIcon,
      },
      {
        name: 'Social Media Management',
        description: 'Engaging content and community management across platforms.',
        icon: CursorArrowRaysIcon,
      },
      {
        name: 'Content Marketing',
        description: 'Strategic content creation and distribution.',
        icon: SparklesIcon,
      },
    ],
  },
  ai: {
    title: 'AI Integration',
    description: 'Custom AI solutions to streamline your business processes.',
    icon: CommandLineIcon,
    features: [
      {
        name: 'Chatbot Development',
        description: 'Intelligent chatbots for customer service and support.',
        icon: CursorArrowRaysIcon,
      },
      {
        name: 'AI Analytics',
        description: 'Advanced analytics and predictive modeling.',
        icon: ChartBarIcon,
      },
      {
        name: 'Custom AI Solutions',
        description: 'Tailored AI integration for your specific needs.',
        icon: SparklesIcon,
      },
    ],
  },
  automation: {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and boost productivity.',
    icon: ServerIcon,
    features: [
      {
        name: 'Process Automation',
        description: 'Streamline your business processes with automation.',
        icon: RocketLaunchIcon,
      },
      {
        name: 'Integration Setup',
        description: 'Connect your tools and automate workflows.',
        icon: CommandLineIcon,
      },
      {
        name: 'Custom Automation',
        description: 'Tailored automation solutions for your business.',
        icon: SparklesIcon,
      },
    ],
  },
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ServicesSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to grow your business
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          From digital marketing to AI integration and workflow automation, we've got you covered.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/5 p-1">
            {Object.entries(services).map(([key, service]) => (
              <Tab
                key={key}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white text-blue-700 shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-blue-600'
                  )
                }
              >
                <div className="flex items-center justify-center space-x-2">
                  <service.icon className="h-5 w-5" />
                  <span>{service.title}</span>
                </div>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            <AnimatePresence mode="wait">
              {Object.entries(services).map(([key, service], idx) => (
                <Tab.Panel
                  key={key}
                  className={classNames(
                    'rounded-xl bg-white p-6',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3">
                      <service.icon className="h-8 w-8 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">{service.description}</p>
                    <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {service.features.map((feature) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="relative rounded-lg border border-gray-200 p-6"
                        >
                          <dt className="flex items-center space-x-3">
                            <feature.icon className="h-6 w-6 text-blue-600" />
                            <span className="font-semibold text-gray-900">{feature.name}</span>
                          </dt>
                          <dd className="mt-2 text-sm text-gray-600">{feature.description}</dd>
                        </motion.div>
                      ))}
                    </dl>
                  </motion.div>
                </Tab.Panel>
              ))}
            </AnimatePresence>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
} 