"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function RemotionLayout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const total = scrollHeight - clientHeight;
      if (total > 0) setProgress(scrollTop / total);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      data-remotion-scroll
      className="fixed inset-0 z-[100] overflow-y-auto bg-black"
    >
      {/* Scroll progress bar */}
      <div className="fixed top-0 right-0 left-0 z-[110] h-[2px]">
        <div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: "linear-gradient(to right, #B8860B, #D4AF37, #F4D03F)",
            transition: "width 0.1s ease-out",
          }}
        />
      </div>

      {/* Minimal navbar */}
      <nav className="fixed top-0 right-0 left-0 z-[105] flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-light tracking-[0.2em] text-white/50 uppercase hover:text-white/80"
        >
          &larr; Back
        </Link>
        <span className="text-xs font-light tracking-[0.3em] text-[#D4AF37]/60 uppercase">
          Remotion Showcase
        </span>
      </nav>

      {children}
    </div>
  );
}
