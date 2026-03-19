"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const paragraphs = [
  "Born from a passion for timeless elegance, the Aurora Collection represents the pinnacle of contemporary jewelry design. Every piece begins as a sketch, refined through dozens of iterations until perfection is achieved.",
  "Our master artisans, with decades of combined experience, bring each design to life using techniques passed down through generations — blending traditional goldsmithing with modern precision.",
  "The name Aurora was chosen to reflect the ethereal beauty of the northern lights — a natural phenomenon that, like our jewelry, captivates and inspires awe in all who witness it.",
];

export function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="relative px-6 py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-xs font-light tracking-[0.3em] text-[#D4AF37] uppercase"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl font-extralight tracking-[0.1em] text-white sm:text-5xl"
            >
              The Art of
              <br />
              <span className="text-[#D4AF37]">Craftsmanship</span>
            </motion.h2>

            <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="text-base font-light leading-relaxed text-white/50"
              >
                {text}
              </motion.p>
            ))}

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="border-l-2 border-[#D4AF37]/40 pl-6 italic"
            >
              <p className="text-lg font-light text-[#D4AF37]/80">
                &ldquo;Every piece we create is a love letter to the person who
                will wear it.&rdquo;
              </p>
              <footer className="mt-3 text-xs tracking-widest text-white/30 uppercase">
                — Master Artisan
              </footer>
            </motion.blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover opacity-60"
                src="/codevista/neckless%20video.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>

            {/* Decorative gold ring */}
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-[#D4AF37]/10" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border border-[#D4AF37]/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
