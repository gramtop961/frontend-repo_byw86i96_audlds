import React from 'react';
import { Rocket, MessageSquare, Shield, BarChart3, FileText, Building2 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Smart Quotation System',
    desc: 'Receive, compare, and accept quotations at item level. Mix and match suppliers seamlessly.'
  },
  {
    icon: FileText,
    title: 'Purchase Orders in 1-Click',
    desc: 'Convert accepted quotes to branded POs with digital signatures and clear workflows.'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Communication',
    desc: 'Built-in chat keeps conversations organized with attachments and searchable history.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Understand spend, track supplier performance, and export insights when you need them.'
  },
  {
    icon: Building2,
    title: 'Company Directory',
    desc: 'Discover verified companies by category and location to expand your network.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade Security',
    desc: 'Secure OTP login, backups, and granular permissions ensure data stays protected.'
  }
];

export default function Features() {
  return (
    <section className="relative bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Everything you need to run procurement</h2>
          <p className="mt-3 text-slate-600">
            From purchase requests to delivery, Supply Quo centralizes your workflow with a modern, intuitive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
