import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
  rating?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  imageUrl,
  rating = 5,
  className = '',
}: TestimonialCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ${className}`}>
      <div className="flex flex-col h-full">
        {/* Quote Icon */}
        <div className="text-primary-500 mb-4">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote Text */}
        <p className="text-gray-300 text-lg mb-6 flex-grow">{quote}</p>

        {/* Author Info */}
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-semibold">{author}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
        </div>

        {/* Rating */}
        {rating && (
          <div className="flex mt-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
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
      </div>
    </div>
  );
} 