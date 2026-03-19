"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";
import { NumberTicker } from "@/components/ui/number-ticker";
import Link from "next/link";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="purchase" className="relative px-6 py-40">
      <Particles
        className="absolute inset-0"
        quantity={30}
        color="#D4AF37"
        ease={80}
        size={0.6}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs font-light tracking-[0.3em] text-[#D4AF37] uppercase"
        >
          Limited Edition
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-extralight tracking-[0.1em] text-white sm:text-6xl"
        >
          Own the Moment
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-white/50"
        >
          Each Aurora necklace is a limited-edition piece, individually numbered
          and accompanied by a certificate of authenticity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-baseline justify-center gap-1"
        >
          <span className="text-2xl font-light text-white/40">$</span>
          <span className="text-6xl font-extralight text-white">
            <NumberTicker value={249} className="text-white" />
          </span>
          <span className="ml-2 text-sm font-light text-white/30">.00</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <ShimmerButton
            shimmerColor="#D4AF37"
            background="rgba(212, 175, 55, 0.15)"
            className="h-14 px-12 text-sm font-light tracking-[0.2em] uppercase"
          >
            Purchase Now
          </ShimmerButton>

          <Link
            href="/contact"
            className="text-xs font-light tracking-[0.2em] text-white/40 uppercase transition-colors hover:text-[#D4AF37]"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-xs font-light text-white/20"
        >
          Free worldwide shipping &middot; 30-day returns &middot; Lifetime
          warranty
        </motion.p>
      </div>
    </section>
  );
}
