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

    // Calculate the max radius needed to cover the entire screen from the button
    const maxRadius = Math.ceil(
      Math.sqrt(
        Math.max(x, window.innerWidth - x) ** 2 +
        Math.max(y, window.innerHeight - y) ** 2
      )
    );

    // Create the overlay
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
      pointer-events: none;
      background: ${nextTheme === "dark" ? "#0f172a" : "#ffffff"};
      clip-path: circle(0px at ${x}px ${y}px);
      transition: clip-path 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    document.body.appendChild(overlay);

    setIsAnimating(true);

    // Trigger the expansion
    requestAnimationFrame(() => {
      overlay.style.clipPath = `circle(${maxRadius}px at ${x}px ${y}px)`;
    });

    // Switch theme midway through the animation
    setTimeout(() => {
      setTheme(nextTheme);
    }, 300);

    // Remove overlay after animation completes
    setTimeout(() => {
      overlay.remove();
      setIsAnimating(false);
    }, 650);
  }, [theme, setTheme, isAnimating]);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:bg-muted"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Moon className="h-4 w-4 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Sun className="h-4 w-4 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
