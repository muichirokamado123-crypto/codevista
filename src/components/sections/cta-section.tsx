import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Let&apos;s Discuss Your Business
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/75">
          Tell us about your project and we&apos;ll craft a custom solution
          tailored to your goals. No cookie-cutter approaches — just results.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
