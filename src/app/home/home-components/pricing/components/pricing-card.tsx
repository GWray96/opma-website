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
      className={`relative rounded-2xl p-8 ${
        tier.isPopular
          ? 'bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 shadow-xl'
          : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'
      }`}
    >
      {tier.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{tier.title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
          <span className="text-gray-500">/month</span>
        </div>
        <p className="mt-4 text-gray-500">{tier.description}</p>
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
        <div className="mt-6 rounded-lg bg-blue-50 p-4">
          <p className="text-sm font-medium text-blue-800">{tier.bonus}</p>
        </div>
      )}
      
      <div className="mt-8">
        <Link
          href={tier.ctaLink}
          className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold ${
            tier.isPopular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          } transition-colors duration-200`}
        >
          {tier.ctaText}
        </Link>
      </div>
    </div>
  );
}; 