import React from 'react';
import { Check } from 'lucide-react';

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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that fits your stage. Upgrade anytime as your team grows.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm transition ${plan.featured ? 'border-cyan-300/60 bg-cyan-50' : 'border-slate-200 bg-white'} hover:shadow-md`}
            >
              <div className="mb-5 flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
                  <p className="text-sm text-slate-600">{plan.tagline}</p>
                </div>
                <div className="text-2xl font-bold text-slate-900">{plan.price}</div>
              </div>

              <ul className="space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-cyan-600" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 ${plan.featured ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 focus:ring-cyan-400' : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-300'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
