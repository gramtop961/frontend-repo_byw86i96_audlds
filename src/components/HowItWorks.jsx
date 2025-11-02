import React from 'react';

const steps = [
  {
    title: 'Create a request',
    desc: 'Add items or upload a sheet. Invite suppliers with a link or from your directory.'
  },
  {
    title: 'Compare instantly',
    desc: 'Quotes land in a structured table so you can mix-and-match by line item.'
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
    <section className="relative bg-slate-50 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-7xl bg-gradient-to-b from-slate-100 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 text-slate-600">A simple, elegant flow — optimized for speed and clarity.</p>
        </div>

        <ol className="relative mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                <span className="text-sm font-semibold">{i + 1}</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
