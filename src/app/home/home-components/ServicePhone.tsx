'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPause } from 'react-icons/fi';

interface ServiceTrack {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

const services: ServiceTrack[] = [
  {
    id: '1',
    title: "Build Me a Funnel",
    description: "Sales Pipeline Automation",
    icon: "🎯",
    duration: "2-4 weeks"
  },
  {
    id: '2',
    title: "Create Content for My Brand",
    description: "AI-Powered Content Creation",
    icon: "✍️",
    duration: "Ongoing"
  },
  {
    id: '3',
    title: "Automate My Lead Follow-up",
    description: "Smart Lead Nurturing",
    icon: "🔁",
    duration: "1-2 weeks"
  },
  {
    id: '4',
    title: "Set Up My AI Chatbot",
    description: "24/7 Customer Support",
    icon: "🤖",
    duration: "1 week"
  }
];

const ServiceTrack: React.FC<{ 
  service: ServiceTrack; 
  isPlaying: boolean;
  onPlay: () => void;
}> = ({ service, isPlaying, onPlay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`flex items-center justify-between p-4 rounded-lg mb-2 transition-all duration-300 ${
      isPlaying 
        ? 'bg-white/20 backdrop-blur-md' 
        : 'hover:bg-white/10 backdrop-blur-sm'
    }`}
  >
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl">
        {service.icon}
      </div>
      <div>
        <h3 className={`font-medium ${isPlaying ? 'text-white' : 'text-gray-100'}`}>
          {service.title}
        </h3>
        <p className="text-sm text-gray-300">{service.description}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-400">{service.duration}</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPlay}
        className={`p-2 rounded-full ${
          isPlaying 
            ? 'bg-green-500 text-white' 
            : 'bg-white/20 text-white hover:bg-white/30'
        }`}
      >
        {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
      </motion.button>
    </div>
  </motion.div>
);

export const ServicePhone = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative max-w-sm mx-auto"
    >
      {/* Phone Frame */}
      <div className="relative w-full aspect-[9/19] bg-black rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800">
        {/* Phone Screen */}
        <div className="absolute inset-0 m-2 rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-blue-400">
          {/* Content Area */}
          <div className="relative h-full p-6 overflow-y-auto">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">My Collection</h2>
              <p className="text-gray-300 text-sm">Select a service to learn more</p>
            </div>

            {/* Service Tracks */}
            <div className="space-y-2">
              {services.map((service) => (
                <ServiceTrack
                  key={service.id}
                  service={service}
                  isPlaying={playingId === service.id}
                  onPlay={() => setPlayingId(playingId === service.id ? null : service.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone Glare Effect */}
      <div className="absolute inset-0 rounded-[3rem] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
      </div>
    </motion.div>
  );
}; 