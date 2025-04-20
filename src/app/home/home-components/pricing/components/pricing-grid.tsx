import { PricingCard } from './pricing-card';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

interface PricingGridProps {
  tiers: PricingTier[];
}

export const PricingGrid = ({ tiers }: PricingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tiers.map((tier, index) => (
        <PricingCard key={index} {...tier} />
      ))}
    </div>
  );
}; 