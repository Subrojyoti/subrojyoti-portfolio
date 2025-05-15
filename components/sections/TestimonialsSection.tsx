// components/sections/TestimonialsSection.tsx
'use client';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-space-blue text-text-base-light w-full">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal mb-12"
        >
          Voices of Collaboration // Testimonials
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-inter text-lg mb-4">
            My work experience includes a role as an AI Labeller at Borde Inc., where I focused on image annotation and model analysis.
            I'm always eager to collaborate and build strong professional relationships.
          </p>
          <p className="font-inter text-lg text-neon-purple/80">
            Testimonials from future collaborations will be featured here!
          </p>
          {/*
            When you have testimonials, you can use a structure like this:
            <div className="mt-8 bg-data-stream-grey/30 p-6 rounded-lg shadow-lg">
              <p className="italic">"Subrojyoti is a fantastic developer..."</p>
              <p className="mt-4 font-bold text-electric-teal">- Client Name, Company</p>
            </div>
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;