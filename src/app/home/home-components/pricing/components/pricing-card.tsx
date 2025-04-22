import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/solid';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
  bonus?: string;
}

interface PricingCardProps {
  tier: PricingTier;
}

export const PricingCard = ({ tier }: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 backdrop-blur-sm ${
        tier.isPopular
          ? 'bg-gradient-to-b from-blue-50/80 to-white/80 border-2 border-blue-200 shadow-xl'
          : 'bg-white/80 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'
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
      
      {tier.bonus && (
        <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 p-4 border border-blue-100">
          <p className="text-sm font-medium text-blue-800">{tier.bonus}</p>
        </div>
      )}
      
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
  );
}; 