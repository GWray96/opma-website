import { PricingCard } from './pricing-card';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
  bonus?: string;
}

interface PricingGridProps {
  tiers: PricingTier[];
}

export const PricingGrid = ({ tiers }: PricingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
      {tiers.map((tier, index) => (
        <div key={index} className={`${index === 1 ? 'md:-mt-4 md:mb-4' : ''}`}>
          <PricingCard {...tier} />
        </div>
      ))}
    </div>
  );
}; 