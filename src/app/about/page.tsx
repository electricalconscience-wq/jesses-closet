import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">About</span>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 mb-8">The Archive</h1>
            <div className="space-y-6 text-sm text-brand-light leading-relaxed">
              <p>Jesse&apos;s Closet started as an obsession. Not with the story — everyone&apos;s obsessed with the story — but with the wardrobe. Specifically, with how a fictional character&apos;s clothing became one of the most influential casual style references of the 2000s.</p>
              <p>We&apos;re a curated fashion archive and editorial shop. Every piece on this site has been screen-matched, researched, or inspired by the iconic streetwear looks from one of television&apos;s most visually distinctive characters.</p>
              <p>This isn&apos;t official merchandise. We&apos;re not affiliated with any production company, network, or studio. We&apos;re fans who happen to care a lot about oversized hoodies, baggy denim, and the specific shade of yellow that became a cultural touchstone.</p>
              <div className="bg-brand-charcoal border border-white/5 rounded-lg p-6 my-8">
                <h3 className="text-xs tracking-widest uppercase text-brand-yellow font-mono mb-3">How We Curate</h3>
                <p className="text-sm text-brand-light leading-relaxed mb-4">Every product on the site falls into one of three categories:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30 px-2 py-0.5 rounded-full font-mono shrink-0 mt-0.5">Exact Match</span>
                    <span className="text-xs text-brand-mid">The closest available piece to what appeared on screen.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] bg-brand-teal/15 text-brand-teal border border-brand-teal/30 px-2 py-0.5 rounded-full font-mono shrink-0 mt-0.5">Inspired</span>
                    <span className="text-xs text-brand-mid">Captures the same energy and aesthetic without being an exact match.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] bg-brand-red/15 text-brand-red border border-brand-red/30 px-2 py-0.5 rounded-full font-mono shrink-0 mt-0.5">Budget Pick</span>
                    <span className="text-xs text-brand-mid">Get the look without the price tag. Affordable alternatives that nail the vibe.</span>
                  </div>
                </div>
              </div>
              <p>We believe great style is about understanding what makes an outfit work, not about buying specific brands.</p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="inline-flex items-center justify-center bg-brand-yellow text-brand-black px-6 py-3 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors">Browse the Shop</Link>
              <Link href="/looks" className="inline-flex items-center justify-center border border-white/20 text-brand-cream px-6 py-3 rounded-lg text-sm tracking-wide hover:bg-white/5 transition-colors">Explore the Looks</Link>
            </div>
          </div>
        </section>
        <section className="py-12 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-charcoal/50 border border-white/5 rounded-lg p-6">
              <h3 className="text-xs tracking-widest uppercase text-brand-gray font-mono mb-3">Disclaimer</h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                Jesse&apos;s Closet is an independent fan project and curated fashion archive. This site is not affiliated with, endorsed by, or connected to any television production company, network, studio, actor, or their representatives. All product recommendations are editorial and independently sourced. Some links on this site may be affiliate links.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
