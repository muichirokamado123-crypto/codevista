import type { Metadata } from "next";
import { RemotionLayout } from "@/components/remotion/remotion-layout";

export const metadata: Metadata = {
  title: "Remotion Showcase — Scroll-Driven Animation",
  description:
    "A scroll-driven video animation showcase built with Remotion and Next.js.",
};

export default function RemotionPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RemotionLayout>{children}</RemotionLayout>;
}
