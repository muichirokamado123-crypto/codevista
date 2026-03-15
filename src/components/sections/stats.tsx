"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary-foreground sm:text-5xl">
                <NumberTicker
                  value={stat.value}
                  className="text-primary-foreground"
                />
                +
              </div>
              <div className="mt-2 text-sm font-medium text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
