'use client'

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Future of Operational Excellence",
    excerpt: "Explore the latest trends and technologies shaping the future of operational excellence in business.",
    author: "John Smith",
    date: "2024-03-15",
    category: "Industry Trends",
    imageUrl: "/images/blog-1.jpg",
    link: "#"
  },
  {
    title: "Digital Transformation Strategies",
    excerpt: "Learn about effective digital transformation strategies that drive business growth and innovation.",
    author: "Sarah Johnson",
    date: "2024-03-10",
    category: "Digital Transformation",
    imageUrl: "/images/blog-2.jpg",
    link: "#"
  },
  {
    title: "Supply Chain Optimization Tips",
    excerpt: "Practical tips and best practices for optimizing your supply chain operations.",
    author: "Michael Brown",
    date: "2024-03-05",
    category: "Supply Chain",
    imageUrl: "/images/blog-3.jpg",
    link: "#"
  }
];

export const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Add actual images later */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium text-purple-600">{post.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <a
                    href={post.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Read More
                    <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 