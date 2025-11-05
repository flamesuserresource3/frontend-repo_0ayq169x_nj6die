import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0b0f19]">
      {/* Spline Cover - full bleed (AI voice agent aura) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Readability and aura emphasis overlays (do not block interaction) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft vignette for contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_30%,transparent,rgba(11,15,25,0.45))]" />
        {/* Subtle aurora sweep */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full opacity-25 blur-3xl bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.35),transparent_60%)]" />
        {/* Circular gradient waves to match the aura theme */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[60vmin] w-[60vmin]">
            <div className="absolute inset-0 rounded-full opacity-30 animate-[pulseRing_6s_ease-in-out_infinite] bg-[conic-gradient(from_0deg,rgba(6,182,212,0.25),rgba(37,99,235,0.25),rgba(124,58,237,0.25),rgba(6,182,212,0.25))] blur-[40px]" />
            <div className="absolute inset-10 rounded-full border border-white/10" />
          </div>
        </div>
        {/* Fade at bottom for legibility over content */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0b0f19] to-transparent" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm md:text-base text-slate-300"
        >
          ⚡ React • Next.js • Tailwind • Framer Motion
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-4 font-semibold leading-[1.1] text-white text-4xl md:text-6xl"
        >
          {['Futuristic', 'Web', 'Experiences', 'That', 'Convert.'].map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
              }}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-5 text-slate-300 text-lg md:text-xl"
        >
          Premium, dark-theme portfolio with motion, 3D aura, and clear calls to action.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring' }}
            href="#portfolio"
            className="rounded-full px-6 py-3 text-white shadow-[0_0_25px_rgba(37,99,235,0.35)] bg-[linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)] bg-[length:200%_200%] animate-[gradientMove_6s_ease_infinite]"
          >
            View My Work
          </motion.a>
          <motion.a
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.1, type: 'spring' }}
            href="#contact"
            className="rounded-full px-6 py-3 text-slate-100 border border-slate-300/20 hover:border-slate-200/40 transition-colors"
          >
            Start a Project
          </motion.a>
        </div>
      </div>

      <style>{`
        @keyframes gradientMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes pulseRing { 0%, 100% { transform: scale(1); opacity: 0.35 } 50% { transform: scale(1.06); opacity: 0.2 } }
      `}</style>
    </section>
  );
}
