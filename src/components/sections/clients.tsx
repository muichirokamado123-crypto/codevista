"use client";

import { Marquee } from "@/components/ui/marquee";

const CLIENTS = [
  "TechNova",
  "Aether Labs",
  "PakDigital",
  "SwiftLogix",
  "CloudPeak",
  "DataStream",
  "FinEdge",
  "GreenByte",
  "NexGen AI",
  "Orbis Tech",
  "ProScale",
  "QuantumIO",
  "RiseUp Co",
  "SmartGrid",
  "VoltSphere",
];

export function Clients() {
  return (
    <section className="border-y border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-foreground/50">
          Trusted by businesses across Pakistan & beyond
        </p>
        <Marquee pauseOnHover className="[--duration:25s]">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="mx-6 flex items-center text-lg font-semibold text-foreground/30 transition-colors hover:text-foreground/60"
            >
              {client}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
