import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-yellow rounded-sm flex items-center justify-center">
                <span className="text-brand-black font-bold text-sm">JC</span>
              </div>
              <span className="font-display text-lg tracking-wide">Jesse&apos;s Closet</span>
            </div>
            <p className="text-sm text-brand-mid leading-relaxed">
              A curated fashion archive inspired by iconic TV streetwear. Not affiliated with any production studio or network.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-brand-light mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Hoodies', 'Jackets', 'Pants', 'Tees', 'Accessories'].map((item) => (
                <li key={item}>
                  <Link href={`/shop?category=${item.toLowerCase()}`} className="text-sm text-brand-mid hover:text-brand-yellow transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
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
