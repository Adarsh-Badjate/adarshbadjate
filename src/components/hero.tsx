import { siteConfig } from "@/data/portfolio";
import { HeroOrb, DotOrb } from "@/components/orbs";

export function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-12 md:gap-12 items-center pt-9 md:pt-22 pb-8 md:pb-18"
    >
      {/* Mobile: status line first */}
      <div className="flex flex-col gap-4.5 md:gap-6 order-2 md:order-1">
        <div className="inline-flex items-center gap-2.5 font-mono text-[11px] md:text-xs text-stone-600">
          <DotOrb />
          <span className="md:hidden">
            {siteConfig.availability} &middot; {siteConfig.mode}
          </span>
          <span className="hidden md:inline">
            {siteConfig.availability} &middot; {siteConfig.location} &middot;{" "}
            {siteConfig.mode}
          </span>
        </div>
        <h1 className="text-[32px] md:text-[clamp(38px,5.5vw,60px)] leading-[1.08] md:leading-[1.05] tracking-[-0.03em] font-semibold text-pretty">
          Freelance data engineer for teams that need{" "}
          <span className="text-orange-700">
            pipelines, automation and AI agents that just work.
          </span>
        </h1>
        <p className="text-[15px] md:text-lg leading-relaxed text-stone-600 max-w-[680px] text-pretty">
          <span className="md:hidden">
            I help startups and small teams turn scattered data into reliable
            pipelines, dashboards and LLM-powered workflows &mdash; without
            hiring a full data team. Day job: GTM Engineer at{" "}
            <a
              href={siteConfig.felloUrl}
              className="underline underline-offset-2 hover:text-orange-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fello
            </a>
            .
          </span>
          <span className="hidden md:inline">
            Hi, I&apos;m Adarsh. I help startups and small teams turn scattered
            data into reliable pipelines, dashboards and LLM-powered workflows
            &mdash; without hiring a full data team. Day job: GTM Engineer at{" "}
            <a
              href={siteConfig.felloUrl}
              className="underline underline-offset-2 hover:text-orange-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fello
            </a>
            ; before that, healthcare data engineering at 99.8% reliability.
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-2.5 md:gap-3 pt-1 md:pt-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex md:inline-flex justify-center items-center min-h-12 md:min-h-0 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
          >
            Book a free 30-min call
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-badjate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex md:hidden justify-center items-center min-h-12 border border-stone-300 text-stone-900 px-6 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#services"
            className="hidden md:inline-flex items-center border border-stone-300 hover:border-stone-900 text-stone-900 px-6 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
          >
            See what I do
          </a>
        </div>
      </div>

      {/* Orb - centered on mobile, right on desktop */}
      <div className="flex flex-col items-center gap-3.5 order-1 md:order-2">
        <div className="h-[150px] md:h-[330px] w-[150px] md:w-[280px] rounded-2xl flex items-center justify-center overflow-visible">
          <HeroOrb />
        </div>
        <div className="hidden md:block font-mono text-[11px] text-stone-400">
          {siteConfig.email}
        </div>
      </div>
    </section>
  );
}
