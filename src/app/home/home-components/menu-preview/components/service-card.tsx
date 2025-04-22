interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative z-10 h-full rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover gradient border */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-5"></div>
      </div>
    </div>
  );
}; 