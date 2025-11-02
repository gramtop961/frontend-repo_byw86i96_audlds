import React, { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';

export default function App() {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openDemo = () => {
    const url = '#request-demo';
    if (window.location.hash !== url) window.location.hash = url;
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600" />
            <span className="text-sm font-semibold text-slate-900">Supply Quo</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900">How it works</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          </nav>
          <button
            onClick={scrollToPricing}
            className="rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Get Started
          </button>
        </div>
      </header>

      <main>
        <Hero onPrimaryCtaClick={scrollToPricing} onSecondaryCtaClick={openDemo} />
        <div id="features"><Features /></div>
        <div id="how-it-works"><HowItWorks /></div>
        <div id="pricing" ref={pricingRef}><Pricing /></div>

        <section id="request-demo" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">See Supply Quo in action</h3>
            <p className="max-w-2xl text-white/80">Request a demo — we’ll walk you through RFQs, line-item acceptance, auto POs, and real-time chat.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid w-full grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]"
            >
              <input
                type="email"
                required
                placeholder="Work email"
                className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone (UAE supported)"
                className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
              >
                Request Demo
              </button>
            </form>
            <p className="text-xs text-white/60">By proceeding, you agree to our Terms and Privacy Policy.</p>
          </div>
        </section>
      </main>

      <footer className="bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Supply Quo. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-500 hover:text-slate-700">Docs</a>
            <a href="#" className="text-slate-500 hover:text-slate-700">Support</a>
            <a href="mailto:support@supplyquo.com" className="text-slate-500 hover:text-slate-700">support@supplyquo.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
