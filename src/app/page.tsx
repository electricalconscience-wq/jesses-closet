import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import LookCard from '@/components/LookCard';
import Newsletter from '@/components/Newsletter';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedLooks } from '@/data/looks';

const categories = [
  { name: 'Hoodies', slug: 'hoodies', color: '#e8c840', description: 'Oversized. Loud. Iconic.' },
  { name: 'Jackets', slug: 'jackets', color: '#c0392b', description: 'Windbreakers to puffers.' },
  { name: 'Pants', slug: 'pants', color: '#7e9bb5', description: 'Baggy fits only.' },
  { name: 'Tees', slug: 'tees', color: '#333333', description: 'Graphics and basics.' },
  { name: 'Accessories', slug: 'accessories', color: '#c0c0c0', description: 'Beanies, chains, etc.' },
  { name: 'Shoes', slug: 'shoes', color: '#f0f0f0', description: 'Clean kicks.' },
];

const vibes = [
  { name: 'Loud & Proud', description: 'Primary colors, bold graphics, zero subtlety', color: '#e8c840' },
  { name: 'Desert Minimalist', description: 'Earth tones, muted layers, quiet confidence', color: '#c4b9a8' },
  { name: 'Skate Rat', description: 'Beanies, baggy everything, thrift store energy', color: '#6b6b6b' },
  { name: 'Late Night', description: 'Dark layers, silver accents, subdued edge', color: '#3a3a3a' },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredLooks = getFeaturedLooks().slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-yellow/10 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-red/10 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-sand/5 blur-[150px]" />
          </div>
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
            <div className="animate-fade-in">
              <span className="inline-block text-[10px] sm:text-xs tracking-[0.3em] uppercase text-brand-mid font-mono mb-6 border border-white/10 px-4 py-2 rounded-full">
                A Curated Fashion Archive
              </span>
            </div>
            <h1 className="animate-slide-up font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6">
              <span className="text-brand-cream">Jesse&apos;s</span>
              <br />
              <span className="text-gradient">Closet</span>
            </h1>
            <p className="animate-fade-in text-base sm:text-lg text-brand-light max-w-2xl mx-auto leading-relaxed mb-10" style={{ animationDelay: '0.2s' }}>
              Screen-matched streetwear, inspired alternatives, and budget picks.
              Every piece curated from the most iconic casual wardrobe in television history.
            </p>
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
              <Link href="/shop" className="inline-flex items-center justify-center bg-brand-yellow text-brand-black px-8 py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors">
                Shop the Archive
              </Link>
              <Link href="/looks" className="inline-flex items-center justify-center border border-white/20 text-brand-cream px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-white/5 hover:border-white/30 transition-colors">
                Browse Looks
              </Link>
            </div>
            <div className="mt-20 animate-bounce">
              <svg className="w-5 h-5 mx-auto text-brand-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">Categories</span>
                <h2 className="font-display text-3xl sm:text-4xl text-brand-cream mt-2">Shop by Piece</h2>
              </div>
              <Link href="/shop" className="text-sm text-brand-light hover:text-brand-yellow transition-colors hidden sm:block">View All &rarr;</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="group block">
                  <div className="hover-lift aspect-square rounded-lg overflow-hidden relative border border-white/5 hover:border-white/15 transition-colors">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity" style={{ background: `radial-gradient(circle at center, ${cat.color}44 0%, transparent 70%)` }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-10 h-10 rounded-full mb-3 opacity-60 group-hover:opacity-90 transition-opacity" style={{ backgroundColor: cat.color }} />
                      <h3 className="text-sm font-medium text-brand-cream group-hover:text-brand-yellow transition-colors">{cat.name}</h3>
                      <p className="text-[10px] text-brand-mid mt-1">{cat.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 sm:py-28 bg-brand-charcoal/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">Featured</span>
                <h2 className="font-display text-3xl sm:text-4xl text-brand-cream mt-2">Editor&apos;s Picks</h2>
              </div>
              <Link href="/shop" className="text-sm text-brand-light hover:text-brand-yellow transition-colors hidden sm:block">Shop All &rarr;</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Vibe */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">Mood Board</span>
              <h2 className="font-display text-3xl sm:text-4xl text-brand-cream mt-2">Shop by Vibe</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {vibes.map((vibe) => (
                <Link key={vibe.name} href="/shop" className="group block">
                  <div className="hover-lift rounded-lg overflow-hidden border border-white/5 hover:border-white/15 transition-colors">
                    <div className="relative h-48">
                      <div className="absolute inset-0 transition-all duration-500 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${vibe.color}33 0%, ${vibe.color}11 100%)` }} />
                      <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <h3 className="text-lg font-display text-brand-cream group-hover:text-brand-yellow transition-colors">{vibe.name}</h3>
                        <p className="text-xs text-brand-mid mt-1">{vibe.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Looks */}
        <section className="py-20 sm:py-28 bg-brand-charcoal/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">Archive</span>
                <h2 className="font-display text-3xl sm:text-4xl text-brand-cream mt-2">Featured Looks</h2>
                <p className="text-sm text-brand-mid mt-2 max-w-lg">Deep-dives into the most iconic outfits. Broken down piece by piece, with shoppable alternatives at every price point.</p>
              </div>
              <Link href="/looks" className="text-sm text-brand-light hover:text-brand-yellow transition-colors hidden sm:block">All Looks &rarr;</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLooks.map((look) => (
                <LookCard key={look.id} look={look} />
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Banner */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/20 via-brand-red/10 to-brand-sand/20" />
              <div className="relative px-8 sm:px-16 py-16 sm:py-24 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-brand-light font-mono">The Archive</span>
                <h2 className="font-display text-3xl sm:text-5xl text-brand-cream mt-4 mb-4 max-w-3xl mx-auto leading-tight">
                  Every outfit tells a story. We just make it shoppable.
                </h2>
                <p className="text-sm sm:text-base text-brand-light max-w-xl mx-auto mb-8">
                  From screen-matched exact pieces to budget-friendly alternatives, we break down every iconic look so you can wear the vibe without the drama.
                </p>
                <Link href="/looks" className="inline-flex items-center justify-center bg-brand-cream text-brand-black px-8 py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-sand transition-colors">
                  Explore the Archive
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
