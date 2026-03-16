import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import LookCard from '@/components/LookCard';
import Newsletter from '@/components/Newsletter';
import { getFeaturedProducts, getAllProducts } from '@/data/products';
import { getFeaturedLooks } from '@/data/looks';

const categories = [
  { name: 'HOODIES', slug: 'hoodies', count: '9', color: '#FFD700' },
  { name: 'JACKETS', slug: 'jackets', count: '2', color: '#CC5500' },
  { name: 'PANTS', slug: 'pants', count: '3', color: '#7e9bb5' },
  { name: 'TEES', slug: 'tees', count: '4', color: '#FF1744' },
  { name: 'ACCESSORIES', slug: 'accessories', count: '4', color: '#39FF14' },
  { name: 'SHOES', slug: 'shoes', count: '3', color: '#FF1493' },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const featuredLooks = getFeaturedLooks().slice(0, 3);
  const allProducts = getAllProducts();
  const productsWithImages = allProducts.filter(p => p.imageUrl);

  return (
    <>
      <Navbar />
      <main className="pt-[calc(28px+56px)]">

        {/* ===== HERO — Desert photo + massive Y2K type ===== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Desert photo bg */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1605751216159-fc4057eba116?w=1920&q=80&auto=format"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-black" />
          </div>

          {/* Glow blobs */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-brand-yellow/20 blur-[120px] animate-drift" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-brand-neon/10 blur-[100px] animate-drift" style={{ animationDelay: '-7s' }} />
          </div>

          <div className="absolute inset-0 dust-particles opacity-20" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            {/* Location tag */}
            <div className="animate-fade-in mb-8">
              <span className="inline-block font-pixel text-sm tracking-[0.3em] text-brand-yellow border-2 border-brand-yellow/50 px-5 py-2 bg-black/60 backdrop-blur-sm">
                ★ ALBUQUERQUE, NEW MEXICO ★ 2008–2013 ★
              </span>
            </div>

            {/* Title — BIG */}
            <h1 className="animate-slide-up mb-6">
              <span className="font-display text-brand-cream block text-8xl sm:text-[11rem] lg:text-[15rem] leading-[0.8] tracking-[0.08em] neon-glow" style={{ animation: 'flicker 3s ease-in-out infinite' }}>
                JESSE&apos;S
              </span>
              <span className="font-display text-gradient block text-7xl sm:text-[9rem] lg:text-[12rem] leading-[0.85] tracking-[0.12em]">
                CLOSET
              </span>
            </h1>

            {/* Tagline */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="font-pixel text-lg sm:text-xl text-brand-cream/80 max-w-lg mx-auto leading-relaxed mb-2">
                Every hoodie. Every beanie. Every pair of Dickies.
              </p>
              <p className="font-pixel text-base text-brand-yellow">
                25 screen-matched pieces from Breaking Bad
              </p>
            </div>

            {/* CTA buttons */}
            <div className="animate-fade-in flex flex-col sm:flex-row gap-3 justify-center mt-10" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/shop"
                className="font-display text-xl tracking-[0.2em] bg-brand-yellow text-brand-black px-10 py-4 hover:bg-brand-neon transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.25)]"
              >
                ★ SHOP THE ARCHIVE ★
              </Link>
              <Link
                href="/looks"
                className="font-display text-lg tracking-[0.2em] border-2 border-brand-yellow/50 text-brand-yellow px-10 py-4 hover:bg-brand-yellow/10 hover:border-brand-yellow transition-all"
              >
                BROWSE LOOKS
              </Link>
            </div>

            {/* Stats row */}
            <div className="animate-fade-in mt-14 inline-flex items-center gap-0 border-2 border-brand-yellow/30 bg-black/50 backdrop-blur-sm" style={{ animationDelay: '0.6s' }}>
              {[
                { num: '25', label: 'ITEMS' },
                { num: '62', label: 'EPISODES' },
                { num: '5', label: 'SEASONS' },
                { num: '15+', label: 'BRANDS' },
              ].map((stat, i) => (
                <div key={stat.label} className={`px-5 sm:px-8 py-3 text-center ${i > 0 ? 'border-l-2 border-brand-yellow/30' : ''}`}>
                  <div className="font-display text-2xl sm:text-3xl text-brand-yellow tracking-wider">{stat.num}</div>
                  <div className="font-pixel text-[10px] text-brand-mid tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PRODUCT IMAGE STRIP — horizontal scroll ===== */}
        {productsWithImages.length > 0 && (
          <section className="border-y-2 border-brand-yellow/30 bg-brand-charcoal relative overflow-hidden">
            {/* Section header */}
            <div className="bg-brand-yellow/10 border-b border-brand-yellow/20 px-4 py-3 flex items-center justify-between">
              <h2 className="font-display text-lg tracking-[0.2em] text-brand-yellow">★ WHAT&apos;S IN THE CLOSET</h2>
              <span className="font-pixel text-xs text-brand-mid">{allProducts.length} ITEMS</span>
            </div>
            <div className="flex gap-0 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
              {productsWithImages.map((product) => (
                <Link key={product.id} href={`/shop/${product.slug}`} className="group shrink-0 border-r border-brand-yellow/10">
                  <div className="w-40 sm:w-48 bg-brand-charcoal hover:bg-brand-dark transition-colors">
                    <div className="aspect-square relative overflow-hidden bg-white/5 border-b border-brand-yellow/10">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-pixel text-[10px] text-brand-yellow tracking-wider">{product.brand}</p>
                      <p className="text-xs text-brand-cream line-clamp-2 mt-0.5">{product.name}</p>
                      <p className="font-pixel text-sm text-brand-neon mt-1">${product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ===== CATEGORIES — bold Y2K grid ===== */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-yellow" />
                <h2 className="font-display text-3xl sm:text-4xl text-brand-yellow tracking-[0.15em]">SHOP BY PIECE</h2>
              </div>
              <Link href="/shop" className="font-pixel text-sm text-brand-yellow hover:text-brand-neon transition-colors">
                VIEW ALL →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {categories.map((cat) => (
                <Link key={cat.slug} href={`/shop?category=${cat.slug}`} className="group block">
                  <div className="card-y2k aspect-square flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: cat.color }} />
                    <h3 className="font-display text-base sm:text-lg tracking-[0.2em] group-hover:text-brand-yellow transition-colors" style={{ color: cat.color }}>
                      {cat.name}
                    </h3>
                    <p className="font-pixel text-xs text-brand-mid mt-2">{cat.count} ITEMS</p>
                    <div className="mt-3 w-8 h-0.5" style={{ background: cat.color, opacity: 0.4 }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== YELLOW DIVIDER ===== */}
        <div className="divider-y2k" />

        {/* ===== FEATURED PRODUCTS ===== */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-charcoal/30 to-brand-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-yellow" />
                <h2 className="font-display text-3xl sm:text-4xl text-brand-yellow tracking-[0.15em]">EDITOR&apos;S PICKS</h2>
              </div>
              <Link href="/shop" className="font-pixel text-sm text-brand-yellow hover:text-brand-neon transition-colors">
                SHOP ALL →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== YELLOW DIVIDER ===== */}
        <div className="divider-y2k" />

        {/* ===== STYLE TIMELINE — season-by-season ===== */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1679969989197-28ccc4f0384c?w=1920&q=60&auto=format"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-8"
            />
            <div className="absolute inset-0 bg-brand-black/90" />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl sm:text-6xl text-brand-yellow tracking-[0.15em] neon-glow">STYLE TIMELINE</h2>
              <p className="font-pixel text-sm text-brand-mid mt-2">HOW JESSE&apos;S WARDROBE EVOLVED ACROSS 5 SEASONS</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {[
                { s: 'S1', yr: '2008', vibe: 'LOUD & RECKLESS', desc: 'Oversized hoodies, Affliction tees, baggy Levi\'s', c: '#FFD700' },
                { s: 'S2', yr: '2009', vibe: 'PEAK STREETWEAR', desc: 'Volcom, SRH, Grenade — action sports everywhere', c: '#CC5500' },
                { s: 'S3', yr: '2010', vibe: 'MONEY ERA', desc: 'Cuban chains, cleaner fits, more confident', c: '#FF1744' },
                { s: 'S4', yr: '2011', vibe: 'DARK TURN', desc: 'Black leather, Dim Mak tees, darker palette', c: '#8B4513' },
                { s: 'S5', yr: '2012', vibe: 'THE END', desc: 'Stripped back, Carhartt workwear essentials', c: '#6b6b6b' },
              ].map((item) => (
                <div key={item.s} className="card-y2k p-5 text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: item.c }} />
                  <div className="font-display text-5xl tracking-wider mb-1" style={{ color: item.c }}>{item.s}</div>
                  <div className="font-pixel text-xs text-brand-mid mb-3">{item.yr}</div>
                  <div className="font-display text-sm tracking-[0.15em] text-brand-cream mb-2">{item.vibe}</div>
                  <div className="font-pixel text-xs text-brand-mid leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== YELLOW DIVIDER ===== */}
        <div className="divider-y2k" />

        {/* ===== CURATED LOOKS ===== */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-brand-yellow" />
                <h2 className="font-display text-3xl sm:text-4xl text-brand-yellow tracking-[0.15em]">CURATED LOOKS</h2>
              </div>
              <Link href="/looks" className="font-pixel text-sm text-brand-yellow hover:text-brand-neon transition-colors">
                ALL LOOKS →
              </Link>
            </div>
            <p className="font-pixel text-sm text-brand-mid mb-8 max-w-xl">
              DEEP-DIVES INTO ICONIC OUTFITS. BROKEN DOWN PIECE BY PIECE, WITH SHOPPABLE LINKS AT EVERY PRICE POINT.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredLooks.map((look) => (
                <LookCard key={look.id} look={look} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== BRAND WALL — all 14 brands ===== */}
        <section className="py-12 border-y-2 border-brand-yellow/20 bg-brand-charcoal/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="font-pixel text-xs text-brand-mid tracking-[0.3em] mb-6">★ BRANDS IDENTIFIED ★</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {['VOLCOM', 'CARHARTT', 'NIKE', 'VANS', 'DICKIES', "LEVI'S", 'SRH', 'METAL MULISHA', 'AFFLICTION', 'GRENADE', 'CHAMPION', 'KENPO', 'STEVE AOKI', 'TRE VERO'].map((brand) => (
                <span key={brand} className="font-display text-lg sm:text-xl tracking-[0.2em] text-brand-mid/30 hover:text-brand-yellow transition-colors cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA — desert banner ===== */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1746673855384-610f90fb8d0e?w=1920&q=60&auto=format"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-brand-black/85" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-5xl sm:text-7xl text-brand-yellow tracking-[0.1em] mb-4 neon-glow">
              EVERY OUTFIT.
            </h2>
            <h2 className="font-display text-5xl sm:text-7xl text-brand-cream tracking-[0.1em] mb-6">
              EVERY STORY.
            </h2>
            <p className="font-pixel text-base text-brand-mid max-w-xl mx-auto mb-10 leading-relaxed">
              FROM SCREEN-MATCHED GRAILS TO $10 BUDGET PICKS. 25 VERIFIED ITEMS ACROSS ALL 5 SEASONS. REAL BRANDS. REAL EPISODES. REAL PURCHASE LINKS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/shop"
                className="font-display text-xl tracking-[0.2em] bg-brand-yellow text-brand-black px-10 py-4 hover:bg-brand-neon transition-all shadow-[0_0_30px_rgba(255,215,0,0.2)]"
              >
                ★ SHOP ALL 25 ITEMS ★
              </Link>
              <Link
                href="/looks"
                className="font-display text-lg tracking-[0.2em] border-2 border-brand-yellow/50 text-brand-yellow px-10 py-4 hover:bg-brand-yellow/10 transition-all"
              >
                EXPLORE LOOKS
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
