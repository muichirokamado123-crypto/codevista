"use client";

import { useEffect, useRef, useCallback } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { NecklaceScroll } from "@/remotion/compositions/NecklaceScroll";

const DURATION_IN_FRAMES = 360;
const FPS = 30;
const COMPOSITION_WIDTH = 1920;
const COMPOSITION_HEIGHT = 1080;

export function ScrollPlayer() {
  const playerRef = useRef<PlayerRef>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const section = sectionRef.current;
      const container = document.querySelector("[data-remotion-scroll]");
      if (!section || !container) return;

      const rect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const sectionTop = rect.top - containerRect.top;
      const scrollableHeight = rect.height - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.min(
        Math.max(-sectionTop / scrollableHeight, 0),
        1
      );
      const frame = Math.round(progress * (DURATION_IN_FRAMES - 1));

      playerRef.current?.seekTo(frame);
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector("[data-remotion-scroll]");
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <div ref={sectionRef} style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Player
          ref={playerRef}
          component={NecklaceScroll}
          compositionWidth={COMPOSITION_WIDTH}
          compositionHeight={COMPOSITION_HEIGHT}
          durationInFrames={DURATION_IN_FRAMES}
          fps={FPS}
          style={{ width: "100%", height: "100%" }}
          controls={false}
          autoPlay={false}
          loop={false}
          acknowledgeRemotionLicense
          renderLoading={() => (
            <div className="flex h-full w-full items-center justify-center bg-black">
              <p className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase">
                Loading...
              </p>
            </div>
          )}
        />
      </div>
    </div>
  );
}
