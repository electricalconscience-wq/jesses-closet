import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Jesse's Closet — Screen-Matched Streetwear Archive",
  description: 'A curated fashion archive inspired by iconic TV streetwear. Shop screen-matched pieces, inspired alternatives, and budget picks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-brand-black text-brand-cream min-h-screen">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
