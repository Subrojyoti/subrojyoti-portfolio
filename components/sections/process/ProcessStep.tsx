// components/sections/process/ProcessStep.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Expect an SVG component
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description, icon, isLast }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div className="flex relative pb-12" variants={itemVariants}>
      {!isLast && (
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-neon-purple/50 pointer-events-none"></div>
        </div>
      )}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-electric-teal inline-flex items-center justify-center text-space-blue relative z-10 font-orbitron text-lg">
        {icon || stepNumber}
      </div>
      <div className="flex-grow pl-4">
        <h4 className="font-space-grotesk text-xl text-glitch-white mb-1 tracking-wider">
          STEP {stepNumber}: {title}
        </h4>
        <p className="leading-relaxed font-inter text-text-base-light">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProcessStep;