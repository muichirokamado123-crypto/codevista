"use client";

import { CheckCircle, Zap, Shield, HeadphonesIcon } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const REASONS = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We work efficiently to deliver your projects on time without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Built with security best practices and hosted on reliable cloud infrastructure.",
  },
  {
    icon: CheckCircle,
    title: "Quality First",
    description:
      "Every project goes through rigorous testing and quality assurance before delivery.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "Our team provides ongoing support and maintenance to keep your solutions running smoothly.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose CodeVista?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine technical expertise with a client-first approach to
            deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-6"
              >
                <BorderBeam size={150} duration={8} />
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
