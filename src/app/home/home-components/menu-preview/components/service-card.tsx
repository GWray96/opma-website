interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  isFeature?: boolean;
}

export const ServiceCard = ({ title, description, features, icon, isFeature }: ServiceCardProps) => {
  return (
    <div className="group relative h-full">
      <div className={`
        relative z-10 h-full ${isFeature ? 'p-10' : 'p-8'}
        bg-white/80 backdrop-blur-lg
        rounded-2xl border border-gray-100
        shadow-lg transition-all duration-300
        hover:shadow-2xl hover:bg-white/90
        flex flex-col
      `}>
        {/* Background gradient */}
        <div className={`
          absolute inset-0 bg-gradient-to-br 
          ${isFeature 
            ? 'from-blue-50 via-purple-50 to-pink-50 opacity-90' 
            : 'from-gray-50 to-white opacity-70'
          } 
          rounded-2xl -z-10
        `}></div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className={`
            absolute inset-0 blur-xl transform group-hover:scale-110 transition-transform duration-300
            ${isFeature ? 'bg-blue-600/20' : 'bg-blue-600/10'}
          `}></div>
          <div className={`
            relative flex items-center justify-center rounded-xl 
            bg-gradient-to-r from-blue-600 to-purple-600 text-white 
            transform group-hover:scale-105 transition-transform duration-300
            ${isFeature ? 'w-16 h-16' : 'w-14 h-14'}
          `}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 flex-grow">
          <h3 className={`
            font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600
            ${isFeature ? 'text-2xl' : 'text-xl'}
          `}>
            {title}
          </h3>
          <p className={`text-gray-600 leading-relaxed ${isFeature ? 'text-lg' : 'text-base'}`}>
            {description}
          </p>
          <ul className="space-y-3 mt-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className={`
                  flex-shrink-0 rounded-full bg-blue-100 
                  flex items-center justify-center
                  ${isFeature ? 'w-6 h-6' : 'w-5 h-5'}
                `}>
                  <svg 
                    className={`text-blue-600 ${isFeature ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className={`text-gray-600 ${isFeature ? 'text-lg' : 'text-base'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hover accent */}
        <div className={`
          absolute inset-x-0 bottom-0 h-1 
          bg-gradient-to-r from-blue-600 to-purple-600 
          rounded-b-2xl transform origin-left scale-x-0 
          group-hover:scale-x-100 transition-transform duration-300
          ${isFeature ? 'h-1.5' : 'h-1'}
        `}></div>

        {/* Feature card decorative elements */}
        {isFeature && (
          <>
            <div className="absolute -right-3 -bottom-3 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -left-3 -top-3 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 blur-xl"></div>
          </>
        )}
      </div>
    </div>
  );
}; 