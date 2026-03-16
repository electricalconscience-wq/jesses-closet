import Link from 'next/link';
import { Look } from '@/types';

export default function LookCard({ look }: { look: Look }) {
  return (
    <Link href={`/looks/${look.slug}`} className="group block">
      <div className="hover-lift rounded-lg overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-700 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${look.heroColorFrom} 0%, ${look.heroColorTo} 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="text-[10px] tracking-widest uppercase text-white/60 mb-1 font-mono">
              {look.era}
            </span>
            <h3 className="text-xl font-display text-white group-hover:text-brand-yellow transition-colors">
              {look.title}
            </h3>
            <p className="text-sm text-white/70 mt-1">{look.subtitle}</p>
          </div>
        </div>
        <div className="bg-brand-charcoal p-4">
          <p className="text-xs text-brand-mid line-clamp-2">{look.vibe}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {look.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-[10px] text-brand-gray bg-white/5 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
