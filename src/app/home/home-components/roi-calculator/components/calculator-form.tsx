'use client';

import { useState } from 'react';

interface CalculatorFormProps {
  onSubmit: (data: { hours: number; aiEnabled: boolean }) => void;
}

export const CalculatorForm = ({ onSubmit }: CalculatorFormProps) => {
  const [hours, setHours] = useState<number>(0);
  const [aiEnabled, setAiEnabled] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ hours, aiEnabled });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="hours" className="block text-sm font-medium text-gray-700">
          Weekly Marketing Hours
        </label>
        <div className="mt-1">
          <input
            type="number"
            id="hours"
            name="hours"
            min="0"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="aiEnabled"
          name="aiEnabled"
          checked={aiEnabled}
          onChange={(e) => setAiEnabled(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="aiEnabled" className="ml-2 block text-sm text-gray-700">
          Enable AI Automation
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Calculate ROI
        </button>
      </div>
    </form>
  );
}; 