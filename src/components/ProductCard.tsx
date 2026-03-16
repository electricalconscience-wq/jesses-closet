import Link from 'next/link';
import { Product } from '@/types';
import Badge from './Badge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="hover-lift bg-brand-charcoal rounded-lg overflow-hidden border border-brand-rust/20 hover:border-brand-yellow/30 transition-colors">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden product-image-worn">
          {product.imageUrl ? (
            <>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain bg-white/5 transition-transform duration-500 group-hover:scale-105 p-4"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </>
          ) : (
            <>
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: `linear-gradient(145deg, ${product.colorHex}15 0%, ${product.colorHex}35 50%, ${product.colorHex}10 100%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-28 h-28 rounded-full opacity-25 blur-2xl"
                  style={{ backgroundColor: product.colorHex }}
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <p className="text-sm text-white/15 font-display tracking-[0.2em] uppercase">{product.brand}</p>
                <p className="text-[9px] text-white/10 font-mono">Screen-Matched</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </>
          )}

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <Badge type={product.matchType} />
          </div>

          {/* Episode tag */}
          {product.episode && (
            <div className="absolute top-3 right-3">
              <span className="text-[8px] font-mono text-brand-mesa bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                {product.episode.split('—')[0]?.trim()}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white bg-brand-rust/80 px-4 py-2 rounded-sm backdrop-blur-sm font-mono">
              View Details
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-4 border-t border-brand-rust/10">
          <p className="text-[9px] text-brand-mesa font-mono mb-1 uppercase tracking-[0.15em]">{product.brand}</p>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm font-medium text-brand-cream group-hover:text-brand-yellow transition-colors line-clamp-2">
              {product.name}
            </h3>
            <span className="text-sm font-mono text-brand-mesa shrink-0">${product.price}</span>
          </div>
          <p className="text-[10px] text-brand-mid capitalize">{product.category}</p>
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[9px] text-brand-sand/60 bg-brand-rust/10 px-2 py-0.5 rounded-sm border border-brand-rust/10">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
