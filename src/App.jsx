import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Contact from './components/Contact';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100">
      {/* Top progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-white/5">
        <div
          className="h-full bg-[linear-gradient(90deg,#06b6d4,#2563eb)] shadow-[0_0_12px_rgba(37,99,235,0.5)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Sections />
        <Contact />
      </main>

      {/* Back-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 rounded-full border border-white/10 bg-[#111827]/80 px-4 py-2 text-sm text-white hover:border-white/30"
        aria-label="Back to top"
      >
        Top
      </button>
    </div>
  );
}

export default App;
