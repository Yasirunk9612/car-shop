"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { Globe, Ban, ShieldCheck, ClipboardCheck, Truck, FileCheck, Headphones } from "lucide-react";

export default function WhyUs() {
  const ease = useMemo(() => [0.16, 1, 0.3, 1] as [number, number, number, number], []);

  const features = [
    { icon: Globe, title: "Direct Auction Access", desc: "Bid transparently at Japan’s top auctions." },
    { icon: ClipboardCheck, title: "Inspection & Verification", desc: "Independent checks, condition reports, and VIN verification." },
    { icon: FileCheck, title: "Compliance & Paperwork", desc: "All documents handled — no surprises, no delays." },
    { icon: Truck, title: "End‑to‑End Logistics", desc: "From port to handover — tracked and guaranteed." },
    { icon: ShieldCheck, title: "Protection First", desc: "Risk‑removed process, compliant at every step." },
    { icon: Headphones, title: "Concierge Support", desc: "Private consultation and proactive updates, start to finish." },
  ];

  const lineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start 0.9", "end 0.4"] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="why-us" className="relative bg-black py-40 md:py-[18vh]">
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-xs tracking-[0.35em] text-gray-400"
        >
          WHY DK MOTORS — THE DIFFERENCE
        </motion.div>

        {/* Expanding horizontal line */}
        <div ref={lineRef} className="mt-10 flex items-center justify-center">
          <div className="h-px w-full max-w-4xl bg-white/10" />
          <motion.div style={{ width: lineWidth }} className="absolute h-px max-w-4xl bg-red-600 shadow neon-red-soft" />
        </div>

        {/* Benefits grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease, delay: i * 0.05 } }}
              viewport={{ once: true, amount: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur p-6"
            >
              <div className="flex items-start gap-4">
                <f.icon className="w-6 h-6 text-red-500 flex-shrink-0" aria-hidden />
                <div>
                  <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease, delay: 0.2 } }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-16 text-gray-300"
        >
          <span className="inline-flex items-center gap-3 text-sm">
            <span className="text-white font-medium">98% client satisfaction</span>
            <span className="h-px w-8 bg-white/10" />
            <span>200+ vehicles delivered</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
