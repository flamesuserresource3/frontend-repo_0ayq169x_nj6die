import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-[#0b0f19]/70 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-wide text-lg">
          <span className="bg-gradient-to-r from-[#06b6d4] via-[#2563eb] to-[#7c3aed] bg-clip-text text-transparent">FLAMES.DEV</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-slate-300 hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-[#06b6d4] via-[#2563eb] to-[#7c3aed] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full px-4 py-2 text-sm text-white border border-transparent bg-gradient-to-r from-[#06b6d4] to-[#2563eb] shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(37,99,235,0.55)] transition-shadow"
          >
            Get Quote
          </a>
        </nav>

        <button
          className="md:hidden text-white/90"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)}></div>
        <aside className="absolute right-0 top-0 h-full w-80 bg-[#111827] border-l border-white/10 p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-white font-semibold">FLAMES.DEV</span>
            <button className="text-white/80" onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-200 text-base"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm text-white border border-white/20 hover:border-white/40 transition-colors"
            >
              Get Quote
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
