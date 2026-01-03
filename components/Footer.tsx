"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-16 bg-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-3">
          {/* Logo */}
          <motion.img
            src="/logo.PNG"
            alt="DK Motors"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            viewport={{ once: true }}
            className="h-12 w-auto opacity-90"
          />

          {/* Japanese characters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 0.1 } }}
            viewport={{ once: true }}
            className="text-white/60 text-xs tracking-widest"
          >
            日本の精密工学
          </motion.div>

          {/* Thin divider */}
          <div className="h-px w-24 md:w-40 bg-white/10" />

          {/* Minimal text with fading year */}
          <p className="text-gray-500 text-sm">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1.2, delay: 0.2 } }} viewport={{ once: true }}>
              © {year}
            </motion.span>{" "}
            DK Motors — Japan Imported Vehicles
          </p>
        </div>
      </div>
    </footer>
  );
}
