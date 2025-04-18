import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <main className="w-full min-h-screen pt-16">
      {children}
    </main>
  );
}; 