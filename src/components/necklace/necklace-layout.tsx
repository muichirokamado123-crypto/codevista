"use client";

import { useEffect } from "react";
import { NecklaceNavbar } from "./necklace-navbar";
import { ScrollProgress } from "./scroll-progress";

export function NecklaceLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      data-necklace-scroll
      className="fixed inset-0 z-[100] overflow-y-auto bg-black"
      style={{ scrollBehavior: "smooth" }}
    >
      <ScrollProgress />
      <NecklaceNavbar />
      {children}
    </div>
  );
}
