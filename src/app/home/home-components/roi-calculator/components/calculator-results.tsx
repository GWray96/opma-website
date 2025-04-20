'use client';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
}

interface CalculatorResultsProps {
  data: {
    tasks: Task[];
    includeAISavings: boolean;
  };
  onReset: () => void;
}

export const CalculatorResults = ({ data, onReset }: CalculatorResultsProps) => {
  const calculateSavings = () => {
    const { tasks, includeAISavings } = data;
    
    return tasks.reduce((acc, task) => {
      const annualHours = task.hoursPerWeek * 52;
      const savedHours = includeAISavings && task.usesAI 
        ? annualHours * task.aiEfficiency 
        : 0;
      
      return {
        totalHours: acc.totalHours + annualHours,
        savedHours: acc.savedHours + savedHours
      };
    }, { totalHours: 0, savedHours: 0 });
  };

  const { totalHours, savedHours } = calculateSavings();
  const savedDays = Math.round(savedHours / 8); // Assuming 8-hour workday

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">Your Time Savings Potential</h3>
        <p className="mt-2 text-sm text-gray-600">
          Here's how much time you could save with AI-powered automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
          <h4 className="text-lg font-medium text-gray-900">Annual Hours</h4>
          <p className="mt-2 text-3xl font-bold text-purple-600">{totalHours.toLocaleString()} hrs</p>
          <p className="mt-1 text-sm text-gray-600">Total time spent on selected tasks</p>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 p-6">
          <h4 className="text-lg font-medium text-gray-900">Potential Savings</h4>
          <p className="mt-2 text-3xl font-bold text-teal-600">{savedHours.toLocaleString()} hrs</p>
          <p className="mt-1 text-sm text-gray-600">Time saved with AI automation</p>
        </div>
      </div>

      <div className="rounded-lg bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 p-6 text-white">
        <h4 className="text-lg font-medium">Time Reclaimed</h4>
        <p className="mt-2 text-4xl font-bold">{savedDays} working days</p>
        <p className="mt-1 text-sm text-white/80">
          That's {savedDays} full working days you could spend on growing your business!
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onReset}
          className="w-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Calculate Again
        </button>
        
        <button
          onClick={() => window.location.href = '/contact'}
          className="w-full rounded-md bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:via-indigo-700 hover:to-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Book a Free Strategy Call
        </button>
      </div>
    </div>
  );
}; 