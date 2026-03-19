"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const specs = [
  { label: "Material", value: "Sterling Silver, 18K Gold Plating" },
  { label: "Chain Length", value: '18" / 45cm (adjustable)' },
  { label: "Pendant Size", value: "15mm x 12mm" },
  { label: "Weight", value: "8.5 grams" },
  { label: "Clasp Type", value: "Lobster Claw" },
  { label: "Finish", value: "High Polish, Mirror Finish" },
  { label: "Stone", value: "AAA Cubic Zirconia" },
  { label: "Packaging", value: "Luxury Gift Box Included" },
];

export function SpecsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specs" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.3em] text-[#D4AF37] uppercase">
            Product Details
          </p>
          <h2 className="text-4xl font-extralight tracking-[0.1em] text-white sm:text-5xl">
            Specifications
          </h2>
        </motion.div>

        <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm sm:p-12">
          <div className="space-y-0">
            {specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className={`flex items-center justify-between py-5 ${
                  i < specs.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="text-xs font-light tracking-[0.2em] text-white/40 uppercase">
                  {spec.label}
                </span>
                <span className="text-sm font-light text-white/80">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
