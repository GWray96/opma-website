import { FAQItem } from './faq-item';
import { FAQ } from './data/home-faqs';

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQ[];
  className?: string;
}

export const FAQSection = ({ title, description, faqs, className = '' }: FAQSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}; 