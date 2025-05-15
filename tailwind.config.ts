// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'space-blue': '#0A192F',        // Primary
        'cyber-black': '#0D0D0D',       // Alternative Primary
        'electric-teal': '#00F5D4',     // Secondary
        'neon-purple': '#7B00F5',       // Alternative Secondary
        'cyber-pink': '#FF00AA',        // New Accent
        'glitch-white': '#F0F0F0',      // Accent
        'data-stream-grey': '#3A3A3A',  // Accent
        'text-base-light': '#A8B2D1',   // Lighter grey for body text on dark bg
        'text-heading-light': '#CCD6F6',// Lighter white for headings on dark bg
        'electric-teal-transparent': 'rgba(0, 245, 212, 0.3)', // Adjust alpha as needed
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        inter: ['var(--font-inter)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #00F5D4, 0 0 10px #00F5D4' },
          '50%': { boxShadow: '0 0 20px #00F5D4, 0 0 30px #00F5D4' },
        },
      },
    },
  },
  plugins: [],
};
export default config;