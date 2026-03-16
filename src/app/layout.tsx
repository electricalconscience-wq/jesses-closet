import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Jesse's Closet — Screen-Matched Streetwear from Breaking Bad",
  description: 'Every outfit Jesse Pinkman wore, identified and shoppable. Real brands, real episodes, real purchase links.',
  keywords: ['jesse pinkman', 'breaking bad', 'streetwear', 'screen-matched', 'volcom', 'carhartt', 'spotern'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-brand-black text-brand-cream min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
