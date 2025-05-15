// components/sections/projects/ProjectDetailModal.tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { Project } from './ProjectCard'; // Import the Project type
import AnimatedButton from '@/components/ui/AnimatedButton';

// Placeholder icons (replace with actual SVGs or components)
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3H7.5A2.25 2.25 0 015.25 15.75V5.25A2.25 2.25 0 017.5 3h5.25a2.25 2.25 0 012.25 2.25v4.054M1.5 19.5L6 15m0 0l4.5-4.5M6 15l-4.5 4.5M19.5 3L15 7.5m0 0l-4.5 4.5M15 7.5l4.5-4.5" /></svg>; // Simple placeholder

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-space-blue/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose} // Close on backdrop click
        >
          <motion.div
            layoutId={`project-card-${project.id}`} // Match with ProjectCard layoutId
            variants={modalVariants}
            exit="exit"
            className="bg-cyber-black rounded-xl shadow-2xl max-w-3xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-glitch-white hover:text-electric-teal transition-colors text-2xl z-10"
              aria-label="Close project details"
            >
              &times;
            </button>

            <motion.h2 layoutId={`project-title-${project.id}`} className="text-3xl md:text-4xl font-orbitron text-electric-teal mb-4">{project.title}</motion.h2>
            {/* Optional: Image inside modal if different from card */}
            {/* <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
              <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" />
            </div> */}

            <motion.p layoutId={`project-brief-${project.id}`} className="font-inter text-text-base-light text-md mb-6">{project.brief}</motion.p>

            <div className="space-y-4 font-inter text-text-base-light">
              <div><strong className="text-neon-purple">My Role:</strong> {project.details.role}</div>
              <div><strong className="text-neon-purple">The Challenge:</strong> {project.details.challenge}</div>
              <div>
                <strong className="text-neon-purple">The Process:</strong>
                <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                  {project.details.process.map((step, i) => <li key={i}>{step}</li>)}
                </ul>
              </div>
              <div><strong className="text-neon-purple">The Solution:</strong> {project.details.solution}</div>
              {project.details.results && project.details.results.length > 0 && (
                 <div>
                  <strong className="text-neon-purple">Key Results:</strong>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                    {project.details.results.map((result, i) => <li key={i}>{result}</li>)}
                  </ul>
                </div>
              )}
              <div>
                <strong className="text-neon-purple">Key Technologies:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.details.keyTech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-data-stream-grey text-electric-teal text-xs rounded-full font-roboto-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.details.liveLink && (
                <AnimatedButton onClick={() => window.open(project.details.liveLink, '_blank')}>
                  <LinkIcon /> Live Demo
                </AnimatedButton>
              )}
              {project.details.repoLink && (
                <AnimatedButton onClick={() => window.open(project.details.repoLink, '_blank')}>
                  <GithubIcon /> View Code
                </AnimatedButton>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;