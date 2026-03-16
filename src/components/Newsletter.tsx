'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(''); }
  };

  return (
    <section className="bg-brand-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-brand-cream mb-2">Stay in the Loop</h2>
        <p className="text-sm text-brand-mid mb-8 max-w-md mx-auto">
          New drops, restocks, and archive deep-dives. No spam, just style.
        </p>
        {submitted ? (
          <p className="text-brand-yellow font-mono text-sm tracking-wide">You&apos;re in. Watch your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-cream placeholder:text-brand-gray focus:outline-none focus:border-brand-yellow/50 transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-brand-yellow text-brand-black px-6 py-3 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
