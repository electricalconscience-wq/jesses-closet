import Link from 'next/link';
import { Product } from '@/types';
import Badge from './Badge';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="card-y2k overflow-hidden">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <p className="font-display text-sm text-white/20 tracking-[0.2em] uppercase">{product.brand}</p>
                <p className="font-pixel text-[10px] text-white/10">SCREEN-MATCHED</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </>
          )}

          {/* Badge */}
          <div className="absolute top-2 left-2">
            <Badge type={product.matchType} />
          </div>

          {/* Episode tag */}
          {product.episode && (
            <div className="absolute top-2 right-2">
              <span className="font-pixel text-[10px] text-brand-yellow bg-black/70 px-2 py-1 border border-brand-yellow/30">
                {product.episode.split('—')[0]?.trim()}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/5 transition-colors flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <span className="font-pixel text-xs tracking-[0.2em] text-brand-black bg-brand-yellow px-4 py-2">
              VIEW DETAILS →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="p-3 border-t border-brand-yellow/10">
          <p className="font-pixel text-[10px] text-brand-yellow tracking-[0.15em] uppercase mb-1">{product.brand}</p>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-sm text-brand-cream group-hover:text-brand-yellow transition-colors line-clamp-2">
              {product.name}
            </h3>
            <span className="font-pixel text-sm text-brand-neon shrink-0">${product.price}</span>
          </div>
          <p className="font-pixel text-[10px] text-brand-mid uppercase">{product.category}</p>
        </div>
      </div>
    </Link>
  );
}
