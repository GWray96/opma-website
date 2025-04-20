import { PricingGrid } from './components/pricing-grid';
import Link from 'next/link';

const pricingTiers = [
  {
    title: "Starter",
    price: "£499",
    description: "Perfect for small businesses just starting their online journey",
    features: [
      "Basic website development",
      "Social media setup",
      "Monthly content calendar",
      "Basic SEO optimization",
      "Email marketing setup"
    ],
    ctaText: "Get Started",
    ctaLink: "/contact?plan=starter"
  },
  {
    title: "Professional",
    price: "£999",
    description: "Ideal for growing businesses looking to scale their online presence",
    features: [
      "Everything in Starter",
      "Advanced website features",
      "Content creation",
      "Social media management",
      "Marketing automation",
      "Monthly performance reports"
    ],
    isPopular: true,
    ctaText: "Get Started",
    ctaLink: "/contact?plan=professional"
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For businesses requiring a fully customized solution",
    features: [
      "Everything in Professional",
      "Custom website development",
      "Advanced automation",
      "Dedicated account manager",
      "Priority support",
      "Custom reporting"
    ],
    ctaText: "Contact Us",
    ctaLink: "/contact?plan=enterprise"
  }
];

export const Pricing = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for your business
          </p>
        </div>
        <div className="mt-16">
          <PricingGrid tiers={pricingTiers} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
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