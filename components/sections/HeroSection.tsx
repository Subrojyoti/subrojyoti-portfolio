// components/sections/HeroSection.tsx
'use client';
import { motion } from 'framer-motion';
import AnimatedButton from '../ui/AnimatedButton';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(0,245,212,0.3) 0%, transparent 70%)"
          }}
        />
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6 text-text-heading-light"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            Subrojyoti Paul
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-space-grotesk text-electric-teal mb-8"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            Intelligent Systems Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-text-base-light mb-12 max-w-2xl mx-auto"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
          >
            Architecting tomorrow's intelligent solutions, today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={textVariants}
          >
            <AnimatedButton variant="primary" href="#projects">
              View Projects
            </AnimatedButton>
            <AnimatedButton variant="outline" href="#contact">
              Contact Me
            </AnimatedButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-electric-teal rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-electric-teal rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;