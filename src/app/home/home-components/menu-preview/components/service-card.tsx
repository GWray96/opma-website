interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
  return (
    <div className="group relative h-full">
      <div className={`
        relative z-10 h-full p-8
        bg-white/80 backdrop-blur-lg
        rounded-2xl border border-gray-100
        shadow-lg transition-all duration-300
        hover:shadow-2xl hover:bg-white/90
        flex flex-col
      `}>
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl -z-10"></div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-blue-600/10 rounded-xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white transform group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex-grow">
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-3 mt-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-600">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover accent */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  );
}; 