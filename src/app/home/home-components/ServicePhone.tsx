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
    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:bg-surface-light group backdrop-blur-sm ${
      isPlaying ? 'text-success bg-white/80' : 'text-neutral bg-white/60'
    }`}
  >
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl shadow-soft">
        {service.icon}
      </div>
      <div>
        <h3 className={`font-jakarta font-medium text-base ${isPlaying ? 'text-success' : 'text-neutral'}`}>
          {service.title}
        </h3>
        <p className="text-sm text-neutral/60">{service.description}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-sm text-neutral/60">{service.duration}</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPlay}
        className={`p-2 rounded-full ${
          isPlaying 
            ? 'bg-success text-white shadow-soft' 
            : 'opacity-0 group-hover:opacity-100 bg-primary/10 text-primary hover:bg-primary/20'
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
    <div className="relative w-full max-w-md mx-auto">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.5, 0.3, 0.5],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 0.9, 1],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl shadow-soft border border-neutral/5"
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between bg-gradient-to-r from-primary to-accent relative overflow-hidden">
          {/* Header Background Effects */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                x: [0, 100, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-1/2 bg-white/10 rotate-12 blur-xl"
            />
          </div>

          {/* Header Content */}
          <div className="flex items-center space-x-4 relative z-10">
            <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors backdrop-blur-sm">
              <FiChevronLeft size={24} />
            </button>
            <div>
              <h2 className="text-xl font-jakarta font-bold text-white">My Collection</h2>
              <p className="text-sm text-white/90">Select a service to learn more</p>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors relative z-10">
            <FiMoreVertical size={24} className="text-white" />
          </button>
        </div>

        {/* Service Tracks */}
        <div className="p-4 bg-white/40 backdrop-blur-md">
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
      </motion.div>
    </div>
  );
}; 