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
    <section className="border-y-2 border-brand-yellow/20 bg-brand-charcoal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-brand-yellow tracking-[0.15em] mb-2">★ STAY IN THE LOOP ★</h2>
        <p className="font-pixel text-sm text-brand-mid mb-8 max-w-md mx-auto">
          NEW DROPS, RESTOCKS, AND ARCHIVE DEEP-DIVES. NO SPAM.
        </p>
        {submitted ? (
          <p className="font-pixel text-brand-neon text-sm tracking-wide">★ YOU&apos;RE IN. WATCH YOUR INBOX. ★</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-brand-black border-2 border-brand-yellow/30 px-4 py-3 font-pixel text-sm text-brand-cream placeholder:text-brand-gray focus:outline-none focus:border-brand-yellow transition-colors"
              required
            />
            <button
              type="submit"
              className="font-display text-base tracking-[0.2em] bg-brand-yellow text-brand-black px-6 py-3 hover:bg-brand-neon transition-colors shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
