"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "CodeVista transformed our online presence completely. Their team delivered a stunning website that increased our conversions by 40%. The attention to detail and technical expertise was outstanding.",
    name: "Ahmed Khan",
    role: "CEO, TechNova Solutions",
  },
  {
    quote:
      "The AI chatbot they built for our WhatsApp handles 70% of customer queries automatically. Our response time went from hours to seconds. Truly game-changing for our business.",
    name: "Sarah Malik",
    role: "Founder, SwiftLogix",
  },
  {
    quote:
      "Working with CodeVista felt like having an in-house tech team. They understood our e-commerce needs perfectly and delivered a platform that handles thousands of orders daily without a hitch.",
    name: "Usman Raza",
    role: "Director, GreenByte Store",
  },
  {
    quote:
      "Their automation workflows saved us over 20 hours per week. The N8N integrations they set up connected all our tools seamlessly. Best investment we made this year.",
    name: "Fatima Noor",
    role: "Operations Lead, DataStream",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[current];

  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What Our Clients Say
        </h2>
        <p className="mb-12 text-center text-foreground/60">
          Real feedback from businesses we&apos;ve helped grow
        </p>

        <div className="relative">
          <div className="min-h-[260px] overflow-hidden rounded-2xl border border-border bg-muted/30 px-8 py-10 sm:px-14 sm:py-12">
            <Quote className="mb-6 h-8 w-8 text-primary/30" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <blockquote className="mb-8 text-lg leading-relaxed text-foreground/80 sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-foreground/50">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-primary"
                      : "w-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
