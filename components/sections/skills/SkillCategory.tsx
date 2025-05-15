// components/sections/skills/SkillCategory.tsx
'use client';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  children: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, children }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h3 className="text-2xl md:text-3xl font-space-grotesk text-neon-purple mb-6 border-b-2 border-neon-purple/50 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {children}
      </div>
    </motion.div>
  );
};

export default SkillCategory;