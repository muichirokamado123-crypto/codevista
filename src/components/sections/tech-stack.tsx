"use client";

import { Marquee } from "@/components/ui/marquee";
import { TECH_STACK } from "@/lib/constants";

export function TechStack() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Technologies We Work With
        </h2>
        <Marquee pauseOnHover className="[--duration:30s]">
          {TECH_STACK.map((tech) => (
            <div
              key={tech}
              className="mx-4 flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              {tech}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
