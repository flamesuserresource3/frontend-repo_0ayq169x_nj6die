import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0b0f19]">
      {/* Spline Cover - always full bleed */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft Aurora overlay for readability */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.45),transparent_60%)]" />
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
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="mt-4 font-semibold leading-[1.1] text-white text-4xl md:text-6xl"
        >
          {['Building', 'Experiences', 'That', 'Feel', 'Alive.'].map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } } }}
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
          Modern, conversion-driven websites — fast, responsive, unforgettable.
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
      `}</style>
    </section>
  );
}
