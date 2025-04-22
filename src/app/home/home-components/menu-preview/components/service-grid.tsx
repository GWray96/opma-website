import { ServiceCard } from './service-card';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isFeature?: boolean;
}

interface ServiceGridProps {
  services: Service[];
}

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  // Find the feature service (Digital Marketing)
  const featureService = services.find(service => service.isFeature);
  const otherServices = services.filter(service => !service.isFeature);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Feature card - Digital Marketing */}
      <div className="lg:row-span-2 transform transition-all duration-300 hover:scale-105"
        style={{
          opacity: 0,
          animation: 'fadeIn 0.5s ease-out forwards'
        }}
      >
        {featureService && <ServiceCard {...featureService} isFeature={true} />}
      </div>

      {/* Right column with two cards */}
      <div className="grid grid-cols-1 gap-8">
        {otherServices.map((service, index) => (
          <div
            key={index}
            className="transform transition-all duration-300 hover:scale-105"
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease-out ${(index + 1) * 0.2}s forwards`
            }}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}; 