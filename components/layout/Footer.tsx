// components/layout/Footer.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Or FaXTwitter if preferred/available for X

// Placeholder icons (replace with actual SVGs or components)
// const PlaceholderSocialIcon = ({ platform }: { platform: string }) => (
//   <div className="w-6 h-6 bg-data-stream-grey rounded-full flex items-center justify-center text-sm text-glitch-white">
//     {platform.substring(0, 1)}
//   </div>
// );


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-cyber-black text-text-base-light border-t border-data-stream-grey">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="font-inter text-sm mb-4 md:mb-0">
          &copy; {currentYear} Subrojyoti Paul. All rights reserved.
          <br />
          Crafted with Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com/Subrojyoti" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-glitch-white hover:text-electric-teal transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/subrojyoti-paul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-glitch-white hover:text-electric-teal transition-colors" />
          </Link>
          <Link href="https://x.com/SubrojyotiPaul" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <FaTwitter className="w-6 h-6 text-glitch-white hover:text-electric-teal transition-colors" /> {/* Or FaXTwitter */}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;