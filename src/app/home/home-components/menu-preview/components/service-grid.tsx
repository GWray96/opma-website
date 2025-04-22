import { ServiceCard } from './service-card';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
      {services.map((service, index) => {
        // Create different sized cards based on index
        const sizeClasses = [
          "md:col-span-6 lg:col-span-6 lg:row-span-2", // First card - large
          "md:col-span-3 lg:col-span-3", // Second card - small
          "md:col-span-3 lg:col-span-3", // Third card - small
        ][index] || "md:col-span-4 lg:col-span-4";

        return (
          <div key={index} className={sizeClasses}>
            <ServiceCard {...service} isLarge={index === 0} />
          </div>
        );
      })}
    </div>
  );
}; 