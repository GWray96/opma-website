interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) => {
  return (
    <div className={`relative rounded-lg shadow-lg overflow-hidden ${
      isPopular ? 'ring-2 ring-blue-600' : ''
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
        <p className="mt-8">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600">/month</span>
        </p>
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={ctaLink}
          className={`mt-8 block w-full py-3 px-4 text-center rounded-md font-semibold ${
            isPopular
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}; 