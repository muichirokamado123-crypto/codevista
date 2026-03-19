"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const container = document.querySelector("[data-necklace-scroll]");
    if (!video || !section || !container) return;

    // Wait for video metadata to load so we know its duration
    const onLoaded = () => {
      const handleScroll = () => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const sectionTop = rect.top - containerRect.top;
        const scrollableHeight = rect.height - window.innerHeight;

        if (scrollableHeight <= 0) return;

        // How far through this section have we scrolled (0 to 1)
        const progress = Math.min(
          Math.max(-sectionTop / scrollableHeight, 0),
          1
        );

        video.currentTime = progress * video.duration;
      };

      container.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // set initial frame

      return () => container.removeEventListener("scroll", handleScroll);
    };

    if (video.readyState >= 1) {
      const cleanup = onLoaded();
      return cleanup;
    }

    video.addEventListener("loadedmetadata", onLoaded, { once: true });
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const container = document.querySelector("[data-necklace-scroll]");
    const target = document.querySelector("#showcase");
    if (container && target) {
      const top =
        target.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "300vh" }}
    >
      {/* Sticky video container */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          src="/codevista/neckless%20video.mp4"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 text-xs font-light tracking-[0.3em] text-[#D4AF37] uppercase"
          >
            Handcrafted Elegance
          </motion.p>

          <TextAnimate
            as="h1"
            animation="blurInUp"
            by="word"
            delay={0.5}
            className="text-5xl font-extralight leading-tight tracking-[0.15em] text-white sm:text-6xl lg:text-7xl"
          >
            The Aurora Collection
          </TextAnimate>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mx-auto mt-8 max-w-xl text-base font-light leading-relaxed text-white/60 sm:text-lg"
          >
            Where timeless artistry meets modern sophistication. Each piece
            tells a story of meticulous craftsmanship and enduring beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-10"
          >
            <ShimmerButton
              shimmerColor="#D4AF37"
              background="rgba(212, 175, 55, 0.12)"
              className="h-14 px-10 text-sm font-light tracking-[0.2em] uppercase"
              onClick={handleScrollClick}
            >
              Discover More
            </ShimmerButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
