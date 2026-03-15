"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useCallback } from "react";
import { Sun, Moon, Undo2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showUndo, setShowUndo] = useState(false);
  const [prevTheme, setPrevTheme] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const undoTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => setMounted(true), []);

  // Clear undo timer on unmount
  useEffect(() => {
    return () => {
      if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    };
  }, []);

  const animateThemeSwitch = useCallback((fromTheme: string, toTheme: string, triggerRef: HTMLButtonElement) => {
    const rect = triggerRef.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const size = 20;
    const maxDistance = Math.sqrt(
      Math.max(cx, window.innerWidth - cx) ** 2 +
      Math.max(cy, window.innerHeight - cy) ** 2
    );
    const scale = Math.ceil((maxDistance * 2) / size);

    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      left: ${cx - size / 2}px;
      top: ${cy - size / 2}px;
      z-index: 9999;
      pointer-events: none;
      border-radius: 50%;
      background: ${toTheme === "dark" ? "#0f172a" : "#ffffff"};
      transform: scale(0);
      will-change: transform;
    `;
    document.body.appendChild(overlay);

    setIsAnimating(true);

    requestAnimationFrame(() => {
      overlay.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      overlay.style.transform = `scale(${scale})`;
    });

    setTimeout(() => {
      setTheme(toTheme);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          overlay.style.transition = "opacity 0.3s ease";
          overlay.style.opacity = "0";
          setTimeout(() => {
            overlay.remove();
            setIsAnimating(false);
          }, 300);
        });
      });
    }, 420);
  }, [setTheme]);

  const handleToggle = useCallback(() => {
    if (isAnimating || !buttonRef.current) return;

    const current = theme ?? "light";
    const nextTheme = current === "dark" ? "light" : "dark";

    setPrevTheme(current);
    animateThemeSwitch(current, nextTheme, buttonRef.current);

    // Show undo button for 5 seconds
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    setShowUndo(true);
    undoTimerRef.current = setTimeout(() => {
      setShowUndo(false);
      setPrevTheme(null);
    }, 5000);
  }, [theme, isAnimating, animateThemeSwitch]);

  const handleUndo = useCallback(() => {
    if (isAnimating || !prevTheme || !buttonRef.current) return;

    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    setShowUndo(false);

    animateThemeSwitch(theme ?? "light", prevTheme, buttonRef.current);
    setPrevTheme(null);
  }, [theme, prevTheme, isAnimating, animateThemeSwitch]);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <>
      {/* Undo toast at bottom center */}
      <AnimatePresence>
        {showUndo && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={handleUndo}
            className="fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 shadow-lg hover:bg-muted"
            aria-label="Undo theme change"
          >
            <Undo2 className="h-4 w-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">Undo</span>
          </motion.button>
        )}
      </AnimatePresence>

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
    </>
  );
}
