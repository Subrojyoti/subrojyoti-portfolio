// components/sections/AboutSection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-cyber-black text-text-base-light w-full">
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
          The Navigator&apos;s Log // About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-electric-teal shadow-2xl">
              <Image
                src="/images/profile-photo.png"
                alt="Subrojyoti Paul"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="w-full md:w-2/3 font-inter text-lg space-y-6"
          >
            <p>
              Hello! I&apos;m Subrojyoti Paul, an Intelligent Systems Developer with a deep passion for crafting innovative solutions
              that bridge the gap between complex data and human understanding. My journey into the tech world is fueled by a
              Master of Computer Application (MCA) from Tezpur University and a solid foundation in Mathematics from Darrang College.
            </p>
            <p>
              I thrive on transforming challenging problems into elegant, efficient, and user-centric applications. Whether it&apos;s
              developing full-stack web applications, diving into natural language processing, or building AI-driven systems,
              my goal is to leverage technology to create impactful and meaningful experiences.
            </p>
            <p>
              My approach is rooted in continuous learning, meticulous research, and a collaborative spirit. I believe the most
              powerful innovations emerge from a blend of technical expertise and creative thinking. Let&apos;s build something extraordinary together!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;