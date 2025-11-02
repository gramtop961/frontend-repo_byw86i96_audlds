import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimaryCtaClick, onSecondaryCtaClick }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center md:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Modern • Fast • Secure
        </span>

        <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Supply Quo
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          A clean, futuristic procurement workspace. Compare quotes, generate POs, and collaborate with suppliers — all in one place.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={onPrimaryCtaClick}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Start Free Trial
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Request a Demo
          </button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/70">
          <li>Secure OTP Login</li>
          <li className="hidden sm:block">•</li>
          <li>Item-level Quote Acceptance</li>
          <li className="hidden sm:block">•</li>
          <li>Real-time Messaging</li>
        </ul>
      </div>
    </section>
  );
}
