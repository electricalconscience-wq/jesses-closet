'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/shop', label: 'SHOP' },
    { href: '/looks', label: 'LOOKS' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Top ticker — early 2000s marquee energy */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-brand-yellow overflow-hidden h-7 flex items-center">
        <div className="marquee-track animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-block whitespace-nowrap px-4">
              <span className="font-pixel text-sm text-brand-black tracking-wide">
                ★ JESSE&apos;S CLOSET — SCREEN-MATCHED STREETWEAR ★ 25 ITEMS IDENTIFIED ★ ALL 5 SEASONS ★ REAL PURCHASE LINKS ★ VOLCOM • CARHARTT • NIKE • VANS • DICKIES • LEVI&apos;S • SRH ★ ALBUQUERQUE NM ★ FREE SHIPPING ON AMAZON ITEMS ★ JESSE&apos;S CLOSET — SCREEN-MATCHED STREETWEAR ★ 25 ITEMS IDENTIFIED ★ ALL 5 SEASONS ★ REAL PURCHASE LINKS ★
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="fixed top-7 left-0 right-0 z-40 bg-brand-black border-b-2 border-brand-yellow/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-brand-yellow border-2 border-brand-yellow flex items-center justify-center group-hover:bg-brand-neon group-hover:border-brand-neon transition-colors">
                <span className="text-brand-black font-display font-bold text-base tracking-wider">JC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl tracking-[0.15em] text-brand-yellow leading-none">
                  JESSE&apos;S CLOSET
                </span>
                <span className="font-pixel text-[10px] text-brand-mid tracking-widest">EST. 2008 • ABQ, NM</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-base tracking-[0.2em] text-brand-cream hover:text-brand-black hover:bg-brand-yellow px-4 py-1.5 transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link href="/shop" className="hidden sm:flex font-pixel text-xs bg-brand-yellow text-brand-black px-3 py-1.5 hover:bg-brand-neon transition-colors tracking-wider">
                SHOP NOW →
              </Link>
              <button
                className="md:hidden text-brand-yellow hover:text-brand-neon transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-brand-black border-t-2 border-brand-yellow/30 animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-display text-lg tracking-[0.2em] text-brand-cream hover:text-brand-black hover:bg-brand-yellow px-3 py-2 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
