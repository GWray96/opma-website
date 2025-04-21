import Image from 'next/image';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  description: string;
  imageUrl: string;
  results: string[];
  link: string;
}

export const CaseStudyCard = ({
  title,
  description,
  imageUrl,
  results,
  link,
}: CaseStudyCardProps) => {
  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {title}
        </h3>
        <p className="mt-3 text-gray-600">
          {description}
        </p>
        <ul className="mt-4 space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-600">{result}</span>
            </li>
          ))}
        </ul>
        <Link
          href={link}
          className="mt-6 inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors duration-300"
        >
          Read full case study
          <svg
            className="ml-2 h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}; 