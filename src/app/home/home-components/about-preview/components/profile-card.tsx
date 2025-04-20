import Image from 'next/image';
import Link from 'next/link';

interface ProfileCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  expertise: string[];
}

export const ProfileCard = ({
  name,
  role,
  imageUrl,
  bio,
  expertise,
}: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <p className="text-blue-600">{role}</p>
        <p className="mt-4 text-gray-600">{bio}</p>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900">Areas of Expertise:</h4>
          <ul className="mt-2 space-y-2">
            {expertise.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/about"
          className="mt-6 inline-block text-blue-600 hover:text-blue-800"
        >
          Learn more about me →
        </Link>
      </div>
    </div>
  );
}; 