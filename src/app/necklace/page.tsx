import { HeroSection } from "@/components/necklace/hero-section";
import { ShowcaseSection } from "@/components/necklace/showcase-section";
import { FeaturesSection } from "@/components/necklace/features-section";
import { StorySection } from "@/components/necklace/story-section";
import { SpecsSection } from "@/components/necklace/specs-section";
import { CtaSection } from "@/components/necklace/cta-section";

export default function NecklacePage() {
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <StorySection />
      <SpecsSection />
      <CtaSection />
    </>
  );
}
