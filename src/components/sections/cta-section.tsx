import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-primary px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Ready to Build Something Amazing?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          Let&apos;s discuss your project and find the perfect solution for your
          business needs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
