'use client'

import React from 'react';
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Future of Operational Excellence",
    excerpt: "Explore the latest trends and technologies shaping the future of operational excellence in business.",
    content: "Full content here...",
    author: "John Smith",
    date: "2024-03-15",
    category: "Industry Trends",
    imageUrl: "/images/blog-1.jpg",
    readTime: "5 min read"
  },
  {
    id: '2',
    title: "Digital Transformation Strategies",
    excerpt: "Learn about effective digital transformation strategies that drive business growth and innovation.",
    content: "Full content here...",
    author: "Sarah Johnson",
    date: "2024-03-10",
    category: "Digital Transformation",
    imageUrl: "/images/blog-2.jpg",
    readTime: "7 min read"
  },
  {
    id: '3',
    title: "Supply Chain Optimization Tips",
    excerpt: "Practical tips and best practices for optimizing your supply chain operations.",
    content: "Full content here...",
    author: "Michael Brown",
    date: "2024-03-05",
    category: "Supply Chain",
    imageUrl: "/images/blog-3.jpg",
    readTime: "4 min read"
  }
];

export const BlogList = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="h-48 w-full md:w-48 bg-gray-200">
                {/* Add actual images later */}
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-purple-600">{post.category}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FiUser className="mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <a
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read More
                  <FiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}; 