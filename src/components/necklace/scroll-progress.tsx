"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const container = document.querySelector("[data-necklace-scroll]");
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const p = scrollTop / (scrollHeight - clientHeight);
      setProgress(p);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    scaleX.set(progress);
  }, [progress, scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #B8860B, #D4AF37, #F4D03F, #D4AF37, #B8860B)",
      }}
    />
  );
}
