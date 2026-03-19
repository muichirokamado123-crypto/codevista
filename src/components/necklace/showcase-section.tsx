"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";

export function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="showcase" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs font-light tracking-[0.3em] text-[#D4AF37] uppercase">
            Exquisite Design
          </p>
          <h2 className="text-4xl font-extralight tracking-[0.1em] text-white sm:text-5xl">
            A Masterpiece in Motion
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                src="/codevista/neckless%20video.mp4"
              />
              <BorderBeam
                size={80}
                duration={8}
                colorFrom="#D4AF37"
                colorTo="#B8860B"
                borderWidth={2}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <h3 className="text-2xl font-light tracking-wide text-white">
              Sculpted with Precision
            </h3>

            <p className="text-base font-light leading-relaxed text-white/50">
              Every link in the Aurora collection is individually shaped and
              polished by master artisans. The result is a necklace that catches
              light from every angle, creating a mesmerizing play of brilliance
              against the skin.
            </p>

            <p className="text-base font-light leading-relaxed text-white/50">
              Designed for those who appreciate the finer things, each piece
              undergoes over 40 hours of meticulous handcrafting before it
              reaches you.
            </p>

            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-3xl font-extralight text-[#D4AF37]">40+</p>
                <p className="mt-1 text-xs tracking-widest text-white/40 uppercase">
                  Hours Crafted
                </p>
              </div>
              <div>
                <p className="text-3xl font-extralight text-[#D4AF37]">18K</p>
                <p className="mt-1 text-xs tracking-widest text-white/40 uppercase">
                  Gold Plated
                </p>
              </div>
              <div>
                <p className="text-3xl font-extralight text-[#D4AF37]">100%</p>
                <p className="mt-1 text-xs tracking-widest text-white/40 uppercase">
                  Handmade
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
