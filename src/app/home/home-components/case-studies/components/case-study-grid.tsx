import { CaseStudyCard } from './case-study-card';

interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string;
  results: string[];
  link: string;
}

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

export const CaseStudyGrid = ({ caseStudies }: CaseStudyGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard key={index} {...caseStudy} />
      ))}
    </div>
  );
}; 