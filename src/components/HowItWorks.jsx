import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Create a request',
    desc: 'Add items or upload a sheet. Invite suppliers with a link or from your directory.'
  },
  {
    title: 'Compare instantly',
    desc: 'Quotes arrive in a structured table so you can mix-and-match by line item.'
  },
  {
    title: 'Approve & issue POs',
    desc: 'Route approvals, generate branded POs, and track acknowledgements.'
  },
  {
    title: 'Chat & track delivery',
    desc: 'Collaborate in real-time with message threads tied to each transaction.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-950 py-24 text-white">
      {/* ambient divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(14,165,233,0.1),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">How it works</h2>
          <p className="mt-3 text-white/70">An elegant, 4-step flow designed for speed and clarity.</p>
        </motion.div>

        <ol className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                <span className="text-sm font-semibold">{i + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-white/70">{s.desc}</p>

              {/* flowing highlight */}
              <div className="pointer-events-none absolute -inset-0.5 -z-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 md:group-hover:opacity-100" style={{ background: 'radial-gradient(40%_60%_at_80%_0%, rgba(34,211,238,0.25), transparent 60%)' }} />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
