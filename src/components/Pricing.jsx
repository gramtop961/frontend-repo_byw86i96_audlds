import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    tagline: 'Best for trying things out',
    features: [
      'Up to 10 purchase requests/month',
      'Basic quotation management',
      '1 user',
      'Community support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: '$49/mo',
    tagline: 'For growing teams',
    featured: true,
    features: [
      'Unlimited purchase requests',
      'Full quotation management',
      'Up to 5 users',
      'Chat support',
      'Analytics dashboard'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Advanced control & support',
    features: [
      'Unlimited users',
      'Priority support',
      'Custom branding',
      'API access',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales'
  }
];

export default function Pricing() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that fits your stage. Upgrade anytime as your team grows.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm ${plan.featured ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white'}`}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-sm text-slate-600">{plan.tagline}</p>
                </div>
                <div className="text-2xl font-bold">{plan.price}</div>
              </div>

              <ul className="space-y-2 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 ${plan.featured ? 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-400' : 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-400'}`}
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
