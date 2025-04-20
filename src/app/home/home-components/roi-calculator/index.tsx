'use client';

import { useState } from 'react';
import { CalculatorForm } from './components/calculator-form';
import { CalculatorResults } from './components/calculator-results';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
}

interface CalculatorData {
  tasks: Task[];
  includeAISavings: boolean;
}

export const ROICalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [calculatorData, setCalculatorData] = useState<CalculatorData>({
    tasks: [],
    includeAISavings: true
  });

  const handleSubmit = (data: CalculatorData) => {
    setCalculatorData(data);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
  };

  return (
    <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">AI + Automation Time Saver</h2>
        <p className="mt-2 text-sm text-gray-500">
          Calculate how much time you could save with AI-powered marketing automation
        </p>
      </div>

      <div className="mt-8">
        {!showResults ? (
          <CalculatorForm onSubmit={handleSubmit} />
        ) : (
          <CalculatorResults data={calculatorData} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}; 