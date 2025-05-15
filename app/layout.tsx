// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Tailwind CSS and global styles
import { Inter, Orbitron, Space_Grotesk, Roboto_Mono } from 'next/font/google';
import Footer from '@/components/layout/Footer';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Subrojyoti Paul | Intelligent Systems Developer',
  description: "Subrojyoti Paul's portfolio showcasing skills in AI, web development, and innovative projects.",
  keywords: ['AI Developer', 'Web Development', 'Machine Learning', 'Next.js', 'Framer Motion', 'Portfolio'],
  authors: [{ name: 'Subrojyoti Paul' }],
  icons: {
    icon: '/sp-logo.png', // Link to the new PNG favicon in the public directory
  },
  openGraph: {
    title: 'Subrojyoti Paul | Intelligent Systems Developer',
    description: "Subrojyoti Paul's portfolio showcasing skills in AI, web development, and innovative projects.",
    type: 'website',
  },
  // You can add more metadata here: openGraph, twitter cards, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${spaceGrotesk.variable} ${robotoMono.variable}`}>
      <body className="antialiased bg-space-blue text-text-base-light">
        {children}
        <Footer />
      </body>
    </html>
  );
}