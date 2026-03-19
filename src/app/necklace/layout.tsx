import type { Metadata } from "next";
import { NecklaceLayout } from "@/components/necklace/necklace-layout";

export const metadata: Metadata = {
  title: "The Aurora Collection — Handcrafted Elegance",
  description:
    "Discover the Aurora Collection — exquisite 18K gold-plated necklaces, handcrafted by master artisans. Limited edition, lifetime warranty.",
};

export default function NecklacePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NecklaceLayout>{children}</NecklaceLayout>;
}
