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

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();
  const related = getRelatedProducts(product);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-xs text-brand-gray">
            <Link href="/" className="hover:text-brand-light transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-brand-light transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-brand-light">{product.name}</span>
          </nav>
        </div>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5">
                <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${product.colorHex}22 0%, ${product.colorHex}44 40%, ${product.colorHex}11 100%)` }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: product.colorHex }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 opacity-40" style={{ backgroundColor: product.colorHex }} />
                    <p className="text-xs text-brand-gray font-mono">Product Image</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4"><Badge type={product.matchType} size="md" /></div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <span className="text-xs tracking-widest uppercase text-brand-mid font-mono capitalize">
                  {product.category}{product.era && ` / ${product.era.replace('-', ' ')}`}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl text-brand-cream mt-2 mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl font-mono text-brand-cream">${product.price}</span>
                  <Badge type={product.matchType} size="md" />
                </div>
                <p className="text-sm text-brand-light leading-relaxed mb-6">{product.description}</p>

                <div className="bg-brand-charcoal border border-white/5 rounded-lg p-6 mb-6">
                  <h3 className="text-xs tracking-widest uppercase text-brand-yellow font-mono mb-3">Why It Matches</h3>
                  <p className="text-sm text-brand-light leading-relaxed">{product.whyItMatches}</p>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 rounded-full border border-white/10" style={{ backgroundColor: product.colorHex }} />
                  <span className="text-sm text-brand-mid">{product.colorName}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-xs text-brand-gray bg-white/5 border border-white/5 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <button className="w-full bg-brand-yellow text-brand-black py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors mb-3">
                  Add to Cart — ${product.price}
                </button>
                <button className="w-full border border-white/20 text-brand-cream py-4 rounded-lg text-sm tracking-wide hover:bg-white/5 transition-colors">
                  Save for Later
                </button>
                <p className="text-[10px] text-brand-gray mt-4 leading-relaxed">
                  This site may contain affiliate links. Purchases through these links support the archive at no extra cost to you. All product recommendations are editorial and independently curated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 sm:py-20 bg-brand-charcoal/30 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-2xl text-brand-cream mb-8">Complete the Look</h2>
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
