import React from 'react';
import { Rocket, MessageSquare, Shield, BarChart3, FileText, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Lightning-fast RFQs',
    desc: 'Spin up structured requests in seconds. Vendors reply in a comparable, elegant format.'
  },
  {
    icon: FileText,
    title: '1-click Purchase Orders',
    desc: 'Approve, sign, and dispatch beautifully branded POs with a single action.'
  },
  {
    icon: MessageSquare,
    title: 'Contextual Chat',
    desc: 'Conversations are tied to requests, quotes, and orders — never lose the thread.'
  },
  {
    icon: BarChart3,
    title: 'Live Analytics',
    desc: 'Crystal-clear spend visibility and supplier performance insights.'
  },
  {
    icon: Building2,
    title: 'Verified Directory',
    desc: 'Discover vetted suppliers by category and location at the moment of need.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Granular roles, OTP login, encryption, and backups — safe by default.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-24 text-white">
      {/* ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30%_30%_at_15%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(35%_30%_at_85%_20%,rgba(59,130,246,0.12),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">A modern, liquid toolkit</h2>
          <p className="mt-3 text-white/70">Glassmorphic cards, fluid motion, and crisp typography for a future-forward workflow.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-200 ring-1 ring-inset ring-cyan-300/30">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{f.desc}</p>

              {/* subtle edge light */}
              <div className="pointer-events-none absolute inset-px rounded-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(120deg, rgba(34,211,238,0.25), rgba(59,130,246,0.25))', mask: 'linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)', WebkitMaskComposite: 'xor' }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
