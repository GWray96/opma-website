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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <ul className="mt-4 space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{result}</span>
            </li>
          ))}
        </ul>
        <Link
          href={link}
          className="mt-6 inline-block text-blue-600 hover:text-blue-800"
        >
          Read full case study →
        </Link>
      </div>
    </div>
  );
}; 