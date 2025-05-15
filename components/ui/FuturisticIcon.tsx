// components/ui/FuturisticIcon.tsx
'use client';
import { motion } from 'framer-motion';

interface FuturisticIconProps {
  children: React.ReactNode; // Expects an SVG element or component
  className?: string;
}

const FuturisticIcon: React.FC<FuturisticIconProps> = ({ children, className }) => {
  return (
    <motion.div
      className={`inline-block ${className}`}
      whileHover={{ scale: 1.1, color: 'var(--color-electric-teal)' }} // Example hover
    >
      {children}
    </motion.div>
  );
};

export default FuturisticIcon;