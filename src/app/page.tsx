import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { AgentsSection } from "@/components/agents-section";
import { Experience } from "@/components/experience";
import { StackAndCerts } from "@/components/stack-and-certs";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-[1440px] mx-auto px-[clamp(24px,5vw,80px)] pb-24">
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <AgentsSection />
        <Experience />
        <StackAndCerts />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
