import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
  MapPin,
  Users,
  Globe,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CodeVista, a Pakistan-based tech company based in Bahria Town Phase 7, Rawalpindi. We specialize in web development, AI solutions, and automation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About CodeVista
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your trusted technology partner, building the future one solution at
            a time
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  CodeVista was founded with a simple yet powerful vision: to
                  make cutting-edge technology accessible to businesses of all
                  sizes. Based in Bahria Town Phase 7, Rawalpindi, Pakistan, we
                  bring together a passionate team of developers, designers, and
                  AI specialists.
                </p>
                <p>
                  We believe that every business deserves a strong digital
                  presence and intelligent automation. Whether you&apos;re a
                  startup looking for your first website or an established
                  enterprise seeking AI-powered solutions, we have the expertise
                  to bring your vision to life.
                </p>
                <p>
                  Our name reflects our approach — &quot;Code&quot; represents
                  our technical foundation, and &quot;Vista&quot; represents the
                  broad vision we bring to every project.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Globe className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">80+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="col-span-2 rounded-xl border border-border bg-card p-6 text-center">
                <MapPin className="mx-auto mb-2 h-8 w-8 text-primary" />
                <div className="text-lg font-semibold text-foreground">
                  Based in Pakistan
                </div>
                <div className="text-sm text-muted-foreground">
                  Serving clients worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <Target className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To empower businesses with innovative digital solutions that
                drive growth, improve efficiency, and create lasting competitive
                advantages in the digital age.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <Eye className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                To be the leading technology partner in Pakistan and beyond,
                recognized for delivering exceptional web and AI solutions that
                transform how businesses operate.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <Lightbulb className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-3 text-xl font-bold text-foreground">
                Our Values
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Innovation, quality, transparency, and client satisfaction guide
                everything we do. We believe in building long-term partnerships
                based on trust and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
            Our Location
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${COMPANY.mapQuery}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CodeVista Location"
            />
          </div>
          <p className="mt-4 text-center text-muted-foreground">
            <MapPin className="mr-1 inline h-4 w-4" />
            {COMPANY.address}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
