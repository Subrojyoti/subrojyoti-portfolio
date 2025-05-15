// components/sections/skills/SkillItem.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface SkillItemProps {
  name: string;
  icon?: React.ReactNode; // Expect an SVG component or element
  level?: number; // Optional proficiency level 0-100 for progress bar
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon, level }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-data-stream-grey/30 p-4 rounded-lg shadow-lg hover:shadow-electric-teal/30 transition-shadow duration-300 flex flex-col items-center text-center min-w-[120px] aspect-square justify-center"
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 245, 212, 0.2)" }}
    >
      {icon && <div className="w-10 h-10 mb-2 text-electric-teal">{icon}</div>}
      <span className="font-roboto-mono text-sm text-glitch-white">{name}</span>
      {level !== undefined && (
        <div className="w-full bg-space-blue h-2 rounded-full mt-2 overflow-hidden">
          <motion.div
            className="h-full bg-electric-teal"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default SkillItem;