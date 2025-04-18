'use client'

import React from 'react';
import { FiFolder } from 'react-icons/fi';

interface Category {
  name: string;
  count: number;
  slug: string;
}

const categories: Category[] = [
  { name: "Industry Trends", count: 12, slug: "industry-trends" },
  { name: "Digital Transformation", count: 8, slug: "digital-transformation" },
  { name: "Supply Chain", count: 6, slug: "supply-chain" },
  { name: "Operational Excellence", count: 10, slug: "operational-excellence" },
  { name: "Best Practices", count: 7, slug: "best-practices" },
  { name: "Case Studies", count: 5, slug: "case-studies" }
];

export const BlogCategories = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`/blog/category/${category.slug}`}
            className="flex items-center justify-between text-gray-600 hover:text-blue-600 py-2"
          >
            <div className="flex items-center">
              <FiFolder className="mr-2" />
              <span>{category.name}</span>
            </div>
            <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}; 