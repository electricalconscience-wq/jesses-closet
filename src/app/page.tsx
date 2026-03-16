import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import LookCard from '@/components/LookCard';
import Newsletter from '@/components/Newsletter';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedLooks } from '@/data/looks';
import { getAllProducts } from '@/data/products';

const categories = [
  { name: 'Hoodies', slug: 'hoodies', color: '#e8c840', count: '9', icon: '🧥' },
  { name: 'Jackets', slug: 'jackets', color: '#8B4513', count: '2', icon: '🧥' },
  { name: 'Pants', slug: 'pants', color: '#7e9bb5', count: '3', icon: '👖' },
  { name: 'Tees', slug: 'tees', color: '#c0392b', count: '4', icon: '👕' },
  { name: 'Accessories', slug: 'accessories', color: '#CD853F', count: '4', icon: '🧢' },
  { name: 'Shoes', slug: 'shoes', color: '#f0f0f0', count: '3', icon: '👟' },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredLooks = getFeaturedLooks().slice(0, 3);
  const allProducts = getAllProducts();

  // Get products that have images for the showcase
  const productsWithImages = allProducts.filter(p => p.imageUrl);

  return (
    <>
      <Navbar />
      <main>
        {/* ===== HERO — Full-bleed desert photo + massive type ===== */}
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          {/* Real desert photo background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1605751216159-fc4057eba116?w=1920&q=80&auto=format"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-black" />
            <div className="absolute inset-0 bg-brand-black/30" />
          </div>

          {/* Desert ambient glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-desert-orange/20 blur-[150px] animate-drift" />
            <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full bg-brand-yellow/15 blur-[120px] animate-drift" style={{ animationDelay: '-7s' }} />
          </div>

          {/* Dust particles */}
          <div className="absolute inset-0 dust-particles opacity-30" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-32">
            <div className="animate-fade-in">
              <span className="inline-block text-[10px] sm:text-xs tracking-[0.5em] uppercase text-brand-mesa font-mono mb-8 border border-brand-rust/40 px-5 py-2 rounded-sm bg-black/40 backdrop-blur-sm">
                Albuquerque, New Mexico &mdash; 2008&ndash;2013
              </span>
            </div>

            <h1 className="animate-slide-up font-display leading-[0.85] mb-8">
              <span className="text-brand-cream block text-7xl sm:text-[10rem] lg:text-[14rem] tracking-[0.08em] drop-shadow-[0_4px_60px_rgba(232,200,64,0.15)]">JESSE&apos;S</span>
              <span className="text-gradient block text-6xl sm:text-[8rem] lg:text-[11rem] tracking-[0.12em]">CLOSET</span>
            </h1>

            <p className="animate-fade-in text-sm sm:text-base text-brand-sand/90 max-w-lg mx-auto leading-relaxed mb-12 font-mono" style={{ animationDelay: '0.2s' }}>
              Every hoodie. Every beanie. Every pair of Dickies.<br />
              <span className="text-brand-yellow">25 screen-matched pieces</span> from all 5 seasons of Breaking Bad.
            </p>

            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center bg-brand-yellow text-brand-black px-10 py-4 rounded-sm text-lg font-bold tracking-[0.15em] hover:bg-brand-amber transition-all hover:scale-105 font-display shadow-[0_0_40px_rgba(232,200,64,0.2)]"
              >
                SHOP THE ARCHIVE
              </Link>
              <Link
                href="/looks"
                className="inline-flex items-center justify-center border border-brand-rust/50 text-brand-sand px-10 py-4 rounded-sm text-sm tracking-[0.15em] hover:bg-brand-rust/15 hover:border-brand-mesa/60 transition-all font-mono"
              >
                Browse Looks
              </Link>
            </div>

            {/* Stats bar */}
            <div className="animate-fade-in mt-16 flex items-center justify-center gap-8 sm:gap-12 text-center" style={{ animationDelay: '0.6s' }}>
              <div>
                <div className="text-2xl sm:text-3xl font-display text-brand-yellow tracking-wider">25</div>
                <div className="text-[9px] font-mono text-brand-mid uppercase tracking-[0.2em]">Items</div>
              </div>
              <div className="w-px h-8 bg-brand-rust/30" />
              <div>
                <div className="text-2xl sm:text-3xl font-display text-brand-yellow tracking-wider">62</div>
                <div className="text-[9px] font-mono text-brand-mid uppercase tracking-[0.2em]">Episodes</div>
              </div>
              <div className="w-px h-8 bg-brand-rust/30" />
              <div>
                <div className="text-2xl sm:text-3xl font-display text-brand-yellow tracking-wider">5</div>
                <div className="text-[9px] font-mono text-brand-mid uppercase tracking-[0.2em]">Seasons</div>
              </div>
              <div className="w-px h-8 bg-brand-rust/30" />
              <div>
                <div className="text-2xl sm:text-3xl font-display text-brand-yellow tracking-wider">15+</div>
                <div className="text-[9px] font-mono text-brand-mid uppercase tracking-[0.2em]">Brands</div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <svg className="w-5 h-5 mx-auto text-brand-rust/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* ===== PRODUCT IMAGE SHOWCASE — Scrolling collage ===== */}
        {productsWithImages.length > 0 && (
          <section className="py-12 bg-brand-charcoal/80 border-y border-brand-rust/15 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rust font-mono">Real Products</span>
              <h2 className="font-display text-2xl sm:text-3xl text-brand-cream mt-1 tracking-wide">WHAT&apos;S IN THE CLOSET</h2>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {productsWithImages.map((product) => (
                <Link key={product.id} href={`/shop/${product.slug}`} className="group shrink-0 snap-start">
                  <div className="w-44 sm:w-52 bg-brand-charcoal border border-brand-rust/20 rounded-sm overflow-hidden hover:border-brand-yellow/30 transition-colors">
                    <div className="aspect-square relative overflow-hidden bg-white/5">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 border-t border-brand-rust/10">
                      <p className="text-[9px] text-brand-mesa font-mono uppercase tracking-wider">{product.brand}</p>
                      <p className="text-xs text-brand-cream line-clamp-2 mt-0.5">{product.name}</p>
                      <p className="text-xs font-mono text-brand-yellow mt-1">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===== CATEGORIES — Desert grid ===== */}
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
                      style={{ background: `radial-gradient(circle at center, ${cat.color}55 0%, transparent 70%)` }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-3xl mb-2 opacity-60 group-hover:opacity-90 transition-opacity group-hover:scale-110 transform duration-300">
                        {cat.icon}
                      </div>
                      <h3 className="text-base font-display tracking-[0.15em] text-brand-cream group-hover:text-brand-yellow transition-colors uppercase">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] text-brand-mesa mt-1 font-mono">{cat.count} items</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURED PRODUCTS ===== */}
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

        {/* ===== BREAKING BAD TIMELINE ===== */}
        <section className="py-20 sm:py-28 border-t border-brand-rust/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1679969989197-28ccc4f0384c?w=1920&q=60&auto=format"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-brand-black/80" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rust font-mono">The Evolution</span>
            <h2 className="font-display text-4xl sm:text-6xl text-brand-cream mt-2 mb-12 tracking-wide">STYLE TIMELINE</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
              {[
                { season: 'S1', year: '2008', vibe: 'Loud & Reckless', desc: 'Oversized hoodies, Affliction tees, baggy Levi\'s', color: '#e8c840' },
                { season: 'S2', year: '2009', vibe: 'Peak Streetwear', desc: 'Volcom, SRH, Grenade — action sport brands everywhere', color: '#CC5500' },
                { season: 'S3', year: '2010', vibe: 'Money Era', desc: 'Cuban chains, cleaner fits, more confident', color: '#c0392b' },
                { season: 'S4', year: '2011', vibe: 'Dark Turn', desc: 'Black leather, Dim Mak tees, darker palette', color: '#6b6b6b' },
                { season: 'S5', year: '2012-13', vibe: 'The End', desc: 'Stripped back, workwear, Carhartt essentials', color: '#8B4513' },
              ].map((s) => (
                <div key={s.season} className="group">
                  <div className="w-full aspect-[3/4] rounded-sm border border-brand-rust/20 bg-brand-charcoal/50 flex flex-col items-center justify-center p-4 hover:border-brand-yellow/30 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle, ${s.color} 0%, transparent 70%)` }} />
                    <div className="relative z-10">
                      <div className="font-display text-4xl tracking-wider mb-1" style={{ color: s.color }}>{s.season}</div>
                      <div className="text-[9px] font-mono text-brand-mid mb-3">{s.year}</div>
                      <div className="text-sm font-display text-brand-cream tracking-wider uppercase mb-2">{s.vibe}</div>
                      <div className="text-[10px] font-mono text-brand-mid leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURED LOOKS ===== */}
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

        {/* ===== BRAND WALL ===== */}
        <section className="py-16 bg-brand-charcoal/30 border-t border-brand-rust/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rust font-mono">Brands Identified</span>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {['Volcom', 'Carhartt', 'Nike', 'Vans', 'Dickies', 'Levi\'s', 'SRH', 'Metal Mulisha', 'Affliction', 'Grenade', 'Champion', 'Kenpo', 'Steve Aoki', 'Tre Vero'].map((brand) => (
                <span key={brand} className="text-lg sm:text-xl font-display tracking-[0.15em] text-brand-mid/40 hover:text-brand-yellow/70 transition-colors uppercase cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DESERT EDITORIAL BANNER ===== */}
        <section className="py-20 sm:py-28 border-t border-brand-rust/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1746673855384-610f90fb8d0e?w=1920&q=60&auto=format"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand-mesa font-mono">The Archive</span>
            <h2 className="font-display text-5xl sm:text-7xl text-brand-cream mt-4 mb-6 leading-tight tracking-wide">
              EVERY OUTFIT TELLS A STORY
            </h2>
            <p className="text-sm sm:text-base text-brand-sand/80 max-w-xl mx-auto mb-10 font-mono leading-relaxed">
              From screen-matched grails to $10 budget picks. 25 verified items across all 5 seasons of Breaking Bad.
              Real brands. Real episodes. Real purchase links.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center bg-brand-yellow text-brand-black px-10 py-4 rounded-sm text-lg font-bold tracking-[0.15em] hover:bg-brand-amber transition-all font-display"
              >
                SHOP ALL 25 ITEMS
              </Link>
              <Link
                href="/looks"
                className="inline-flex items-center justify-center border border-brand-rust/50 text-brand-sand px-10 py-4 rounded-sm text-sm tracking-[0.15em] hover:bg-brand-rust/15 transition-all font-mono"
              >
                Explore Looks
              </Link>
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
