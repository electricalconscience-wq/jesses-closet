import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import LookCard from '@/components/LookCard';
import Newsletter from '@/components/Newsletter';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedLooks } from '@/data/looks';

const categories = [
  { name: 'Hoodies', slug: 'hoodies', color: '#e8c840', count: '9 items', description: '53 hoodies across 62 episodes.' },
  { name: 'Jackets', slug: 'jackets', color: '#8B4513', count: '2 items', description: 'Leather to Carhartt.' },
  { name: 'Pants', slug: 'pants', color: '#7e9bb5', count: '3 items', description: 'Baggy fits only.' },
  { name: 'Tees', slug: 'tees', color: '#c0392b', count: '4 items', description: 'Metal Mulisha to Aoki.' },
  { name: 'Accessories', slug: 'accessories', color: '#CD853F', count: '4 items', description: 'Beanies & chains.' },
  { name: 'Shoes', slug: 'shoes', color: '#f0f0f0', count: '3 items', description: 'Nike. Vans. Done.' },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredLooks = getFeaturedLooks().slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO — Desert Grunge */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Desert sky gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-desert-sky via-brand-black to-brand-charcoal" />
          
          {/* Desert landscape silhouette */}
          <div className="absolute bottom-0 left-0 right-0 h-[40vh]">
            <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
              {/* Mesa/butte silhouettes */}
              <polygon points="0,400 0,280 80,280 120,180 160,180 200,280 300,280 300,400" fill="#1a0f0a" opacity="0.8"/>
              <polygon points="250,400 250,220 290,150 340,120 390,150 430,220 430,400" fill="#1a0f0a" opacity="0.9"/>
              <polygon points="400,400 400,260 500,260 540,190 580,190 620,260 700,260 700,400" fill="#0d0805" opacity="0.7"/>
              <polygon points="650,400 650,240 700,180 760,140 820,180 870,240 870,400" fill="#1a0f0a" opacity="0.85"/>
              <polygon points="850,400 850,270 950,270 1000,200 1050,200 1100,270 1200,270 1200,400" fill="#0d0805" opacity="0.75"/>
              <polygon points="1150,400 1150,230 1200,170 1270,130 1340,170 1390,230 1440,250 1440,400" fill="#1a0f0a" opacity="0.9"/>
              {/* Ground */}
              <rect x="0" y="340" width="1440" height="60" fill="#0d0805" opacity="0.95"/>
            </svg>
          </div>

          {/* Desert ambient glow */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-desert-orange/15 blur-[150px] animate-drift" />
            <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] rounded-full bg-brand-rust/10 blur-[120px] animate-drift" style={{ animationDelay: '-7s' }} />
            <div className="absolute bottom-[30%] left-[40%] w-[600px] h-[300px] rounded-full bg-brand-yellow/8 blur-[180px] animate-shimmer" />
          </div>

          {/* Dust particles */}
          <div className="absolute inset-0 dust-particles opacity-40" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
            <div className="animate-fade-in">
              <span className="inline-block text-[10px] sm:text-xs tracking-[0.4em] uppercase text-brand-mesa font-mono mb-6 border border-brand-rust/30 px-4 py-2 rounded-sm bg-brand-black/50 backdrop-blur-sm">
                Albuquerque, New Mexico
              </span>
            </div>

            <h1 className="animate-slide-up font-display text-7xl sm:text-[10rem] lg:text-[12rem] leading-[0.85] tracking-[0.05em] mb-6">
              <span className="text-brand-cream block">JESSE&apos;S</span>
              <span className="text-gradient block">CLOSET</span>
            </h1>

            <p className="animate-fade-in text-sm sm:text-base text-brand-sand max-w-xl mx-auto leading-relaxed mb-10 font-mono" style={{ animationDelay: '0.2s' }}>
              Every outfit. Every episode. Every brand identified.
              <br />
              <span className="text-brand-mesa">25 screen-matched pieces. Real purchase links.</span>
            </p>

            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center bg-brand-yellow text-brand-black px-8 py-4 rounded-sm text-sm font-bold tracking-[0.15em] hover:bg-brand-amber transition-colors font-display text-lg"
              >
                SHOP THE ARCHIVE
              </Link>
              <Link
                href="/looks"
                className="inline-flex items-center justify-center border border-brand-rust/40 text-brand-sand px-8 py-4 rounded-sm text-sm tracking-[0.1em] hover:bg-brand-rust/10 hover:border-brand-mesa/50 transition-colors font-mono"
              >
                Browse Looks
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 animate-bounce">
              <svg className="w-5 h-5 mx-auto text-brand-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Categories — Grungy grid */}
        <section className="py-20 sm:py-28 border-t border-brand-rust/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rust font-mono">Categories</span>
                <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 tracking-wide">SHOP BY PIECE</h2>
              </div>
              <Link href="/shop" className="text-sm text-brand-mesa hover:text-brand-yellow transition-colors hidden sm:block font-mono tracking-wider">
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="group block">
                  <div className="hover-lift aspect-square rounded-sm overflow-hidden relative border border-brand-rust/15 hover:border-brand-yellow/30 transition-colors bg-brand-charcoal">
                    <div
                      className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity"
                      style={{ background: `radial-gradient(circle at center, ${cat.color}44 0%, transparent 70%)` }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div
                        className="w-8 h-8 rounded-full mb-3 opacity-50 group-hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: cat.color }}
                      />
                      <h3 className="text-base font-display tracking-[0.15em] text-brand-cream group-hover:text-brand-yellow transition-colors uppercase">
                        {cat.name}
                      </h3>
                      <p className="text-[9px] text-brand-mesa mt-1 font-mono">{cat.count}</p>
                      <p className="text-[9px] text-brand-mid mt-0.5">{cat.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 sm:py-28 bg-gradient-to-b from-brand-charcoal/50 to-brand-black border-t border-brand-rust/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rust font-mono">Featured</span>
                <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 tracking-wide">EDITOR&apos;S PICKS</h2>
              </div>
              <Link href="/shop" className="text-sm text-brand-mesa hover:text-brand-yellow transition-colors hidden sm:block font-mono tracking-wider">
                Shop All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Looks */}
        <section className="py-20 sm:py-28 border-t border-brand-rust/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rust font-mono">Archive</span>
                <h2 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 tracking-wide">CURATED LOOKS</h2>
                <p className="text-sm text-brand-mid mt-2 max-w-lg font-mono">
                  Deep-dives into iconic outfits. Broken down piece by piece, with shoppable links at every price point.
                </p>
              </div>
              <Link href="/looks" className="text-sm text-brand-mesa hover:text-brand-yellow transition-colors hidden sm:block font-mono tracking-wider">
                All Looks &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredLooks.map((look) => (
                <LookCard key={look.id} look={look} />
              ))}
            </div>
          </div>
        </section>

        {/* Desert Editorial Banner */}
        <section className="py-20 sm:py-28 border-t border-brand-rust/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-sm overflow-hidden border border-brand-rust/20">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-rust/20 via-brand-desert-orange/15 to-brand-yellow/10" />
              <div className="absolute inset-0 dust-particles opacity-30" />
              <div className="relative px-8 sm:px-16 py-16 sm:py-24 text-center">
                <span className="text-[10px] tracking-[0.4em] uppercase text-brand-mesa font-mono">The Archive</span>
                <h2 className="font-display text-4xl sm:text-6xl text-brand-cream mt-4 mb-4 max-w-3xl mx-auto leading-tight tracking-wide">
                  EVERY OUTFIT TELLS A STORY. WE MAKE IT SHOPPABLE.
                </h2>
                <p className="text-sm text-brand-sand max-w-xl mx-auto mb-8 font-mono">
                  From screen-matched grails to $20 budget picks. 25 verified items across all 5 seasons.
                </p>
                <Link
                  href="/looks"
                  className="inline-flex items-center justify-center bg-brand-cream text-brand-black px-8 py-4 rounded-sm text-sm font-bold tracking-[0.15em] hover:bg-brand-sand transition-colors font-display text-lg"
                >
                  EXPLORE THE ARCHIVE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
