import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CodeVista. We'd love to hear about your project and discuss how we can help your business grow.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? Let&apos;s discuss how we can help bring
            your ideas to life.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of the following channels. We
                  typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Email
                    </h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Phone
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Address
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      Business Hours
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Mon – Fri: 9:00 AM – 6:00 PM (PKT)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sat: 10:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
