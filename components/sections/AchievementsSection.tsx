// components/sections/AchievementsSection.tsx
'use client';
import { motion } from 'framer-motion';
import AchievementItem from './achievements/AchievementItem'; // Adjust path

// ACTION: Create specific icons (e.g., UniversityCapIcon, CertificateIcon)
const PlaceholderAchievementIcon = ({ type }: { type: string }) => (
  <div className="w-8 h-8 bg-electric-teal/20 rounded-full flex items-center justify-center text-lg text-electric-teal">
    {type === "edu" ? "🎓" : "📜"}
  </div>
);


const achievementsData = [
  {
    type: "education",
    title: "Master of Computer Application (MCA)",
    issuer: "Tezpur University, Tezpur, Assam",
    date: "2022 - 2025",
    description: "CGPA: 9.01/10",
    icon: <PlaceholderAchievementIcon type="edu" />
  },
  {
    type: "education",
    title: "Bachelor of Science, Mathematics (Honours)",
    issuer: "Darrang College, Tezpur, Assam",
    date: "2019 - 2022",
    description: "CGPA: 8.55/10",
    icon: <PlaceholderAchievementIcon type="edu" />
  },
  {
    type: "certification",
    title: "Google Data Analytics Certificate",
    issuer: "Coursera & Google",
    icon: <PlaceholderAchievementIcon type="cert" />
  },
  {
    type: "certification",
    title: "Python for Data Science",
    issuer: "Coursera & IBM",
    icon: <PlaceholderAchievementIcon type="cert" />
  },
  {
    type: "course",
    title: "Machine Learning Algorithms",
    description: "Covered Supervised and Unsupervised Learning techniques.",
    icon: <PlaceholderAchievementIcon type="cert" />
  },
  {
    type: "course",
    title: "Basics of Software Design",
    description: "Covered Object-Oriented Programming, Design Patterns and SDLC",
    icon: <PlaceholderAchievementIcon type="cert" />
  }
];

const AchievementsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <section id="achievements" className="py-20 md:py-32 bg-cyber-black text-text-base-light w-full">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal text-center mb-16"
        >
          Digital Laurels // Achievements & Recognition
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievementsData.map((ach, index) => (
            <AchievementItem
              key={index}
              title={ach.title}
              issuer={ach.issuer}
              date={ach.date}
              description={ach.description}
              icon={ach.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;