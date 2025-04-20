'use client';

import { useState } from 'react';
import { CalculatorForm } from './calculator-form';
import { CalculatorResults } from './calculator-results';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
  category: string;
}

export function ROICalculator() {
  const [showResults, setShowResults] = useState(false);
  const [calculatorData, setCalculatorData] = useState<{
    tasks: Task[];
    includeAISavings: boolean;
  }>({
    tasks: [],
    includeAISavings: true,
  });

  const handleFormSubmit = (data: { tasks: Task[]; includeAISavings: boolean }) => {
    setCalculatorData(data);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setCalculatorData({
      tasks: [],
      includeAISavings: true,
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {!showResults ? (
        <CalculatorForm onSubmit={handleFormSubmit} />
      ) : (
        <CalculatorResults 
          tasks={calculatorData.tasks} 
          includeAISavings={calculatorData.includeAISavings} 
          onReset={handleReset} 
        />
      )}
    </div>
  );
} 