"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Gem, Shield, Sparkles, Heart } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const features = [
  {
    icon: Gem,
    title: "18K Gold Plated",
    description:
      "Layered with premium 18-karat gold for a rich, lasting finish that resists tarnishing and maintains its luster.",
  },
  {
    icon: Shield,
    title: "Hypoallergenic",
    description:
      "Crafted with nickel-free materials and surgical-grade base metals, safe for even the most sensitive skin.",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Detail",
    description:
      "Each piece is individually shaped, polished, and inspected by skilled artisans to ensure flawless quality.",
  },
  {
    icon: Heart,
    title: "Lifetime Warranty",
    description:
      "We stand behind every piece with a comprehensive lifetime warranty covering craftsmanship and materials.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative px-6 py-32">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.3em] text-[#D4AF37] uppercase">
            Why Choose Aurora
          </p>
          <h2 className="text-4xl font-extralight tracking-[0.1em] text-white sm:text-5xl">
            Uncompromising Quality
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="rounded-2xl"
            >
              <MagicCard
                className="h-full rounded-2xl border-white/5 bg-white/[0.02]"
                gradientFrom="#D4AF37"
                gradientTo="#B8860B"
                gradientColor="rgba(212,175,55,0.08)"
              >
                <div className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                    <feature.icon className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="mb-3 text-lg font-light tracking-wide text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-white/40">
                    {feature.description}
                  </p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
