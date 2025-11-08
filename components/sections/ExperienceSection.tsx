// components/sections/ExperienceSection.tsx
'use client';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const experiences = [
    {
      title: "Backend Engineer Intern",
      company: "Netenrich, Inc",
      companyUrl: "https://www.netenrich.com",
      period: "Aug 2025 - Present",
      description: [
        "Engineered and optimized backend automation workflows, streamlining customer onboarding and data-driven pipelines across microservice-based architectures.",
        "Implemented and integrated unsupervised clustering system into existing AI workflow to group and summarize high-volume security data, reducing LLM token usage and inference cost by 40%",
        "Designed asynchronous, concurrent request-handling mechanisms using Python async paradigms to improve API throughput and responsiveness under high-load scenarios",
        "Collaborated with AI and cloud infrastructure teams to deploy scalable, cost-efficient backend solutions leveraging Python, LLM, and GCP services"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-cyber-black text-text-base-light w-full">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal text-center mb-16"
        >
          Mission Log // Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 border-l-2 border-electric-teal/30 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-electric-teal rounded-full border-4 border-cyber-black"></div>

              <div className="bg-cyber-gray/20 rounded-lg p-6 border border-electric-teal/20 hover:border-electric-teal/40 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-orbitron text-electric-teal mb-2">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-inter text-text-base-light hover:text-electric-teal transition-colors duration-300 underline decoration-electric-teal/50 hover:decoration-electric-teal"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <span className="text-electric-teal font-inter font-medium mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 font-inter text-text-base-light/90">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-electric-teal mr-3 mt-1">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;