// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0A192F',        // Primary
        'cyber-black': '#0D0D0D',       // Alternative Primary
        'electric-teal': '#00F5D4',     // Secondary
        'neon-purple': '#7B00F5',       // Alternative Secondary
        'glitch-white': '#F0F0F0',      // Accent
        'data-stream-grey': '#3A3A3A',  // Accent
        'text-base-light': 'rgb(229 231 235)',   // Lighter grey for body text on dark bg
        'text-heading-light': 'rgb(249 250 251)',// Lighter white for headings on dark bg
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'], // Ensure quotes if font name has space
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      animation: { // Example for custom animations if needed later
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
      keyframes: { // Example
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