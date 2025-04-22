import { PricingCard } from './pricing-card';

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

interface PricingGridProps {
  tiers: PricingTier[];
}

export const PricingGrid = ({ tiers }: PricingGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.title}
          className={`relative ${
            tier.isPopular ? 'lg:scale-105 lg:-translate-y-2' : ''
          }`}
        >
          <PricingCard tier={tier} />
        </div>
      ))}
    </div>
  );
}; 