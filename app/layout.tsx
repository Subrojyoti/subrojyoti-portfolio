// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css'; // Tailwind CSS and global styles

export const metadata: Metadata = {
  title: 'Subrojyoti Paul | Intelligent Systems Developer',
  description: "Subrojyoti Paul's portfolio showcasing skills in AI, web development, and innovative projects.",
  // You can add more metadata here: openGraph, twitter cards, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"> {/* antialiased for smoother fonts */}
        {children}
      </body>
    </html>
  );
}