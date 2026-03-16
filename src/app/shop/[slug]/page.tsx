import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Badge from '@/components/Badge';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const sourceLabels: Record<string, string> = {
  amazon: 'Amazon',
  ebay: 'eBay',
  etsy: 'Etsy',
  'brand-site': 'Official Store',
  grailed: 'Grailed',
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();
  const related = getRelatedProducts(product.slug);
  const sourceName = sourceLabels[product.buySource] || 'Store';

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-xs text-brand-mid font-mono">
            <Link href="/" className="hover:text-brand-mesa transition-colors">Home</Link>
            <span className="text-brand-rust">/</span>
            <Link href="/shop" className="hover:text-brand-mesa transition-colors">Shop</Link>
            <span className="text-brand-rust">/</span>
            <span className="text-brand-sand">{product.name}</span>
          </nav>
        </div>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-brand-rust/20 product-image-worn">
                {product.imageUrl ? (
                  <>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain bg-white/5 p-6"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0" style={{
                      background: `linear-gradient(145deg, ${product.colorHex}15 0%, ${product.colorHex}35 40%, ${product.colorHex}10 100%)`,
                    }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: product.colorHex }} />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <p className="text-2xl text-white/10 font-display tracking-[0.3em] uppercase">{product.brand}</p>
                      <p className="text-[10px] text-white/10 font-mono">Screen-Matched Item</p>
                    </div>
                  </>
                )}
                <div className="absolute top-4 left-4">
                  <Badge type={product.matchType} size="md" />
                </div>
                {product.episode && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono text-brand-mesa bg-black/70 px-3 py-1.5 rounded-sm backdrop-blur-sm border border-brand-rust/20">
                      {product.episode}
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-xs tracking-[0.2em] uppercase text-brand-mesa font-mono">
                    {product.brand} / {product.category}
                    {product.era && ` / ${product.era.replace('-', ' ')}`}
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-cream mt-2 mb-2 tracking-wide">{product.name}</h1>
                  {product.episode && (
                    <p className="text-xs text-brand-mesa font-mono mb-4 border border-brand-rust/20 inline-block px-3 py-1 rounded-sm">
                      Spotted in: {product.episode}
                    </p>
                  )}
                  <div className="flex items-center gap-4 mb-6 mt-4">
                    <span className="text-3xl font-mono text-brand-yellow">${product.price}</span>
                    <Badge type={product.matchType} size="md" />
                  </div>
                  <p className="text-sm text-brand-light leading-relaxed mb-6">{product.description}</p>
                </div>

                {/* Why it matches */}
                <div className="bg-brand-charcoal border border-brand-rust/20 rounded-lg p-6 mb-6">
                  <h3 className="text-xs tracking-[0.2em] uppercase text-brand-yellow font-mono mb-3">Why It Matches</h3>
                  <p className="text-sm text-brand-light leading-relaxed">{product.whyItMatches}</p>
                </div>

                {/* Color */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 rounded-full border border-brand-rust/30" style={{ backgroundColor: product.colorHex }} />
                  <span className="text-sm text-brand-sand">{product.colorName}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-brand-sand/60 bg-brand-rust/10 border border-brand-rust/15 px-3 py-1 rounded-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buy CTA */}
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-brand-yellow text-brand-black py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors mb-3 font-display text-lg"
                >
                  BUY ON {sourceName.toUpperCase()} — ${product.price}
                </a>
                <Link
                  href="/shop"
                  className="w-full block text-center border border-brand-rust/30 text-brand-sand py-4 rounded-lg text-sm tracking-wide hover:bg-brand-rust/10 transition-colors font-mono"
                >
                  Back to Shop
                </Link>

                {product.affiliateNote && (
                  <p className="text-[11px] text-brand-mesa mt-4 leading-relaxed border-l-2 border-brand-rust/30 pl-3">
                    {product.affiliateNote}
                  </p>
                )}
                <p className="text-[10px] text-brand-mid mt-3 leading-relaxed">
                  As an Amazon Associate and affiliate partner, Jesse&apos;s Closet earns from qualifying purchases.
                  Links may earn us a commission at no extra cost to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 sm:py-20 border-t border-brand-rust/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-3xl text-brand-cream mb-8 tracking-wide">Complete the Look</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
