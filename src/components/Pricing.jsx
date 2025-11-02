import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    tagline: 'For trying things out',
    features: [
      'Up to 10 requests/month',
      'Basic quotation tools',
      '1 user',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$49/mo',
    tagline: 'For growing teams',
    featured: true,
    features: [
      'Unlimited requests',
      'Line-item acceptance',
      'Up to 5 users',
      'Chat support',
      'Analytics dashboard'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Advanced control',
    features: [
      'Unlimited users',
      'Priority support',
      'Custom branding',
      'API access',
      'Dedicated manager'
    ],
    cta: 'Contact Sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your stage. Upgrade anytime as your team grows.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.06 }}
              className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl ${plan.featured ? 'border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_0_1px_rgba(34,211,238,0.25)]' : 'border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]'}`}
            >
              {plan.featured && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_-20%,rgba(34,211,238,0.25),transparent)]" />
              )}

              <div className="relative mb-5 flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white">{plan.name}</h3>
                  <p className="text-sm text-white/70">{plan.tagline}</p>
                </div>
                <div className="text-2xl font-bold text-white">{plan.price}</div>
              </div>

              <ul className="relative space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-cyan-400" />
                    <span className="text-white/80">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`relative mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 ${plan.featured ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 focus:ring-cyan-400' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10 focus:ring-white/30'}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
