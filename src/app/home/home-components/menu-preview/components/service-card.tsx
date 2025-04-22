interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isLarge?: boolean;
}

export const ServiceCard = ({ title, description, features, icon, isLarge }: ServiceCardProps) => {
  return (
    <div className="group relative h-full">
      {/* Card */}
      <div className={`
        relative z-10 h-full rounded-2xl bg-white p-6 
        ${isLarge ? 'p-8' : 'p-6'}
        shadow-lg transition-all duration-300 
        hover:shadow-xl hover:-translate-y-1
        flex flex-col
      `}>
        {/* Icon */}
        <div className={`
          flex items-center justify-center rounded-xl 
          bg-gradient-to-r from-blue-600 to-purple-600 text-white
          ${isLarge ? 'h-16 w-16 mb-6' : 'h-12 w-12 mb-4'}
        `}>
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-4 flex-grow">
          <h3 className={`font-bold text-gray-900 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className={`text-gray-600 ${isLarge ? 'text-lg' : 'text-base'}`}>
            {description}
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-blue-600">✓</span>
                <span className={`text-gray-600 ${isLarge ? 'text-lg' : 'text-base'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-5"></div>
        
        {/* Additional decorative elements for large cards */}
        {isLarge && (
          <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 blur-xl"></div>
        )}
      </div>
    </div>
  );
}; 