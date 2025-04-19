import Image from 'next/image';

interface SingleTestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
  rating?: number;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function SingleTestimonial({
  quote,
  author,
  role,
  company,
  imageUrl,
  rating = 5,
  className = '',
  size = 'medium',
}: SingleTestimonialProps) {
  // Size-based classes
  const sizeClasses = {
    small: {
      container: 'max-w-2xl',
      text: 'text-base',
      image: 'w-10 h-10',
      name: 'text-sm',
      role: 'text-xs',
    },
    medium: {
      container: 'max-w-4xl',
      text: 'text-lg',
      image: 'w-12 h-12',
      name: 'text-base',
      role: 'text-sm',
    },
    large: {
      container: 'max-w-5xl',
      text: 'text-base md:text-xl',
      image: 'w-16 h-16 md:w-14 md:h-14',
      name: 'text-lg',
      role: 'text-sm md:text-base',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`${currentSize.container} mx-auto px-4 md:px-8 ${className}`}>
      <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-white/10 relative">
        {/* Quote Icon */}
        <div className="absolute top-4 md:top-6 right-4 md:right-8 text-primary-500/20">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Rating */}
          {rating && (
            <div className="flex mb-6 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 md:w-5 md:h-5 ${
                    i < rating ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          )}

          {/* Quote Text */}
          <p className={`${currentSize.text} text-gray-300 mb-8 md:mb-6 leading-relaxed font-light italic max-w-3xl mx-auto`}>
            "{quote}"
          </p>

          {/* Author Info */}
          <div className="flex flex-col items-center">
            <div className={`relative ${currentSize.image} rounded-full overflow-hidden mb-4 md:mb-3 bg-gray-200`}>
              <Image
                src={imageUrl}
                alt={author}
                fill
                className="object-cover grayscale"
              />
            </div>
            <h4 className={`${currentSize.name} text-white font-semibold mb-2 md:mb-1`}>{author}</h4>
            <p className={`${currentSize.role} text-gray-400 mb-1`}>{role}</p>
            <p className={`${currentSize.role} text-gray-400`}>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 