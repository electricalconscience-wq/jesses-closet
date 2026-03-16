'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Category, MatchType } from '@/types';

const categories: { label: string; value: Category | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Hoodies', value: 'hoodies' },
  { label: 'Jackets', value: 'jackets' },
  { label: 'Pants', value: 'pants' },
  { label: 'Tees', value: 'tees' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Shoes', value: 'shoes' },
];

const matchTypes: { label: string; value: MatchType | 'all' }[] = [
  { label: 'All Types', value: 'all' },
  { label: 'Exact Match', value: 'exact' },
  { label: 'Inspired', value: 'inspired' },
  { label: 'Budget Pick', value: 'budget' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name', value: 'name' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeMatch, setActiveMatch] = useState<MatchType | 'all'>('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') result = result.filter((p) => p.category === activeCategory);
    if (activeMatch !== 'all') result = result.filter((p) => p.matchType === activeMatch);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q)) || p.category.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return result;
  }, [activeCategory, activeMatch, sortBy, searchQuery]);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">Collection</span>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 mb-4">The Shop</h1>
            <p className="text-sm text-brand-mid max-w-xl">Screen-matched pieces, inspired alternatives, and budget picks. Every item curated to capture the aesthetic.</p>
          </div>
        </section>

        <section className="border-y border-white/5 bg-brand-charcoal/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="mb-6">
              <div className="relative max-w-md">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search pieces..."
                  className="w-full bg-brand-dark border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-brand-cream placeholder:text-brand-gray focus:outline-none focus:border-brand-yellow/50 transition-colors" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((cat) => (
                <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
                  className={`text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-colors ${
                    activeCategory === cat.value ? 'bg-brand-yellow/15 text-brand-yellow border-brand-yellow/30' : 'bg-transparent text-brand-mid border-white/10 hover:border-white/20 hover:text-brand-light'
                  }`}>{cat.label}</button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-between">
              <div className="flex flex-wrap gap-2">
                {matchTypes.map((mt) => (
                  <button key={mt.value} onClick={() => setActiveMatch(mt.value)}
                    className={`text-xs tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
                      activeMatch === mt.value ? 'bg-white/10 text-brand-cream border-white/20' : 'bg-transparent text-brand-gray border-white/5 hover:border-white/15 hover:text-brand-mid'
                    }`}>{mt.label}</button>
                ))}
              </div>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                className="bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-xs text-brand-light focus:outline-none focus:border-brand-yellow/50">
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-brand-gray mb-6 font-mono">{filtered.length} pieces</p>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-brand-mid text-sm">No pieces match your filters.</p>
                <button onClick={() => { setActiveCategory('all'); setActiveMatch('all'); setSearchQuery(''); }}
                  className="text-brand-yellow text-sm mt-2 hover:underline">Clear all filters</button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
