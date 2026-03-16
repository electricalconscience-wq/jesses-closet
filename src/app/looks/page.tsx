import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LookCard from '@/components/LookCard';
import { looks } from '@/data/looks';

export default function LooksPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">The Archive</span>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 mb-4">Looks</h1>
            <p className="text-sm text-brand-mid max-w-xl">
              Editorial breakdowns of every iconic outfit. Key pieces, budget alternatives, and styling notes for wearing each look now.
            </p>
          </div>
        </section>
        <section className="pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {looks.map((look) => (
                <LookCard key={look.id} look={look} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
