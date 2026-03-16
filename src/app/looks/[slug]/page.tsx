import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Badge from '@/components/Badge';
import { looks, getLookBySlug } from '@/data/looks';
import { getProductBySlug } from '@/data/products';

export function generateStaticParams() {
  return looks.map((l) => ({ slug: l.slug }));
}

export default function SingleLookPage({ params }: { params: { slug: string } }) {
  const look = getLookBySlug(params.slug);
  if (!look) return notFound();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${look.heroColorFrom}44 0%, ${look.heroColorTo}44 100%)` }} />
          <div className="absolute inset-0 bg-brand-black/60" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-brand-gray mb-8">
              <Link href="/" className="hover:text-brand-light transition-colors">Home</Link>
              <span>/</span>
              <Link href="/looks" className="hover:text-brand-light transition-colors">Looks</Link>
              <span>/</span>
              <span className="text-brand-light">{look.title}</span>
            </nav>
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-light font-mono">{look.era}</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-cream mt-2 mb-2">{look.title}</h1>
            <p className="text-lg text-brand-light font-display italic">{look.subtitle}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {look.tags.map((tag) => (
                <span key={tag} className="text-[10px] text-brand-light bg-white/10 px-3 py-1 rounded-full border border-white/10">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* The Vibe */}
          <section className="mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-yellow font-mono">The Vibe</span>
            <h2 className="font-display text-2xl text-brand-cream mt-2 mb-4">{look.vibe}</h2>
            <p className="text-sm text-brand-light leading-relaxed">{look.intro}</p>
          </section>

          {/* Key Pieces */}
          <section className="mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-yellow font-mono">Key Pieces</span>
            <h2 className="font-display text-2xl text-brand-cream mt-2 mb-6">The Breakdown</h2>
            <div className="space-y-4">
              {look.keyPieces.map((piece, i) => {
                const product = piece.productSlug ? getProductBySlug(piece.productSlug) : null;
                return (
                  <div key={i} className="bg-brand-charcoal border border-white/5 rounded-lg p-5 hover:border-white/10 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-sm font-medium text-brand-cream">{piece.name}</h3>
                          {piece.matchType && <Badge type={piece.matchType} />}
                        </div>
                        <p className="text-xs text-brand-mid leading-relaxed">{piece.description}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        {piece.price && <span className="text-sm font-mono text-brand-light">${piece.price}</span>}
                        {product && (
                          <Link href={`/shop/${product.slug}`}
                            className="text-xs bg-brand-yellow/15 text-brand-yellow border border-brand-yellow/30 px-4 py-2 rounded-full hover:bg-brand-yellow/25 transition-colors">
                            Shop
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Budget Alternatives */}
          <section className="mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-red font-mono">Budget Alternatives</span>
            <h2 className="font-display text-2xl text-brand-cream mt-2 mb-6">Get the Look for Less</h2>
            <div className="space-y-3">
              {look.budgetAlternatives.map((alt, i) => (
                <div key={i} className="bg-brand-dark border border-white/5 rounded-lg p-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm text-brand-cream mb-1">{alt.name}</h3>
                    <p className="text-xs text-brand-mid">{alt.description}</p>
                  </div>
                  {alt.price && <span className="text-sm font-mono text-brand-mid shrink-0">~${alt.price}</span>}
                </div>
              ))}
            </div>
          </section>

          {/* How to Wear It Now */}
          <section className="mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-teal font-mono">Styling Notes</span>
            <h2 className="font-display text-2xl text-brand-cream mt-2 mb-4">How to Wear It Now</h2>
            <p className="text-sm text-brand-light leading-relaxed">{look.howToWearItNow}</p>
          </section>

          <div className="pt-8 border-t border-white/5">
            <Link href="/looks" className="text-sm text-brand-light hover:text-brand-yellow transition-colors">
              &larr; Back to All Looks
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
