import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Sign Up',
    desc: 'Enter phone number, verify OTP, and complete your company profile.'
  },
  {
    title: 'Set Up',
    desc: 'Add product categories, invite your team, and upload your logo.'
  },
  {
    title: 'Start Transacting',
    desc: 'Create purchase requests, receive quotes, and generate POs automatically.'
  },
  {
    title: 'Track & Optimize',
    desc: 'Monitor deliveries, chat in real-time, and analyze spend with reports.'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-slate-600">A simple, familiar workflow built for modern B2B teams.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
              <CheckCircle2 className="mt-1 text-emerald-600" />
              <div>
                <h3 className="font-semibold">{i + 1}. {s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
