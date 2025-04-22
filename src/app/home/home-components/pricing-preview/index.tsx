'use client';

import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';

const previewTiers = [
  {
    title: "Essentials",
    price: "£997",
    description: "Perfect for solopreneurs getting started",
    features: [
      "1 Landing Page or Funnel",
      "Basic CRM + Automation",
      "4 Social Media Posts",
      "Monthly Strategy Call"
    ],
    ctaText: "View Details",
    ctaLink: "/pricing#essentials"
  },
  {
    title: "Momentum",
    price: "£1,997",
    description: "For business owners ready to grow",
    features: [
      "2 Funnels or Landing Pages",
      "Workflow Automation",
      "12 Content Assets monthly",
      "Weekly Strategy Call"
    ],
    isPopular: true,
    ctaText: "View Details",
    ctaLink: "/pricing#momentum"
  },
  {
    title: "Scale Engine",
    price: "£3,997",
    description: "For growing businesses ready to scale",
    features: [
      "Everything in Momentum",
      "20 Content Assets monthly",
      "Paid Ads Management",
      "Dedicated Strategy Lead"
    ],
    ctaText: "View Details",
    ctaLink: "/pricing#scale-engine"
  }
];

export const PricingPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-lg md:text-xl font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-gray-100">
              Choose Your Growth Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that's right for your service-based business. All plans include our core services with options to scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {previewTiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-blue-50/80 to-white/80 border-2 border-blue-200 shadow-xl scale-105 -translate-y-2'
                  : 'bg-white/80 border border-gray-200 shadow-lg hover:scale-105 hover:-translate-y-1'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-1 text-sm font-medium text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  {tier.title}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">{tier.description}</p>
              </div>
              
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-500 shrink-0" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link
                  href={tier.ctaLink}
                  className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 group"
          >
            View Full Pricing Details
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span>All plans include a 14-day money-back guarantee</span>
          </p>
        </div>
      </div>
    </section>
  );
}; 