import { ProfileCard } from './components/profile-card';

const profileData = {
  name: "Gareth Wray",
  role: "Founder & Online Presence Specialist",
  imageUrl: "/images/profile.jpg",
  bio: "With over 5 years of experience in digital marketing and web development, I help businesses establish and grow their online presence through strategic planning and automation.",
  expertise: [
    "Digital Marketing Strategy",
    "Web Development",
    "Social Media Management",
    "Content Creation",
    "Marketing Automation"
  ]
};

export const AboutPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get to know the person behind OPMA
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <ProfileCard {...profileData} />
        </div>
      </div>
    </section>
  );
}; 