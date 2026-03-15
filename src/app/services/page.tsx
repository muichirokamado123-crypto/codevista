import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CodeVista's comprehensive digital services including web development, AI solutions, automation, e-commerce, cloud services, and social media management.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end digital solutions to help your business thrive in the
            modern world
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col gap-8 scroll-mt-24 lg:flex-row lg:items-start ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual card */}
                <div className="flex w-full items-center justify-center lg:w-72">
                  <div className="flex h-48 w-full items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5">
                    <Icon className="h-20 w-20 text-primary/20" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Need a Custom Solution?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Can&apos;t find exactly what you&apos;re looking for? We specialize
            in building custom solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
