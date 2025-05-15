// components/sections/ProcessSection.tsx
'use client';
import { motion } from 'framer-motion';
import ProcessStep from './process/ProcessStep'; // Adjust path if necessary

// ACTION: Create actual SVG icons for each step (e.g., LightbulbIcon, CodeIcon etc.)
// and place them in public/icons/process/
const PlaceholderProcessIcon = ({ char }: { char: string }) => (
  <div className="w-full h-full flex items-center justify-center text-lg text-space-blue">{char}</div>
);


const processData = [
  {
    stepNumber: '01',
    title: 'Understand Requirements',
    description: "Deep dive into client needs, project goals, and target audience to lay a solid foundation.",
    icon: <PlaceholderProcessIcon char="U" />
  },
  {
    stepNumber: '02',
    title: 'Research & Discovery',
    description: "Conduct thorough research on industry trends, competitor analysis, and technological feasibility.",
    icon: <PlaceholderProcessIcon char="R" />
  },
  {
    stepNumber: '03',
    title: 'Ideation & Strategy',
    description: "Brainstorm creative solutions, define project architecture, and map out a strategic approach.",
    icon: <PlaceholderProcessIcon char="I" />
  },
  {
    stepNumber: '04',
    title: 'Design & Prototyping',
    description: "Create intuitive UI/UX designs and interactive prototypes, focusing on a futuristic aesthetic and seamless user experience.",
    icon: <PlaceholderProcessIcon char="D" />
  },
  {
    stepNumber: '05',
    title: 'Development & Integration',
    description: "Build robust and scalable solutions using modern technologies, integrating all components efficiently.",
    icon: <PlaceholderProcessIcon char="Dev" />
  },
  {
    stepNumber: '06',
    title: 'Launch & Optimization',
    description: "Deploy the project, monitor performance, and iteratively optimize based on feedback and analytics.",
    icon: <PlaceholderProcessIcon char="L" />
  }
];

const ProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-space-blue text-text-base-light w-full">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal text-center mb-16"
        >
          The Blueprint // How I Work
        </motion.h2>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {processData.map((step, index) => (
            <ProcessStep
              key={step.stepNumber}
              {...step}
              isLast={index === processData.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;