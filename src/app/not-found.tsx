import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <span className="text-6xl font-mono text-brand-yellow">404</span>
          <h1 className="font-display text-3xl text-brand-cream mt-4 mb-2">Page Not Found</h1>
          <p className="text-sm text-brand-mid mb-8">This page doesn&apos;t exist. Maybe it never did.</p>
          <Link href="/"
            className="inline-flex items-center justify-center bg-brand-yellow text-brand-black px-6 py-3 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
