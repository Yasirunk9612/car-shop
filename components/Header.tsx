"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Subtle line accent */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1, transition: { duration: 1.2, ease } }}
        className="h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.PNG" alt="DK Motors" width={36} height={36} className="opacity-90" />
              <span className="sr-only">DK Motors</span>
            </Link>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#why-us" className="text-gray-300 hover:text-white transition">Why Us</a>
              <a href="#process" className="text-gray-300 hover:text-white transition">Process</a>
              {/*<a href="#instagram" className="text-gray-300 hover:text-white transition">Instagram</a>*/}
              <a href="#contact" className="px-3 py-2 rounded-md bg-red-600 text-white neon-red-soft neon-hover transition hover:bg-red-700">Begin the Process</a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex flex-col items-center justify-center gap-1 rounded-md border border-white/10 bg-black/50 p-2 text-white"
            >
              <span className="block w-5 h-[2px] bg-white" />
              <span className="block w-5 h-[2px] bg-white" />
              <span className="block w-5 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease }}
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur px-4 py-4">
            <div className="grid gap-3 text-sm">
              <a href="#services" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">Services</a>
              <a href="#why-us" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">Why Us</a>
              <a href="#process" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">Process</a>
              <a href="#instagram" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-white/5">Instagram</a>
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 px-3 py-2 rounded-md bg-red-600 text-white">Begin the Process</a>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}


