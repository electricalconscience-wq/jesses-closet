import { MatchType } from '@/types';

const badgeStyles: Record<MatchType, string> = {
  exact: 'bg-brand-yellow/15 text-brand-yellow border-brand-yellow/30',
  inspired: 'bg-brand-teal/15 text-brand-teal border-brand-teal/30',
  budget: 'bg-brand-red/15 text-brand-red border-brand-red/30',
};

const badgeLabels: Record<MatchType, string> = {
  exact: 'Exact Match',
  inspired: 'Inspired',
  budget: 'Budget Pick',
};

export default function Badge({ type, size = 'sm' }: { type: MatchType; size?: 'sm' | 'md' }) {
  return (
    <span
      className={`inline-flex items-center border rounded-full font-mono tracking-wider uppercase ${badgeStyles[type]} ${
        size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'
      }`}
    >
      {badgeLabels[type]}
    </span>
  );
}
