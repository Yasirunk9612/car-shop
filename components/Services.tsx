import { Car, Bike, Hammer, Truck, FileCheck, Wrench } from "lucide-react";
import type { ReactNode } from "react";

const services = [
  { code: "01", title: "Japanese Car Imports" },
  { code: "02", title: "Motorcycle Imports" },
  { code: "03", title: "Auction Bidding" },
  { code: "04", title: "Shipping & Logistics" },
  { code: "05", title: "Export Documentation" },
  { code: "06", title: "Custom JDM Requests" },
];

const icons: Record<string, ReactNode> = {
  "01": <Car className="w-16 h-16 text-white/80" aria-hidden />,
  "02": <Bike className="w-16 h-16 text-white/80" aria-hidden />,
  "03": <Hammer className="w-16 h-16 text-white/80" aria-hidden />,
  "04": <Truck className="w-16 h-16 text-white/80" aria-hidden />,
  "05": <FileCheck className="w-16 h-16 text-white/80" aria-hidden />,
  "06": <Wrench className="w-16 h-16 text-white/80" aria-hidden />,
};

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Precision Modules</h2>
          <p className="mt-4 text-gray-300/80">Numbered, structured, minimal, confident.</p>
        </div>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.code}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-7 md:p-8 transition-colors hover:border-red-600"
            >
              <div className="mb-4 flex items-center justify-center">
                {icons[s.code]}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-mono text-sm tracking-widest">{s.code}</span>
                <span className="h-px w-12 bg-white/15" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-white tracking-tight">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
