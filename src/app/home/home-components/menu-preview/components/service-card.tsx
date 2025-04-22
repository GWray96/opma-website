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
        relative z-10 h-full 
        ${isFeature ? 'p-10 lg:p-12' : 'p-8'}
        bg-white/90 backdrop-blur-lg
        rounded-2xl border border-gray-100
        shadow-lg transition-all duration-300
        hover:shadow-2xl hover:bg-white/95
        flex flex-col
      `}>
        {/* Background gradient */}
        <div className={`
          absolute inset-0 bg-gradient-to-br 
          ${isFeature 
            ? 'from-blue-50 via-purple-50 to-pink-50 opacity-95' 
            : 'from-gray-50 to-white opacity-70'
          } 
          rounded-2xl -z-10
        `}></div>

        {/* Icon */}
        <div className="relative mb-8">
          <div className={`
            absolute inset-0 blur-2xl transform group-hover:scale-110 transition-transform duration-300
            ${isFeature ? 'bg-blue-600/30' : 'bg-blue-600/10'}
          `}></div>
          <div className={`
            relative flex items-center justify-center rounded-2xl 
            bg-gradient-to-r from-blue-600 to-purple-600 text-white 
            transform group-hover:scale-105 transition-transform duration-300
            ${isFeature ? 'w-20 h-20' : 'w-14 h-14'}
          `}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 flex-grow">
          <div className="space-y-4">
            <h3 className={`
              font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600
              ${isFeature ? 'text-3xl' : 'text-xl'}
            `}>
              {title}
            </h3>
            <p className={`text-gray-600 leading-relaxed ${isFeature ? 'text-lg' : 'text-base'}`}>
              {description}
            </p>
          </div>

          {isFeature ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                  style={{
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
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
          )}
        </div>

        {/* Hover accent */}
        <div className={`
          absolute inset-x-0 bottom-0
          bg-gradient-to-r from-blue-600 to-purple-600 
          rounded-b-2xl transform origin-left scale-x-0 
          group-hover:scale-x-100 transition-transform duration-300
          ${isFeature ? 'h-2' : 'h-1'}
        `}></div>

        {/* Feature card decorative elements */}
        {isFeature && (
          <>
            <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute right-1/4 top-1/4 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-30 blur-xl"></div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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