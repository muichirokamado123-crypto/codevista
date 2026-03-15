"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useCallback } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);

  const handleToggle = useCallback(() => {
    if (isAnimating || !buttonRef.current) return;

    const nextTheme = theme === "dark" ? "light" : "dark";
    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const maxRadius = Math.ceil(
      Math.sqrt(
        Math.max(x, window.innerWidth - x) ** 2 +
        Math.max(y, window.innerHeight - y) ** 2
      )
    );

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 9999;
      pointer-events: none;
      background: ${nextTheme === "dark" ? "#0f172a" : "#ffffff"};
      clip-path: circle(0px at ${x}px ${y}px);
      will-change: clip-path;
    `;
    document.body.appendChild(overlay);

    setIsAnimating(true);

    // Switch theme immediately (hidden behind overlay at start)
    setTheme(nextTheme);

    // Animate the reveal
    requestAnimationFrame(() => {
      overlay.style.transition = "clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      overlay.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
    });

    // Remove overlay after animation
    setTimeout(() => {
      overlay.remove();
      setIsAnimating(false);
    }, 550);
  }, [theme, setTheme, isAnimating]);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Moon className="h-4 w-4 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Sun className="h-4 w-4 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
