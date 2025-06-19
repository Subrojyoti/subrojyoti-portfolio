// components/sections/contact/ContactForm.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '@/components/ui/AnimatedButton';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { env } from '@/lib/env';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      if (!env.FORMSPREE_ENDPOINT) {
        throw new Error('Missing required environment variable: NEXT_PUBLIC_FORMSPREE_ENDPOINT');
      }
      const response = await fetch(env.FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setTimeout(() => setStatus(''), 3000); // Reset status after 3s
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000); // Reset status after 3s
    }
  };

  const inputFieldVariants = {
    focus: {
      borderColor: 'theme(colors.electric-teal)',
      boxShadow: '0 0 0 2px theme(colors.electric-teal-transparent)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-roboto-mono text-electric-teal mb-1">Full Name</label>
        <motion.input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-data-stream-grey/50 border border-data-stream-grey rounded-md text-glitch-white focus:outline-none focus:border-electric-teal transition-colors"
          variants={inputFieldVariants}
          whileFocus="focus"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-roboto-mono text-electric-teal mb-1">Email Address</label>
        <motion.input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-data-stream-grey/50 border border-data-stream-grey rounded-md text-glitch-white focus:outline-none focus:border-electric-teal transition-colors"
          variants={inputFieldVariants}
          whileFocus="focus"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-roboto-mono text-electric-teal mb-1">Message</label>
        <motion.textarea
          name="message"
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-data-stream-grey/50 border border-data-stream-grey rounded-md text-glitch-white focus:outline-none focus:border-electric-teal transition-colors resize-none"
          variants={inputFieldVariants}
          whileFocus="focus"
        />
      </div>
      <div className="text-center">
        <AnimatedButton type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
        </AnimatedButton>
        {status === 'success' && <p className="text-electric-teal mt-2">Thank you! Your message has been sent.</p>}
        {status === 'error' && <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>}

        <div className="mt-8">
          <p className="font-roboto-mono text-sm text-electric-teal mb-3">Or connect with me on:</p>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/Subrojyoti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="w-8 h-8 text-glitch-white hover:text-electric-teal transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/subrojyoti-paul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="w-8 h-8 text-glitch-white hover:text-electric-teal transition-colors" />
            </Link>
            <Link href="https://x.com/SubrojyotiPaul" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
              <FaTwitter className="w-8 h-8 text-glitch-white hover:text-electric-teal transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;