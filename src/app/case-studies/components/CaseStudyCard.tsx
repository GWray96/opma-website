import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  imageUrl: string
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index: number
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
            {caseStudy.industry}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {caseStudy.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {caseStudy.client}
        </p>
        
        <p className="text-gray-700 mb-4">
          {caseStudy.challenge}
        </p>
        
        <div className="space-y-2 mb-6">
          {caseStudy.results.map((result, i) => (
            <div key={i} className="flex items-start gap-2">
              <svg
                className="w-5 h-5 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{result}</p>
            </div>
          ))}
        </div>
        
        <Link
          href={`/case-studies/${caseStudy.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Read Case Study
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
} 