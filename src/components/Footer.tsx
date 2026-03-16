import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t-2 border-brand-yellow/30">
      {/* Yellow divider */}
      <div className="divider-y2k" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-brand-yellow flex items-center justify-center">
                <span className="text-brand-black font-display font-bold text-base">JC</span>
              </div>
              <span className="font-display text-xl tracking-[0.15em] text-brand-yellow">JESSE&apos;S CLOSET</span>
            </div>
            <p className="font-pixel text-sm text-brand-mid leading-relaxed">
              Screen-matched streetwear archive.
              Every piece Jesse Pinkman wore, identified and shoppable.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-brand-yellow mb-4 border-b border-brand-yellow/20 pb-2">★ SHOP</h4>
            <ul className="space-y-2">
              {['Hoodies', 'Jackets', 'Pants', 'Tees', 'Accessories', 'Shoes'].map((item) => (
                <li key={item}>
                  <Link href={`/shop?category=${item.toLowerCase()}`} className="font-pixel text-sm text-brand-mid hover:text-brand-yellow transition-colors">
                    → {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-brand-yellow mb-4 border-b border-brand-yellow/20 pb-2">★ ARCHIVE</h4>
            <ul className="space-y-2">
              {['All Looks', 'Season 1', 'Desert Era', 'Late Season'].map((item) => (
                <li key={item}>
                  <Link href="/looks" className="font-pixel text-sm text-brand-mid hover:text-brand-yellow transition-colors">
                    → {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-sm tracking-[0.2em] text-brand-yellow mb-4 border-b border-brand-yellow/20 pb-2">★ INFO</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="font-pixel text-sm text-brand-mid hover:text-brand-yellow transition-colors">→ About</Link></li>
              <li><Link href="/contact" className="font-pixel text-sm text-brand-mid hover:text-brand-yellow transition-colors">→ Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 pt-6 border-t border-brand-yellow/10">
          <p className="font-pixel text-xs text-brand-gray leading-relaxed max-w-3xl">
            AFFILIATE DISCLOSURE: Jesse&apos;s Closet is a participant in the Amazon Services LLC Associates Program.
            Product links may earn us a commission at no additional cost to you. We also participate in eBay and Etsy affiliate programs.
          </p>
        </div>

        {/* Bottom — visitor counter easter egg */}
        <div className="mt-8 pt-6 border-t border-brand-yellow/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-pixel text-xs text-brand-mid">
            © {new Date().getFullYear()} JESSE&apos;S CLOSET • AN INDEPENDENT FAN PROJECT • NOT AFFILIATED WITH AMC
          </p>
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] text-brand-gray">VISITORS:</span>
            <span className="font-pixel text-xs text-brand-neon bg-brand-black border border-brand-neon/30 px-2 py-0.5">
              004,208
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
