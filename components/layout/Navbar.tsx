// components/layout/Navbar.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedButton from '../ui/AnimatedButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-space-blue/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.a
            href="#"
            className="text-electric-teal font-orbitron text-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SP
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-text-base-light hover:text-electric-teal transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <AnimatedButton
              variant="outline"
              className="ml-4"
              href="/documents/Subrojyoti_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-electric-teal"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const targetId = item.href.substring(1); // Get the ID from href (e.g., "#about" -> "about")
              return (
                <motion.a
                  key={item.name}
                  href={item.href} // Keep href for context, but we prevent its default action
                  className="block px-3 py-2 text-text-base-light hover:text-electric-teal transition-colors"
                  whileHover={{ x: 10 }}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setIsOpen(false);   // Close the menu
                    
                    setTimeout(() => {
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({
                          behavior: 'smooth'
                        });
                      } else {
                        console.warn(`Mobile nav: Element with ID "${targetId}" not found for scrolling.`);
                      }
                    }, 100); // 100ms delay, adjust if needed
                  }}
                >
                  {item.name}
                </motion.a>
              );
            })}
            <div className="px-3 py-2">
              <AnimatedButton
                variant="outline"
                className="w-full"
                href="/documents/Subrojyoti_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </AnimatedButton>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;