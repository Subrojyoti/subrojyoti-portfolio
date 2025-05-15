// components/sections/ContactSection.tsx
'use client';
import { motion } from 'framer-motion';
import ContactForm from './contact/ContactForm'; // Adjust path
import AnimatedButton from '@/components/ui/AnimatedButton';
// import Link from 'next/link'; // Link will likely not be needed if social icons are removed

// Import your actual SVG icon components here
// For now, using placeholder text for icons
// const GithubIcon = () => <span className="text-2xl"> G</span>; // To be removed
// const LinkedInIcon = () => <span className="text-2xl"> L</span>; // To be removed
// const TwitterIcon = () => <span className="text-2xl"> X</span>; // To be removed
const EmailIcon = () => <span className="text-2xl">@</span>;


const ContactSection = () => {
  const email = "subrojyotipaul@gmail.com"; // Your email from resume

  return (
    <section id="contact" className="py-20 md:py-32 bg-cyber-black text-text-base-light w-full">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-orbitron text-electric-teal text-center mb-16"
        >
          Open Channel // Let&apos;s Connect
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <h3 className="font-space-grotesk text-2xl text-neon-purple mb-4">Send me a message:</h3>
            <ContactForm />
          </div>

          <div className="w-full lg:w-1/2 lg:pl-8">
            <h3 className="font-space-grotesk text-2xl text-neon-purple mb-6">Or reach out directly:</h3>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              <a
                href={`mailto:${email}`}
                className="flex items-center p-4 bg-data-stream-grey/30 rounded-lg hover:bg-data-stream-grey/60 transition-colors group"
              >
                <EmailIcon /> {/* Replace with actual icon */}
                <span className="ml-4 font-roboto-mono text-glitch-white group-hover:text-electric-teal">{email}</span>
              </a>

              <div className="flex space-x-6 justify-center md:justify-start mt-6">
                {/* Removed GitHub Link and Icon */}
                {/* Removed LinkedIn Link and Icon */}
                {/* Removed Twitter/X Link and Icon */}
              </div>

              <div className="mt-10 text-center md:text-left">
                <AnimatedButton
                  href="/documents/Subrojyoti_resume.pdf" // Path confirmed correct
                  target="_blank" // Open in new tab
                  rel="noopener noreferrer" // Security for new tab
                  // download prop is removed to prevent direct download
                >
                  Download My Resume
                </AnimatedButton>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;