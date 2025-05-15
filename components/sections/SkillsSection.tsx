// components/sections/SkillsSection.tsx
'use client';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaReact, FaPython, FaDocker, FaGitAlt, FaAws, FaBrain, FaEye, FaDatabase, FaLightbulb } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFlask, SiMongodb, SiPostgresql, SiRedis, SiTensorflow, SiPytorch, SiFramer, SiMysql, SiCplusplus, SiC } from 'react-icons/si';
// Import other icons as needed

interface Skill {
  name: string;
  level: number; // Kept for now, can be removed if truly not needed for any logic
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai-ml' | 'languages';
  icon?: IconType;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 5, category: 'frontend', icon: FaReact },
  { name: 'Next.js', level: 5, category: 'frontend', icon: SiNextdotjs },
  { name: 'TypeScript', level: 4, category: 'frontend', icon: SiTypescript },
  { name: 'Tailwind CSS', level: 5, category: 'frontend', icon: SiTailwindcss },
  { name: 'Framer Motion', level: 4, category: 'frontend', icon: SiFramer }, // Added icon
  
  // Backend
  { name: 'Flask', level: 4, category: 'backend', icon: SiFlask },
  { name: 'Next.js', level: 5, category: 'backend', icon: SiNextdotjs }, 
  
  // Database
  { name: 'MongoDB', level: 4, category: 'database', icon: SiMongodb },
  { name: 'PostgreSQL', level: 3, category: 'database', icon: SiPostgresql },
  { name: 'Redis', level: 3, category: 'database', icon: SiRedis },
  { name: 'MySQL', level: 3, category: 'database', icon: SiMysql }, // Added icon
  { name: 'Weaviate', level: 3, category: 'database', icon: FaDatabase }, // Changed to FaDatabase
  
  // DevOps
  { name: 'Docker', level: 4, category: 'devops', icon: FaDocker },
  { name: 'Git', level: 5, category: 'devops', icon: FaGitAlt },
  { name: 'AWS', level: 3, category: 'devops', icon: FaAws },
  
  // AI/ML
  { name: 'TensorFlow', level: 4, category: 'ai-ml', icon: SiTensorflow },
  { name: 'PyTorch', level: 3, category: 'ai-ml', icon: SiPytorch },
  { name: 'NLP', level: 4, category: 'ai-ml', icon: FaBrain }, // Added icon
  { name: 'Computer Vision', level: 3, category: 'ai-ml', icon: FaEye }, // Added icon
  { name: 'RAG', level: 4, category: 'ai-ml', icon: FaLightbulb }, // Changed icon to FaLightbulb

  // Programming Languages & Core Tech
  { name: 'C++', level: 4, category: 'languages', icon: SiCplusplus }, // Added icon
  { name: 'C', level: 4, category: 'languages', icon: SiC }, // Added icon
  { name: 'Python', level: 5, category: 'languages', icon: FaPython }, 
  { name: 'SQL', level: 4, category: 'languages', icon: FaDatabase } // Added icon
];

// categoryColors is no longer used for skill display, can be removed if not needed elsewhere
// const categoryColors = { ... };

const categoryTitles = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  database: 'Database & Storage',
  devops: 'DevOps & Tools',
  'ai-ml': 'AI & Machine Learning',
  languages: 'Programming Languages & Core Tech'
};

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const categories = Object.keys(categoryTitles) as (keyof typeof categoryTitles)[];

  return (
    <section id="skills" className="py-20 md:py-32 bg-cyber-black text-text-base-light w-full">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal text-center mb-16"
        >
          Technical Arsenal // Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-data-stream-grey/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-orbitron text-electric-teal mb-6">
                {categoryTitles[category]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center font-roboto-mono text-sm text-text-base-light bg-space-blue/50 px-3 py-1.5 rounded-md transition-colors hover:bg-space-blue/70 hover:text-electric-teal"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * skills.filter(s => s.category === category).indexOf(skill) }}
                      title={skill.name} // Adding title attribute for accessibility on hover
                    >
                      {skill.icon && <skill.icon className="mr-2 text-lg text-electric-teal" aria-hidden="true" />} 
                      {skill.name}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;