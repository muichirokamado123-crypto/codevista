"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { Player, type PlayerRef } from "@remotion/player";
import { NecklaceScroll } from "@/remotion/compositions/NecklaceScroll";

const DURATION_IN_FRAMES = 360;
const FPS = 30;
const COMPOSITION_WIDTH = 1920;
const COMPOSITION_HEIGHT = 1080;

export function ScrollPlayer() {
  const playerRef = useRef<PlayerRef>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

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

      // Sync Remotion Player frame
      const frame = Math.round(progress * (DURATION_IN_FRAMES - 1));
      playerRef.current?.seekTo(frame);

      // Sync native video currentTime
      const video = videoRef.current;
      if (video && video.duration) {
        video.currentTime = progress * video.duration;
      }
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
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Native video — background, always visible */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={() => setVideoReady(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          src="/codevista/neckless%20video.mp4"
        />

        {/* Remotion Player — overlay for text animations */}
        {videoReady && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <style>{`
              .remotion-overlay-player,
              .remotion-overlay-player > div,
              .remotion-overlay-player > div > div,
              .remotion-overlay-player > div > div > div {
                background: transparent !important;
                background-color: transparent !important;
              }
            `}</style>
            <Player
              ref={playerRef}
              component={NecklaceScroll}
              compositionWidth={COMPOSITION_WIDTH}
              compositionHeight={COMPOSITION_HEIGHT}
              durationInFrames={DURATION_IN_FRAMES}
              fps={FPS}
              className="remotion-overlay-player"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
              }}
              controls={false}
              autoPlay={false}
              loop={false}
              acknowledgeRemotionLicense
            />
          </div>
        )}
      </div>
    </div>
  );
}
