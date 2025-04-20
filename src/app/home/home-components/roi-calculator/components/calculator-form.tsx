'use client';

import { useState } from 'react';

interface Task {
  id: string;
  name: string;
  hoursPerWeek: number;
  usesAI: boolean;
  aiEfficiency: number;
}

interface CalculatorFormProps {
  onSubmit: (data: { tasks: Task[]; includeAISavings: boolean }) => void;
}

const INITIAL_TASKS: Task[] = [
  { id: 'blog', name: 'Writing blog content', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7 },
  { id: 'social', name: 'Social media posting', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.8 },
  { id: 'email', name: 'Email marketing', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.6 },
  { id: 'reports', name: 'Creating reports', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.75 },
  { id: 'support', name: 'Customer support replies', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.65 },
  { id: 'ads', name: 'Ad creative generation', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.85 },
  { id: 'leads', name: 'Lead follow-ups', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7 },
  { id: 'analytics', name: 'Analytics review', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.8 },
  { id: 'video', name: 'Video editing/repurposing', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.75 },
  { id: 'website', name: 'Website updates', hoursPerWeek: 0, usesAI: false, aiEfficiency: 0.7 },
];

export const CalculatorForm = ({ onSubmit }: CalculatorFormProps) => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [includeAISavings, setIncludeAISavings] = useState(true);

  const handleTaskChange = (taskId: string, field: keyof Task, value: any) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, [field]: value } : task
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Only include tasks that have hours > 0
    const activeTasks = tasks.filter(task => task.hoursPerWeek > 0);
    onSubmit({ tasks: activeTasks, includeAISavings });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Select Your Marketing Tasks</h3>
        <p className="text-sm text-gray-600">
          Choose the tasks you currently handle and enter how many hours you spend on each per week.
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start space-x-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-purple-200 transition-colors">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <label htmlFor={`task-${task.id}`} className="text-sm font-medium text-gray-900">
                  {task.name}
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    id={`hours-${task.id}`}
                    min="0"
                    max="168"
                    value={task.hoursPerWeek}
                    onChange={(e) => handleTaskChange(task.id, 'hoursPerWeek', Number(e.target.value))}
                    className="w-20 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                    placeholder="0"
                  />
                  <span className="text-sm text-gray-500">hrs/week</span>
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`task-${task.id}`}
                    checked={task.usesAI}
                    onChange={(e) => handleTaskChange(task.id, 'usesAI', e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label htmlFor={`task-${task.id}`} className="ml-2 text-sm text-gray-600">
                    Using AI/Automation
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="includeAISavings"
          checked={includeAISavings}
          onChange={(e) => setIncludeAISavings(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
        />
        <label htmlFor="includeAISavings" className="text-sm text-gray-600">
          Include potential time savings from AI/Automation
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-purple-700 hover:via-indigo-700 hover:to-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Calculate Time Savings
        </button>
      </div>
    </form>
  );
}; 