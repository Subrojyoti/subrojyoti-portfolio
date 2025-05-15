// components/sections/projects/ProjectCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  brief: string;
  imageUrl: string; // Path to image in public folder
  tags: string[];
  details: {
    role: string;
    challenge: string;
    process: string[];
    solution: string;
    keyTech: string[];
    results?: string[]; // Optional
    liveLink?: string;
    repoLink?: string;
  };
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`project-card-${project.id}`} // For shared layout animation
      onClick={onClick}
      className="bg-data-stream-grey/50 rounded-xl overflow-hidden shadow-xl hover:shadow-electric-teal/40 cursor-pointer transition-all duration-300 ease-out group"
      whileHover={{ y: -10, scale: 1.03 }}
    >
      <div className="relative w-full h-56 md:h-64">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-blue/80 via-space-blue/40 to-transparent" />
      </div>
      <div className="p-6">
        <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-orbitron text-electric-teal mb-2">{project.title}</motion.h3>
        <motion.p layoutId={`project-brief-${project.id}`} className="font-inter text-text-base-light text-sm mb-4 h-16 overflow-hidden">
          {project.brief}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map(tag => ( // Show all tags
            <span key={tag} className="px-3 py-1 bg-neon-purple/30 text-electric-teal text-xs rounded-full font-roboto-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;