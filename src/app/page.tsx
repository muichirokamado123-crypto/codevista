import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Stats } from "@/components/sections/stats";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <ServicesOverview />
      <Stats />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <CTASection />
    </>
  );
}
