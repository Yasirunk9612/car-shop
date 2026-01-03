"use client";
import { motion } from "framer-motion";

type Shot = {
  src: string;
  alt: string;
};

const shots: Shot[] = [
  { src: "/gallery/r32-gtr-delivery.jpg", alt: "Nissan Skyline GT-R R32 delivery" },
  { src: "/gallery/supra-a80-delivery.jpg", alt: "Toyota Supra A80 delivery" },
  { src: "/gallery/rx7-fd-delivery.jpg", alt: "Mazda RX-7 FD delivery" },
  { src: "/gallery/nsx-na1-delivery.jpg", alt: "Honda NSX NA1 delivery" },
  { src: "/gallery/s2000-ap2-delivery.jpg", alt: "Honda S2000 AP2 delivery" },
  { src: "/gallery/silvia-s15-delivery.jpg", alt: "Nissan Silvia S15 delivery" },
  { src: "/gallery/skyline-gtst-delivery.jpg", alt: "Nissan Skyline GTS-t delivery" },
  { src: "/gallery/cbr1000rr-delivery.jpg", alt: "Honda CBR1000RR delivery" },
];

export default function Instagram() {
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  return (
    <section id="instagram" className="py-36 md:py-48 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9, ease } }}
            viewport={{ once: true, amount: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="text-red-500 font-mono text-sm tracking-widest">FIELD JOURNAL</span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease } }}
            viewport={{ once: true, amount: 0.6 }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white"
          >
            Latest Deliveries
          </motion.h2>
          
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {shots.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease, delay: i * 0.05 } }}
              viewport={{ once: true, amount: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <img
                src={s.src}
                alt={s.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
