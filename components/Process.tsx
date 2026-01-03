"use client";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Car, Search, ShieldCheck, Truck, Home, ChevronRight } from "lucide-react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import movingDot from "../app/lottie/moving-dot.json";

const steps = [
  { 
    title: "Choose your vehicle", 
    icon: Car,
    description: "Browse our curated selection of Japanese vehicles with transparent pricing",
    color: "from-red-500 to-orange-500"
  },
  { 
    title: "We source it in Japan", 
    icon: Search,
    description: "Our experts in Japan negotiate and verify vehicle history",
    color: "from-orange-500 to-amber-500"
  },
  { 
    title: "Inspection & approval", 
    icon: ShieldCheck,
    description: "Comprehensive 150-point inspection and quality assurance",
    color: "from-amber-500 to-yellow-500"
  },
  { 
    title: "Shipping & paperwork", 
    icon: Truck,
    description: "Handle all logistics, customs, and documentation for you",
    color: "from-yellow-500 to-lime-500"
  },
  { 
    title: "Delivered to you", 
    icon: Home,
    description: "Doorstep delivery with final inspection and handover",
    color: "from-lime-500 to-green-500"
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start 0.7", "end 0.3"] 
  });
  
  const progressLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [active, setActive] = useState(0);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  
  // Additional transforms for creative effects
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);
  const roadScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const titleScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1.05, 1.05, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.floor(latest * steps.length);
    setActive(Math.max(0, Math.min(steps.length - 1, idx)));
    const frame = Math.floor(latest * 120);
    lottieRef.current?.goToAndStop(frame, true);
  });

  const ease = useMemo(() => [0.16, 1, 0.3, 1] as [number, number, number, number], []);

  return (
    <section id="process" className="relative py-36 md:py-48 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ scale: titleScale }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease } }}
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
            <span className="text-red-500 font-mono text-sm tracking-widest">PROCESS</span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease, delay: 0.2 } }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
          >
            Import Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.0, ease, delay: 0.4 } }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            From selection to delivery — a seamless experience powered by technology
          </motion.p>
        </motion.div>

        {/* Mobile timeline (no horizontal overflow) */}
        <div className="md:hidden">
          <div className="mt-12 grid gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: i * 0.05 } }}
                  viewport={{ once: true, amount: 0.35 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/10">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold">{step.title}</h3>
                        <span className="font-mono text-xs text-red-400">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${step.color} opacity-60`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop road timeline */}
        <div ref={ref} className="relative hidden md:block">
          {/* Animated road background */}
          <motion.div 
            style={{ scale: roadScale }}
            className="relative"
          >
            {/* Road gradient with animated shine */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              />
              {/* Road markings */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex gap-8 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                    className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-yellow-500"
                  />
                ))}
              </div>
            </div>
            
            {/* Lottie animation with glow effect */}
            <motion.div 
              style={{ left: progressLeft }} 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
            >
              <div className="relative">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-red-500/20 blur-xl rounded-full"
                />
                <Lottie 
                  lottieRef={lottieRef} 
                  animationData={movingDot} 
                  loop={false} 
                  autoplay={false} 
                  style={{ width: 80, height: 80, filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.5))" }} 
                />
              </div>
            </motion.div>

            {/* Step markers with animated connections */}
            <div className="relative mt-32 grid grid-cols-5 gap-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i <= active;
                const isCurrent = i === active;
                
                return (
                  <div key={i} className="relative flex flex-col items-center">
                    {/* Animated connection line */}
                    {i < steps.length - 1 && (
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute top-4 left-1/2 w-full h-0.5 bg-gradient-to-r from-red-500/50 to-transparent origin-left"
                      />
                    )}
                    
                    {/* Step marker with pulse animation */}
                    <div className="relative z-10">
                      <motion.div
                        animate={isCurrent ? {
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(239, 68, 68, 0)",
                            "0 0 0 10px rgba(239, 68, 68, 0.1)",
                            "0 0 0 20px rgba(239, 68, 68, 0)"
                          ]
                        } : {}}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                        className={`relative h-8 w-8 rounded-full ${isActive ? "bg-gradient-to-br from-red-500 to-red-600" : "bg-zinc-700"} border-2 ${isActive ? "border-white" : "border-zinc-600"}`}
                      >
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Step card with enhanced animations */}
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          duration: 0.6, 
                          ease,
                          delay: i * 0.1 
                        }
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      animate={isCurrent ? {
                        y: [0, -5, 0],
                        transition: { duration: 2, repeat: Infinity }
                      } : {}}
                      className={`mt-8 w-full max-w-[240px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/10 ${isActive ? "opacity-100" : "opacity-40"}`}
                    >
                      <div className={`relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border ${isActive ? "border-white/20 bg-white/5" : "border-white/5 bg-black/20"} shadow-2xl`}>
                        {/* Gradient accent */}
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                          />
                        )}
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-4 rounded-xl ${isActive ? "bg-white/10" : "bg-zinc-800"}`}>
                              <Icon className={`w-8 h-8 ${isActive ? "text-white" : "text-gray-400"}`} />
                            </div>
                            <span className={`font-mono text-sm ${isActive ? "text-red-400" : "text-gray-500"}`}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          
                          <h3 className={`text-xl font-semibold mb-2 ${isActive ? "text-white" : "text-gray-400"}`}>
                            {step.title}
                          </h3>
                          
                          <p className="text-base text-gray-400 mb-4">
                            {step.description}
                          </p>
                          
                          {isCurrent && (
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-0.5 bg-gradient-to-r from-red-500 to-transparent"
                            />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Active step indicator */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-24 text-center"
          >
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <span className="text-red-400 font-mono">Step {active + 1}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-white font-medium">{steps[active].title}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ width: `${(active + 1) * 20}%` }}
              className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-500"
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>Start</span>
            <span>{Math.round(((active + 1) / steps.length) * 100)}% Complete</span>
            <span>Finish</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}