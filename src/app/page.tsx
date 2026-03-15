import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Stats } from "@/components/sections/stats";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TechStack } from "@/components/sections/tech-stack";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Stats />
      <WhyChooseUs />
      <TechStack />
      <CTASection />
    </>
  );
}
