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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="transform transition-all duration-300 hover:scale-105"
          style={{
            opacity: 0,
            animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`
          }}
        >
          <ServiceCard {...service} />
        </div>
      ))}
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