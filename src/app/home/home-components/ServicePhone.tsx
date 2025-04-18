'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPause, FiChevronLeft, FiMoreVertical } from 'react-icons/fi';

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
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:bg-white/10 group ${
      isPlaying ? 'text-success' : 'text-white'
    }`}
  >
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
        {service.icon}
      </div>
      <div>
        <h3 className={`font-sora font-medium text-base ${isPlaying ? 'text-success' : 'text-white'}`}>
          {service.title}
        </h3>
        <p className="text-sm text-background/60">{service.description}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-background/60">{service.duration}</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPlay}
        className={`p-2 rounded-full ${
          isPlaying 
            ? 'bg-success text-neutral' 
            : 'opacity-0 group-hover:opacity-100 bg-white/10 text-white hover:bg-white/20'
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
      className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #3F8CFF 0%, #A66EFF 100%)',
      }}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-black/20 text-white">
            <FiChevronLeft size={24} />
          </button>
          <div>
            <h2 className="text-xl font-sora font-bold text-white">My Collection</h2>
            <p className="text-sm text-background/80">Select a service to learn more</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-white/10">
          <FiMoreVertical size={24} className="text-white" />
        </button>
      </div>

      {/* Service Tracks */}
      <div className="bg-black/30 backdrop-blur-xl p-4 min-h-[400px]">
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

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </motion.div>
  );
}; 