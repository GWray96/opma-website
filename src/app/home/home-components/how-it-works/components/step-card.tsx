interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
        {number}
      </div>
      <div className="mt-4 w-12 h-12 text-blue-600">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-center text-gray-600">{description}</p>
    </div>
  );
}; 