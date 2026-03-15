"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Particles } from "@/components/ui/particles";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <Particles
        className="absolute inset-0"
        quantity={60}
        color="#2563eb"
        ease={80}
        refresh
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm text-muted-foreground">
          Pakistan&apos;s Premier Tech Partner
        </div>

        <TextAnimate
          as="h1"
          animation="blurInUp"
          by="word"
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          We Build Digital Solutions That Drive Growth
        </TextAnimate>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          From stunning websites to AI-powered automation, we craft technology
          solutions that transform your business and keep you ahead of the
          competition.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <ShimmerButton className="h-12 px-8 text-base font-semibold">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </ShimmerButton>
          </Link>
          <Link
            href="/services"
            className="inline-flex h-12 items-center rounded-lg border border-border bg-background px-8 text-base font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
