import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeVista — Vision Through Code",
    template: "%s | CodeVista",
  },
  description:
    "CodeVista is a Pakistan-based tech company offering web development, AI solutions, automation workflows, and social media management. Based in Bahria Town Phase 7, Rawalpindi.",
  keywords: [
    "web development",
    "AI solutions",
    "automation",
    "web design",
    "e-commerce",
    "cloud services",
    "Pakistan",
    "Rawalpindi",
    "CodeVista",
  ],
  openGraph: {
    title: "CodeVista — Vision Through Code",
    description:
      "We build cutting-edge websites, AI-powered solutions, and automation workflows that transform businesses.",
    url: "https://codevista.com",
    siteName: "CodeVista",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
