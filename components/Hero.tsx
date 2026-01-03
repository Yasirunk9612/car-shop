"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -24]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const setSafariFriendlyAutoplayAttrs = (v: HTMLVideoElement) => {
    // iOS Safari is picky: setting both properties + attributes helps.
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("autoplay", "");
    v.setAttribute("loop", "");
    v.preload = "auto";
  };

  const tryPlay = async (v: HTMLVideoElement) => {
    // Multiple attempts reduce first-load flakiness across browsers.
    setSafariFriendlyAutoplayAttrs(v);
    try {
      await v.play();
      return true;
    } catch {
      // Retry a couple times with small delays
      await new Promise((r) => setTimeout(r, 150));
      try {
        await v.play();
        return true;
      } catch {
        await new Promise((r) => setTimeout(r, 300));
        try {
          await v.play();
          return true;
        } catch {
          return false;
        }
      }
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    setSafariFriendlyAutoplayAttrs(v);

    // Attempt immediately, then again on key readiness events.
    void tryPlay(v);

    const onCanPlay = () => {
      setVideoLoaded(true);
      void tryPlay(v);
    };
    const onLoadedData = () => {
      setVideoLoaded(true);
      void tryPlay(v);
    };

    v.addEventListener("canplay", onCanPlay);
    v.addEventListener("loadeddata", onLoadedData);

    // Some platforms only allow autoplay after a gesture.
    const onFirstInteraction = () => {
      void tryPlay(v);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
    };
    window.addEventListener("touchstart", onFirstInteraction, { passive: true });
    window.addEventListener("click", onFirstInteraction);

    return () => {
      v.removeEventListener("canplay", onCanPlay);
      v.removeEventListener("loadeddata", onLoadedData);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
    };
  }, []);

  const handleQuoteClick = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const headingVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 14 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    }),
    []
  );

  const subVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.15 } },
    }),
    []
  );

  const ctaVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.3 } },
    }),
    []
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen overflow-hidden">
      {/* Video Background */}
      {!videoError ? (
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          ref={videoRef}
          onError={() => setVideoError(true)}
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          controls={false}
          disablePictureInPicture
        />
      ) : (
        <div className="absolute inset-0 japanese-pattern" />
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Loading overlay removed per request */}

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex items-center justify-center min-h-[90vh] md:min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={headingVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight glow-outer"
          >
            <span className="gradient-text">DK Motors</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={subVariants}
            className="mt-6 text-gray-300 text-lg md:text-xl"
          >
            Authentic Japanese performance cars & motorcycles. Imported with precision.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={ctaVariants}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <button
              onClick={handleQuoteClick}
              className="px-5 py-3 rounded-lg bg-red-600 text-white shadow-lg neon-red-soft neon-hover transition hover:bg-red-700"
            >
              Get a Quote
            </button>
            <a href="#services" className="px-5 py-3 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
              Explore Services
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
