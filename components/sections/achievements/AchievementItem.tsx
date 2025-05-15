// components/sections/achievements/AchievementItem.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface AchievementItemProps {
  title: string;
  issuer?: string;
  date?: string;
  description?: string; // For things like CGPA
  icon?: React.ReactNode; // Expect an SVG component
}

const AchievementItem: React.FC<AchievementItemProps> = ({ title, issuer, date, description, icon }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  // Simple default icon if none provided
  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );


  return (
    <motion.div
      variants={itemVariants}
      className="bg-data-stream-grey/40 p-6 rounded-lg shadow-lg hover:shadow-neon-purple/30 transition-shadow duration-300 flex items-start space-x-4"
      whileHover={{ y: -5 }}
    >
      <div className="flex-shrink-0 text-electric-teal mt-1">
        {icon || defaultIcon}
      </div>
      <div>
        <h4 className="font-space-grotesk text-xl text-glitch-white mb-1">{title}</h4>
        {issuer && <p className="font-inter text-sm text-text-base-light/80">{issuer}</p>}
        {date && <p className="font-roboto-mono text-xs text-neon-purple/80">{date}</p>}
        {description && <p className="font-inter text-sm text-text-base-light mt-1">{description}</p>}
      </div>
    </motion.div>
  );
};

export default AchievementItem;