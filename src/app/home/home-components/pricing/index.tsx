import { PricingGrid } from './components/pricing-grid';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';

const pricingTiers = [
  {
    title: "Essentials",
    price: "£499",
    description: "Perfect for small businesses just starting their online journey",
    features: [
      "Basic website development",
      "Social media setup",
      "Monthly content calendar",
      "Basic SEO optimization",
      "Email marketing setup",
      "Weekly performance updates",
      "Standard support"
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=essentials",
    bonus: "Free onboarding session"
  },
  {
    title: "Momentum",
    price: "£999",
    description: "Ideal for growing businesses looking to scale their online presence",
    features: [
      "Everything in Essentials",
      "Advanced website features",
      "Content creation & strategy",
      "Social media management",
      "Marketing automation",
      "Advanced SEO optimization",
      "Monthly performance reports",
      "Priority support",
      "Dedicated account manager"
    ],
    isPopular: true,
    ctaText: "Get Started",
    ctaLink: "/contact?plan=momentum",
    bonus: "Free strategy session + 2 months of premium support"
  },
  {
    title: "Scale Engine",
    price: "£1,999",
    description: "For established businesses requiring comprehensive digital transformation",
    features: [
      "Everything in Momentum",
      "Custom website development",
      "Advanced automation workflows",
      "AI-powered content generation",
      "Competitor analysis",
      "Custom reporting dashboard",
      "24/7 priority support",
      "Dedicated success team",
      "Quarterly strategy reviews"
    ],
    ctaText: "Contact Us",
    ctaLink: "/contact?plan=scale-engine",
    bonus: "Free implementation workshop + 3 months of premium support"
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include our core services with options to scale as you grow.
          </p>
        </div>
        
        <div className="mt-16">
          <PricingGrid tiers={pricingTiers} />
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-sm text-gray-500">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span>All plans include a 14-day money-back guarantee</span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View detailed pricing
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}; 