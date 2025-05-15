// components/sections/ProjectsSection.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './projects/ProjectCard';
import ProjectDetailModal from './projects/ProjectDetailModal';

const projectsData: Project[] = [
  {
    id: 'research-rover',
    title: 'Research Rover',
    brief: 'A full-stack web app for semantic research paper discovery and analysis, leveraging AI for enhanced understanding.',
    imageUrl: '/images/projects/research-rover-preview.jpg',
    tags: ['Python', 'Flask', 'React', 'AI', 'NLP', 'RAG'],
    details: {
      role: 'Full-Stack Developer',
      challenge: 'Enable researchers to efficiently discover relevant papers and understand complex topics quickly using semantic search and AI-powered Q&A.',
      process: [
        'Requirement gathering and API selection (CORE API, Gemini API).',
        'Backend development with Flask for REST APIs and data processing.',
        'Frontend development with React and Material-UI for a user-friendly interface.',
        'Implementation of semantic search using Sentence Transformers and FAISS.',
        'Integration of a Retrieval-Augmented Generation (RAG) pipeline for Q&A.',
        'Features for metadata extraction, batch PDF management, and CSV export.'
      ],
      solution: 'Developed a platform integrating advanced search capabilities with AI-driven analysis tools to streamline the research workflow, offering features like context-aware recommendations and real-time progress tracking.',
      keyTech: ['Python', 'Flask', 'React', 'Material-UI', 'CORE API', 'Gemini API', 'Sentence Transformers', 'FAISS', 'RAG', 'Git'],
      repoLink: 'https://github.com/Subrojyoti/Research-Rover'
    }
  },
  {
    id: 'news-recommendation',
    title: 'Diversified News Recommendation System',
    brief: 'A system designed to tackle cold start and echo chamber problems in news recommendations using hybrid filtering.',
    imageUrl: '/images/projects/newsrecs-preview.png',
    tags: ['Python', 'Flask', 'Machine Learning', 'Recommendation System', 'Data Analysis'],
    details: {
      role: 'Co-Developer & ML Engineer',
      challenge: 'Address cold start and echo chamber issues in news recommendations by providing diversified yet relevant content to users using the MIND dataset.',
      process: [
        'Dataset analysis (MIND dataset).',
        'Implementation of Collaborative Filtering.',
        'Implementation of Content-Based Filtering.',
        'Development of a Hybrid Model combining both approaches.',
        'Incorporation of a diversity re-ranking function.'
      ],
      solution: 'Built a hybrid recommendation system that balances relevancy and diversity, effectively mitigating cold start and echo chamber challenges.',
      keyTech: ['Python', 'Flask', 'Pandas', 'NumPy', 'Scikit-learn', 'Git'],
      results: [
        'Precision@10: 74%',
        'Recall@10: 88%',
        'NDCG@10: 34%',
        'MRR: 19%',
        'ILS (Diversity): 71%'
      ],
      repoLink: 'https://github.com/Subrojyoti/Diversified-News-Recommender-System'
    }
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-cyber-black text-text-base-light w-full">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal text-center mb-16"
        >
          Chronicles of Innovation // Featured Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;