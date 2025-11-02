import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onPrimaryCtaClick, onSecondaryCtaClick }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient veil for contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(0,209,255,0.18),transparent),radial-gradient(40%_40%_at_20%_60%,rgba(56,189,248,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />

      {/* content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          3D, Glassmorphic, Fintech-grade
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="text-balance bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl"
        >
          Supply Quo — Liquid Procurement OS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg"
        >
          A glass-smooth workspace to request, compare, and issue POs with elegance. Real-time quotes, approvals, and chat — elevated.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.35 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-xl px-6 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#06b6d4_0%,#2563eb_50%,#06b6d4_100%)] opacity-90 [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:subtract] p-px rounded-xl" />
            <span className="relative rounded-[10px] bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500">
              Start Free Trial
            </span>
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="group inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <span className="mr-2 h-2 w-2 rounded-full bg-cyan-400 transition group-hover:scale-110" />
            Request a Demo
          </button>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/70"
        >
          {['Secure OTP Login', 'Item-level Acceptance', 'Real-time Messaging'].map((t) => (
            <motion.li key={t} variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
