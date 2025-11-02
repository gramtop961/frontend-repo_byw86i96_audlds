import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryCtaClick, onSecondaryCtaClick }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          3D • Interactive • Futuristic
        </span>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Supply Quo
        </h1>
        <p className="mt-4 max-w-3xl text-balance text-base text-slate-200 sm:text-lg">
          A dynamic 3D experience meets real procurement automation. Compare quotes, automate POs, and collaborate in real-time.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={onPrimaryCtaClick}
            className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Start Your Free Trial
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Request a Demo
          </button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
          <li>Secure OTP Login</li>
          <li className="hidden sm:block">•</li>
          <li>Item-level Quote Acceptance</li>
          <li className="hidden sm:block">•</li>
          <li>Real-time Notifications</li>
        </ul>
      </div>
    </section>
  );
}
