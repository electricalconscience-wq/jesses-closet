import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-yellow rounded-sm flex items-center justify-center">
                <span className="text-brand-black font-bold text-sm">JC</span>
              </div>
              <span className="font-display text-lg tracking-wide">Jesse&apos;s Closet</span>
            </div>
            <p className="text-sm text-brand-mid leading-relaxed">
              A curated fashion archive inspired by iconic TV streetwear.
              Screen-matched via Spotern with verified purchase links.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-brand-light mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Hoodies', 'Jackets', 'Pants', 'Tees', 'Accessories', 'Shoes'].map((item) => (
                <li key={item}>
                  <Link href={`/shop?category=${item.toLowerCase()}`} className="text-sm text-brand-mid hover:text-brand-yellow transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-brand-light mb-4">Archive</h4>
            <ul className="space-y-2">
              {['All Looks', 'Season 1', 'Desert Era', 'Late Season'].map((item) => (
                <li key={item}>
                  <Link href="/looks" className="text-sm text-brand-mid hover:text-brand-yellow transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-brand-light mb-4">Info</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-brand-mid hover:text-brand-yellow transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-[10px] text-brand-gray leading-relaxed max-w-3xl">
            <span className="text-brand-mid font-mono uppercase tracking-wider">Affiliate Disclosure:</span>{' '}
            Jesse&apos;s Closet is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            We also participate in affiliate programs with eBay, Etsy, and other retailers. Product links on this site may
            earn us a commission at no additional cost to you.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-mid">
            &copy; {new Date().getFullYear()} Jesse&apos;s Closet. An independent fan project. Not officially affiliated with any TV production.
          </p>
          <p className="text-xs text-brand-gray">
            Built with obsessive attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
