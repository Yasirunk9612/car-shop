"use client";
import { motion } from "framer-motion";

export default function About() {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const container = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
  } as const;
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  } as const;
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  } as const;

  return (
    <section id="about" className="relative py-28 md:py-36 bg-zinc-950">
      {/* Vertical accent lines */}
      <div className="pointer-events-none absolute inset-0 flex justify-center gap-44 md:gap-72">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-red-600/25 to-transparent" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-red-600/25 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            <span className="text-white">Design Philosophy</span>
          </h2>
          <p className="mt-6 text-gray-300/90 text-lg leading-relaxed">
            Guided by shibui restraint and takumi craftsmanship, every decision is
            considered. Precision over excess. Purpose over noise.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mt-14 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-3"
        >
          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
            <h3 className="text-xl font-medium text-white tracking-tight">Shibui Simplicity</h3>
            <p className="mt-3 text-gray-300/90 leading-relaxed">
              Quiet confidence. Clean hierarchy, considered whitespace, and elements that breathe.
            </p>
          </motion.div>
          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
            <h3 className="text-xl font-medium text-white tracking-tight">Takumi Craft</h3>
            <p className="mt-3 text-gray-300/90 leading-relaxed">
              Details refined by hand. Fine micro-interactions and materials that feel engineered.
            </p>
          </motion.div>
          <motion.div variants={item} className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-7">
            <h3 className="text-xl font-medium text-white tracking-tight">Ma — Intentional Space</h3>
            <p className="mt-3 text-gray-300/90 leading-relaxed">
              Space as meaning. Rhythm and pause create clarity, balance, and focus.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mt-14 md:mt-20 mx-auto max-w-3xl text-center"
        >
          <p className="text-gray-300/90 leading-relaxed">
            DK Motors connects enthusiasts with authentic JDM cars and motorcycles, directly from Japan —
            inspected, documented, and delivered with care. The interface mirrors the ethos: decisive, elegant, precise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


