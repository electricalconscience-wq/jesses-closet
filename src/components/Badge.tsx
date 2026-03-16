import { MatchType } from '@/types';

const badgeStyles: Record<MatchType, string> = {
  exact: 'bg-brand-yellow/20 text-brand-yellow border-brand-yellow/50',
  inspired: 'bg-brand-neon/15 text-brand-neon border-brand-neon/40',
  budget: 'bg-brand-red/15 text-brand-red border-brand-red/40',
};

const badgeLabels: Record<MatchType, string> = {
  exact: '★ EXACT',
  inspired: 'INSPIRED',
  budget: '$ BUDGET',
};

export default function Badge({ type, size = 'sm' }: { type: MatchType; size?: 'sm' | 'md' }) {
  return (
    <span
      className={`inline-flex items-center border font-pixel tracking-wider uppercase ${badgeStyles[type]} ${
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'
      }`}
    >
      {badgeLabels[type]}
    </span>
  );
}
