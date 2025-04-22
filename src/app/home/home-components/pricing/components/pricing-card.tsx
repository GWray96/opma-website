import { CheckIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  bonus?: string;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
  bonus,
}: PricingCardProps) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        isPopular 
          ? 'bg-gradient-to-b from-white to-blue-50 border-2 border-blue-500 shadow-lg scale-105 z-10' 
          : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:scale-105'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-1 text-sm font-semibold rounded-tr-2xl rounded-bl-2xl">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
        
        <div className="mt-6 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900">{price}</span>
          <span className="ml-1 text-gray-500">/month</span>
        </div>
        
        {bonus && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-700 font-medium">{bonus}</p>
          </div>
        )}
        
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          href={ctaLink}
          className={`mt-8 block w-full py-3 px-4 text-center rounded-lg font-semibold transition-all duration-200 ${
            isPopular
              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}; 