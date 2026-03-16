import Link from 'next/link';
import { Product } from '@/types';
import Badge from './Badge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="hover-lift bg-brand-charcoal rounded-lg overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
        <div className="relative aspect-[3/4] overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${product.colorHex}22 0%, ${product.colorHex}44 50%, ${product.colorHex}11 100%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-24 h-24 rounded-full opacity-30 blur-xl"
              style={{ backgroundColor: product.colorHex }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </div>
          <div className="absolute top-3 left-3">
            <Badge type={product.matchType} />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <span className="text-xs tracking-widest uppercase text-white bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
              View Details
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm font-medium text-brand-cream group-hover:text-brand-yellow transition-colors line-clamp-2">
              {product.name}
            </h3>
            <span className="text-sm font-mono text-brand-light shrink-0">${product.price}</span>
          </div>
          <p className="text-xs text-brand-mid capitalize">{product.category}</p>
          {product.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {product.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] text-brand-gray bg-white/5 px-2 py-0.5 rounded">
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
