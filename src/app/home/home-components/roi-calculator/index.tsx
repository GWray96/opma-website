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
    <div className="mx-auto max-w-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Time Savings Calculator
        </h2>
        <p className="mt-3 text-lg text-gray-300">
          See how much time you could save with AI-powered automation
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-6">
          {!showResults ? (
            <CalculatorForm onSubmit={handleSubmit} />
          ) : (
            <CalculatorResults data={calculatorData} onReset={handleReset} />
          )}
        </div>
      </div>
    </div>
  );
}; 