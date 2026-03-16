import Link from 'next/link';
import { Look } from '@/types';

export default function LookCard({ look }: { look: Look }) {
  return (
    <Link href={`/looks/${look.slug}`} className="group block">
      <div className="card-y2k overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${look.heroColorFrom} 0%, ${look.heroColorTo} 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            <span className="font-pixel text-[11px] tracking-wider text-white/60 mb-1">
              {look.era}
            </span>
            <h3 className="font-display text-xl tracking-[0.1em] text-white group-hover:text-brand-yellow transition-colors">
              {look.title}
            </h3>
            <p className="font-pixel text-xs text-white/70 mt-1">{look.subtitle}</p>
          </div>
        </div>
        <div className="bg-brand-charcoal p-4 border-t border-brand-yellow/10">
          <p className="font-pixel text-xs text-brand-mid line-clamp-2">{look.vibe}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {look.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="font-pixel text-[10px] text-brand-yellow/60 bg-brand-yellow/5 px-2 py-0.5 border border-brand-yellow/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
