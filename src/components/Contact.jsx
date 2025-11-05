import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    websiteType: 'Restaurant',
    budget: '₹6,000 - ₹15,000',
    details: '',
    timeline: '1-2 weeks',
  });
  const [status, setStatus] = useState('idle');

  const isValid = useMemo(() => {
    const phoneOk = /^\d{10}$/.test(form.phone.trim());
    const emailOk = !form.email || /.+@.+\..+/.test(form.email.trim());
    return form.name && form.business && phoneOk && emailOk;
  }, [form]);

  function openWhatsApp() {
    const msg = `New Inquiry%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Business: ${encodeURIComponent(form.business)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Email: ${encodeURIComponent(form.email || 'N/A')}%0A` +
      `Website Type: ${encodeURIComponent(form.websiteType)}%0A` +
      `Budget: ${encodeURIComponent(form.budget)}%0A` +
      `Timeline: ${encodeURIComponent(form.timeline)}%0A` +
      `Details: ${encodeURIComponent(form.details)}`;
    const url = `https://wa.me/919315435356?text=${msg}`;
    window.open(url, '_blank');
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('sent');
      openWhatsApp();
    }, 700);
  }

  return (
    <section id="contact" className="relative py-20 bg-[#0b0f19]">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(800px_300px_at_70%_30%,#06b6d444,transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Start Your Project</h2>
          <p className="mt-2 text-slate-300">Tell me about your business and goals. I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Name" required>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" placeholder="Your name" />
          </Field>
          <Field label="Business Name" required>
            <input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="field" placeholder="Company or brand" />
          </Field>

          <Field label="Phone" required hint="10 digits only">
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, '') })} className="field" placeholder="9876543210" maxLength={10} />
          </Field>
          <Field label="Email">
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field" placeholder="you@example.com" />
          </Field>

          <Field label="Website Type">
            <select value={form.websiteType} onChange={(e) => setForm({ ...form, websiteType: e.target.value })} className="field">
              {['Restaurant', 'Salon & Beauty', 'Medical', 'E-commerce', 'SEO', 'Custom Web App'].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Budget">
            <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="field">
              {['₹6,000 - ₹15,000', '₹15,000 - ₹40,000', '₹40,000+'].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>

          <Field label="Timeline">
            <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className="field">
              {['1-2 weeks', '2-4 weeks', 'Flexible'].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>

          <div className="md:col-span-2">
            <Field label="Project Details">
              <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="field min-h-[120px]" placeholder="Share goals, features, examples…" />
            </Field>
          </div>

          <div className="md:col-span-2 mt-2 flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.98 }}
              disabled={!isValid || status === 'loading'}
              className={`rounded-full px-6 py-3 text-white transition-all ${
                status === 'sent'
                  ? 'bg-green-600'
                  : 'bg-[linear-gradient(90deg,#06b6d4,#2563eb)] shadow-[0_0_20px_rgba(37,99,235,0.35)]'
              } disabled:opacity-50`}
              type="submit"
            >
              {status === 'loading' ? 'Sending…' : status === 'sent' ? 'Redirecting to WhatsApp…' : 'Send Inquiry'}
            </motion.button>
            {status === 'sent' && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400">
                ✓ Success
              </motion.span>
            )}
          </div>
        </form>
      </div>

      <style>{`
        .field { @apply w-full rounded-lg bg-[#0f1629] border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-white/30; }
      `}</style>
    </section>
  );
}

function Field({ label, children, required, hint }) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center gap-2 text-sm text-slate-300">
        <span>
          {label}
          {required && <span className="text-red-400"> *</span>}
        </span>
        {hint && <span className="text-slate-500">{hint}</span>}
      </div>
      {children}
    </label>
  );
}
