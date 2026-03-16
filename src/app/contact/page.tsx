'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[10px] tracking-[0.3em] uppercase text-brand-mid font-mono">Get in Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl text-brand-cream mt-2 mb-4">Contact</h1>
            <p className="text-sm text-brand-mid mb-12">Got a product suggestion, correction, or collab idea? We read everything.</p>

            {submitted ? (
              <div className="bg-brand-charcoal border border-white/5 rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-brand-yellow/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-xl text-brand-cream mb-2">Message Sent</h2>
                <p className="text-sm text-brand-mid">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-brand-mid font-mono mb-2">Name</label>
                    <input type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-cream placeholder:text-brand-gray focus:outline-none focus:border-brand-yellow/50 transition-colors"
                      placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-brand-mid font-mono mb-2">Email</label>
                    <input type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-cream placeholder:text-brand-gray focus:outline-none focus:border-brand-yellow/50 transition-colors"
                      placeholder="you@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-mid font-mono mb-2">Subject</label>
                  <select value={formState.subject} onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-cream focus:outline-none focus:border-brand-yellow/50 transition-colors" required>
                    <option value="">Select a topic</option>
                    <option value="product-suggestion">Product Suggestion</option>
                    <option value="correction">Correction / Accuracy</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-brand-mid font-mono mb-2">Message</label>
                  <textarea value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={6} className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-sm text-brand-cream placeholder:text-brand-gray focus:outline-none focus:border-brand-yellow/50 transition-colors resize-none"
                    placeholder="What's on your mind?" required />
                </div>
                <button type="submit"
                  className="w-full bg-brand-yellow text-brand-black py-4 rounded-lg text-sm font-bold tracking-wide hover:bg-brand-amber transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
