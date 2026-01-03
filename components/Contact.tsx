"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your Formspree ID

export default function Contact() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") || "",
      email: formData.get("email") || "",
      message: formData.get("message") || "",
    };

    // Play subtle engine start sound on submit
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/engine-start.mp3");
    }
    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch {}

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

  return (
    <section id="contact" className="py-36 md:py-48 bg-black">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
          viewport={{ once: true, amount: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="text-red-500 font-mono text-sm tracking-widest">PRIVATE CONSULTATION</span>
            <span className="h-px w-10 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease } }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
        >
          Begin the Process
        </motion.h2>

        {/* Direct contact actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease, delay: 0.1 } }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
        >
          <a href="tel:+94770729275" className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-4 hover:bg-white/[0.06] transition">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-red-500" aria-hidden />
              <div>
                <div className="text-white font-medium">Call</div>
                <div className="text-gray-400 text-sm">+94 770 729 275</div>
              </div>
            </div>
          </a>
          <a href="https://wa.me/94770729275" target="_blank" rel="noopener" className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-4 hover:bg-white/[0.06] transition">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-red-500" aria-hidden />
              <div>
                <div className="text-white font-medium">WhatsApp</div>
                <div className="text-gray-400 text-sm">+94 770 729 275</div>
              </div>
            </div>
          </a>
          <a href="mailto:yasirunisal75@gmail.com" className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-4 hover:bg-white/[0.06] transition">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-red-500" aria-hidden />
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-400 text-sm">yasirunisal75@gmail.com</div>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease, delay: 0.15 } }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl"
        >
          <div className="p-6 md:p-8 grid gap-5">
            <input
              name="name"
              placeholder="Your name"
              className="p-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-shadow"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-shadow"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Briefly describe the vehicle and timeline"
              className="p-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition-shadow"
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 0 rgba(239,68,68,0)",
                  "0 0 24px rgba(239,68,68,0.35)",
                  "0 0 0 rgba(239,68,68,0)",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-2 bg-red-600 text-white font-semibold rounded-full py-4 hover:bg-red-700 transition disabled:opacity-60"
            >
              {status === "sent" ? "Request Sent" : status === "sending" ? "Sending…" : "Request Private Consultation"}
            </motion.button>
          </div>
        </motion.form>

        {status === "sent" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-sm text-gray-400"
          >
            We’ve received your request. Our team will reach out privately.
          </motion.p>
        )}

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease, delay: 0.1 } }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-10 flex items-center justify-center gap-6 text-white/80"
        >
          {/* Update hrefs once accounts are available */}
          <a href="#" aria-label="Instagram" className="p-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="p-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="YouTube" className="p-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition">
            <Youtube className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
