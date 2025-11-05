import { motion } from 'framer-motion';

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
    </div>
  );
}

export default function Sections() {
  return (
    <div className="bg-[#0b0f19]">
      <About />
      <Services />
      <Portfolio />
      <ProcessPricing />
      <TestimonialsTech />
      <CTASections />
      <Footer />
    </div>
  );
}

function Wrapper({ id, children, bg = '#0b0f19' }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.08]" style={{ background: 'radial-gradient(1200px_400px_at_center, #7c3aed20, transparent 60%)' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

function About() {
  return (
    <Wrapper id="about">
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <SectionTitle
          title="About"
          subtitle="I design and develop modern websites that help small businesses grow online. My focus is on building responsive, SEO-optimized, and visually stunning websites that deliver measurable results — crafted with React, Next.js, and Tailwind CSS."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          {['React','Next.js','Tailwind','Framer'].map((t, i) => (
            <motion.div key={t} initial={{ rotate: -8, scale: 0.9, opacity: 0 }} whileInView={{ rotate: 0, scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-lg border border-white/10 bg-[#111827]/70 p-3 text-center text-slate-200">
              {t}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
}

function Services() {
  const services = [
    { title: 'Restaurant & Café Websites', color: 'from-[#fb923c] to-[#e879f9]' },
    { title: 'Salon & Beauty Websites', color: 'from-[#e879f9] to-[#7c3aed]' },
    { title: 'Medical & Healthcare Websites', color: 'from-[#2563eb] to-[#06b6d4]' },
    { title: 'E-commerce Solutions', color: 'from-[#06b6d4] to-[#2563eb]' },
    { title: 'SEO-Optimized Websites', color: 'from-[#7c3aed] to-[#8b5cf6]' },
    { title: 'Custom Web Applications', color: 'from-[#06b6d4] to-[#7c3aed]' },
  ];

  return (
    <Wrapper id="services">
      <SectionTitle title="Services" subtitle="Modern, responsive and conversion-focused." />
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ rotateY: i % 2 ? 30 : -30, opacity: 0, y: 30 }}
            whileInView={{ rotateY: 0, opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="group perspective"
          >
            <div className={`relative rounded-xl p-6 border border-white/10 bg-[#111827]/80 hover:bg-[#0f1629]/80 transition-colors shadow-xl`}>
              <div className={`absolute -inset-px rounded-xl bg-gradient-to-br ${s.color} opacity-20 group-hover:opacity-40 blur-xl transition-opacity`} />
              <div className="relative">
                <h3 className="text-white font-medium text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">High-performance builds tailored to your industry.</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
}

function Portfolio() {
  const projects = [
    { title: 'Aadaram Café', tag: 'Restaurant Website', desc: 'Delicious design with online ordering system', stack: 'React | Tailwind | SEO', gradient: 'bg-[linear-gradient(135deg,#fb923c,#e879f9)]' },
    { title: 'Aesthetic Clinic', tag: 'Medical Website', desc: 'Elegant, trustworthy and fast', stack: 'Next.js | Tailwind | SEO', gradient: 'bg-[linear-gradient(135deg,#2563eb,#06b6d4)]' },
    { title: 'Gritty Gaming Café', tag: 'Gaming Website', desc: 'Bold neon vibes with booking', stack: 'React | GSAP | Tailwind', gradient: 'bg-[linear-gradient(135deg,#06b6d4,#2563eb)]' },
    { title: 'Twelve7 Salon', tag: 'Salon & Beauty Website', desc: 'Premium look with conversions in mind', stack: 'Next.js | Tailwind', gradient: 'bg-[linear-gradient(135deg,#e879f9,#7c3aed)]' },
    { title: 'InkThrive SEO', tag: 'SEO Agency Website', desc: 'Clean, content-first with strong CTAs', stack: 'Next.js | SEO', gradient: 'bg-[linear-gradient(135deg,#7c3aed,#8b5cf6)]' },
  ];

  return (
    <Wrapper id="portfolio">
      <SectionTitle title="Selected Work" subtitle="Animated gradient blocks — no images, just pure design." />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06 }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 ${p.gradient} bg-[length:200%_200%] animate-[gradientMove_7s_ease_infinite] p-6 group`}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold tracking-wide uppercase">[{p.title}]</h3>
                <span className="text-slate-200 text-xs">[ View Live Site ]</span>
              </div>
              <p className="mt-1 text-slate-100">{p.tag}</p>
              <p className="mt-2 text-slate-200/90 text-sm">“{p.desc}”</p>
              <p className="mt-2 text-slate-200 text-sm">Stack: {p.stack}</p>
              <span className="mt-4 inline-block h-0.5 w-24 bg-gradient-to-r from-white/60 to-transparent" />
            </div>
          </motion.a>
        ))}
      </div>
      <style>{`@keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </Wrapper>
  );
}

function ProcessPricing() {
  const steps = [
    'Discovery & Planning',
    'Design & Mockup',
    'Development',
    'Testing & Refinement',
    'Launch & Support',
  ];

  return (
    <Wrapper id="process">
      <SectionTitle title="Process & Pricing" subtitle="Transparent steps and clear value." />

      {/* Timeline */}
      <div className="relative mb-12">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div key={s} className="relative pl-12" initial={{ opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#2563eb] shadow-[0_0_12px_rgba(37,99,235,0.6)]" />
              <h4 className="text-white font-medium">{s}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Starter', price: 6000, note: 'Single-page, responsive, SEO-ready, contact form, 1-month support, 3–5 days' },
          { name: 'Professional', price: 15000, highlight: true, note: 'Up to 5 pages, WhatsApp integration, 3 months support, 7–10 days' },
          { name: 'Business', price: 'Custom', note: 'Unlimited pages, custom features, advanced SEO, ongoing maintenance' },
        ].map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative rounded-2xl border ${p.highlight ? 'border-white/30' : 'border-white/10'} bg-[#111827]/80 p-6`}>
            <div className={`absolute -inset-px rounded-2xl ${p.highlight ? 'bg-[linear-gradient(90deg,#06b6d4,#2563eb)] opacity-30' : 'bg-[linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)] opacity-15'} blur-2xl`} />
            <div className="relative">
              <h4 className="text-white text-xl font-semibold">{p.name} Package</h4>
              <div className="mt-2 flex items-baseline gap-2">
                <Odometer target={p.price} />
                <span className="text-slate-300">{typeof p.price === 'number' ? 'INR' : ''}</span>
              </div>
              <p className="mt-4 text-slate-300 text-sm">{p.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
}

function Odometer({ target }) {
  if (typeof target !== 'number') return <span className="text-white text-3xl">Custom</span>;
  return <AnimatedNumber value={target} />;
}

function AnimatedNumber({ value }) {
  return (
    <motion.span
      className="text-white text-3xl"
      initial={{ textShadow: '0 0 0px rgba(99,102,241,0)' }}
      whileInView={{ textShadow: '0 0 16px rgba(37,99,235,0.45)' }}
      viewport={{ once: true }}
    >
      ₹{value.toLocaleString('en-IN')}
    </motion.span>
  );
}

function TestimonialsTech() {
  const testimonials = [
    { q: 'Our website looks amazing and boosted online orders 3x! Highly recommended.', a: 'Ravi Sharma, Aadaram Café' },
    { q: 'Professional, fast, and stunning results. Wonderful experience.', a: 'Nisha Verma, Twelve7 Salon' },
    { q: 'Clean code and blazing speed. SEO results improved significantly.', a: 'Anil Mehra, InkThrive SEO' },
  ];

  const tech = ['React', 'Next.js', 'Tailwind', 'Node.js', 'MongoDB', 'Firebase', 'Git', 'Vercel', 'SEO', 'Performance'];

  return (
    <>
      <Wrapper id="testimonials">
        <SectionTitle title="Testimonials" subtitle="Real results from real businesses." />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ rotate: i % 2 ? -6 : 6, opacity: 0 }} whileInView={{ rotate: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 120 }} className="rounded-xl border border-white/10 bg-[#111827]/80 p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#2563eb]" />
                ))}
              </div>
              <p className="text-slate-200">“{t.q}”</p>
              <p className="mt-3 text-slate-400 text-sm">— {t.a}</p>
            </motion.div>
          ))}
        </div>
      </Wrapper>

      <Wrapper id="skills">
        <SectionTitle title="Technologies & Skills" subtitle="Modern stack for performance and scalability." />
        <div className="relative grid grid-cols-3 sm:grid-cols-5 gap-4">
          {tech.map((t, i) => (
            <motion.div key={t} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-lg border border-white/10 bg-[#111827]/80 py-4 text-center text-slate-200">
              {t}
            </motion.div>
          ))}
        </div>
      </Wrapper>
    </>
  );
}

function CTASections() {
  return (
    <>
      <Wrapper id="cta1">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-10">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(600px_200px_at_20%_20%,#2563eb33,transparent),radial-gradient(600px_200px_at_80%_80%,#06b6d433,transparent)]" />
          <div className="relative text-center">
            <h3 className="text-white text-2xl md:text-3xl font-semibold">Ready to Transform Your Business Online?</h3>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-[linear-gradient(90deg,#06b6d4,#2563eb)] shadow-[0_0_20px_rgba(37,99,235,0.35)]">Get Free Quote</a>
          </div>
        </div>
      </Wrapper>

      <Wrapper id="cta2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-10">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(600px_200px_at_20%_80%,#7c3aed33,transparent),radial-gradient(600px_200px_at_80%_20%,#06b6d433,transparent)]" />
          <div className="relative text-center">
            <h3 className="text-white text-2xl md:text-3xl font-semibold">Let’s Build Something Extraordinary Together.</h3>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-white bg-[linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)]">Start Your Project Now</a>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-slate-300">
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
          <p className="text-sm">Premium, futuristic web experiences built for performance and conversions.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Design</li>
            <li>SEO</li>
            <li>Custom Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>India</li>
            <li><a href="#contact" className="hover:text-white">Start a Project</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-slate-400 text-sm">© 2025. Built with ❤️ in India.</div>
    </footer>
  );
}
