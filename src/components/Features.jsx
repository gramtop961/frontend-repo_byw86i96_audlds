import React from 'react';
import { Rocket, MessageSquare, Shield, BarChart3, FileText, Building2 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Lightning-fast RFQs',
    desc: 'Create and circulate requests in seconds. Vendors respond in a structured, comparable format.'
  },
  {
    icon: FileText,
    title: '1-click Purchase Orders',
    desc: 'Turn accepted lines into branded POs with approvals, signatures, and audit trails.'
  },
  {
    icon: MessageSquare,
    title: 'Contextual Chat',
    desc: 'Keep conversations tied to requests, quotes, and orders with attachments & mentions.'
  },
  {
    icon: BarChart3,
    title: 'Live Analytics',
    desc: 'Track spend by category and supplier performance with clean, exportable reports.'
  },
  {
    icon: Building2,
    title: 'Verified Directory',
    desc: 'Discover vetted suppliers by industry and location, right when you need them.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    desc: 'Granular roles, OTP login, backups, and encryption to keep your data safe.'
  }
];

export default function Features() {
  return (
    <section className="relative bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A refined toolkit for procurement</h2>
          <p className="mt-3 text-slate-600">Minimal, focused building blocks that make everyday workflows effortless.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-600 ring-1 ring-inset ring-cyan-100">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
