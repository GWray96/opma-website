'use client';

import { CheckIcon, SparklesIcon } from '@heroicons/react/24/solid';

const pricingTiers = [
  {
    title: "Essentials",
    price: "£997",
    description: "For solopreneurs or small teams getting started with marketing consistency and basic automation.",
    features: [
      "1 Landing Page or Funnel Build (lead gen or booking-focused)",
      "Basic CRM + Automation Setup",
      "4 Branded Social Media Posts (monthly)",
      "1 Lead Magnet Creation (PDF or Guide)",
      "Monthly Strategy Call (30 min)",
      "Email support (48hr response time)"
    ],
    goal: "Get leads on autopilot + look professional online with minimal effort",
    ctaText: "Book a Call",
    ctaLink: "/contact"
  },
  {
    title: "Momentum",
    price: "£1,997",
    description: "For business owners ready to grow, build authority, and scale operations with automation and consistent content.",
    features: [
      "2 Funnels or Landing Pages",
      "Workflow Automation Build",
      "12 Content Assets per month",
      "Weekly Strategy Call (45 min)",
      "Monthly Performance Dashboard",
      "Slack-style chat + 24hr response"
    ],
    bonuses: [
      "First 14-Day Build Sprint",
      "Quarterly Offer & Positioning Review"
    ],
    contentBreakdown: [
      "4 Branded Social Posts",
      "4 Short-Form Reels/Videos",
      "4 Email Newsletters or Sales Emails",
      "2 Lead Magnets"
    ],
    goal: "Give them the structure, automation, and consistent visibility to focus on client delivery",
    isPopular: true,
    ctaText: "Get Started",
    ctaLink: "/contact#momentum"
  },
  {
    title: "Scale Engine",
    price: "£3,997",
    description: "For growing businesses or small teams who want to delegate all things marketing and automation to a trusted partner.",
    features: [
      "Everything in Momentum, plus:",
      "20 Content Assets per month",
      "Paid Ads Setup + Monthly Management",
      "Unlimited Funnel + Email Edits",
      "A/B Testing & Optimization",
      "Quarterly Launch Campaign Strategy",
      "Dedicated Strategy Lead — Weekly 1:1 Session",
      "Priority Support — Same-day Mon–Fri"
    ],
    bonuses: [
      "Monthly Competitor Review & Ad Swipe File",
      "AI-Generated Content Ideas + Planner",
      "VIP Onboarding (3-day setup blitz)"
    ],
    contentBreakdown: [
      "8 Social Posts",
      "6 Reels/Videos",
      "6 Emails"
    ],
    goal: "Full-service growth partner — your fractional CMO + growth team",
    ctaText: "Scale With Us",
    ctaLink: "/contact#scale"
  }
];

export const Pricing = () => {
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
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
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

              {tier.contentBreakdown && (
                <div className="mt-6 p-4 bg-gray-50/80 rounded-xl">
                  <h4 className="font-semibold text-gray-700 mb-2">Content Breakdown:</h4>
                  <ul className="space-y-2">
                    {tier.contentBreakdown.map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tier.bonuses && (
                <div className="mt-6">
                  <h4 className="font-semibold text-blue-600 flex items-center mb-3">
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Bonuses:
                  </h4>
                  <ul className="space-y-2">
                    {tier.bonuses.map((bonus) => (
                      <li key={bonus} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {bonus}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 text-sm text-gray-500">
                <p className="font-medium">Goal:</p>
                <p>{tier.goal}</p>
              </div>
              
              <div className="mt-8">
                <a
                  href={tier.ctaLink}
                  className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span>All plans include a 14-day money-back guarantee</span>
          </p>
        </div>
      </div>
    </section>
  );
}; 