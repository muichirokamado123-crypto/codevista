"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const sections = [
  { label: "Showcase", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "Story", href: "#story" },
  { label: "Specs", href: "#specs" },
];

export function NecklaceNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector("[data-necklace-scroll]");
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 80);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const container = document.querySelector("[data-necklace-scroll]");
    const target = document.querySelector(href);
    if (container && target) {
      const top =
        target.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-light tracking-widest text-white/70 uppercase transition-colors hover:text-[#D4AF37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              onClick={(e) => handleAnchorClick(e, s.href)}
              className="text-xs font-light tracking-[0.2em] text-white/50 uppercase transition-colors hover:text-[#D4AF37]"
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          href="#purchase"
          onClick={(e) => handleAnchorClick(e, "#purchase")}
          className="rounded-full border border-[#D4AF37]/30 px-5 py-2 text-xs font-light tracking-widest text-[#D4AF37] uppercase transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          Shop Now
        </a>
      </div>
    </motion.nav>
  );
}
