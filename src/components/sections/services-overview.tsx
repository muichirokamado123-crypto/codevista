"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <MagicCard
                key={service.id}
                className="flex flex-col p-6"
                gradientColor="#2563eb10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
