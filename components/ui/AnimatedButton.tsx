// components/ui/AnimatedButton.tsx
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset'; // Only applicable if not an href
  disabled?: boolean;
  href?: string; // Added for link behavior
  target?: string; // Added for link behavior
  rel?: string;    // Added for link behavior
  download?: boolean | string; // Added for download behavior (can be boolean or filename string)
}

const AnimatedButton = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
  download,
}: AnimatedButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-space-grotesk font-medium transition-all duration-300 relative overflow-hidden inline-block text-center'; // Added inline-block and text-center
  
  const variantStyles = {
    primary: 'bg-electric-teal text-space-blue hover:bg-electric-teal-transparent',
    secondary: 'bg-neon-purple text-glitch-white hover:bg-opacity-80',
    outline: 'border-2 border-electric-teal text-electric-teal hover:bg-electric-teal-transparent',
  };

  const commonProps = {
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
    onClick: href ? undefined : onClick, // onClick should not be on the link if href is present
    disabled: href ? undefined : disabled,
  };

  const motionDiv = (
    <motion.div
      className="absolute inset-0 bg-electric-teal opacity-0"
      whileHover={{ opacity: 0.1 }}
      transition={{ duration: 0.2 }}
    />
  );

  if (href) {
    // If it's an external link or a direct file link, use a standard <a> tag
    // For Next.js internal navigation, Link component is preferred but needs to wrap the motion.a or style the Link itself.
    // For simplicity with external PDF, a direct motion.a is fine.
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        download={download}
        {...commonProps}
      >
        {motionDiv}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      {...commonProps}
      // onClick, disabled are already in commonProps but conditionally set
    >
      {motionDiv}
      {children}
    </motion.button>
  );
};

export default AnimatedButton;