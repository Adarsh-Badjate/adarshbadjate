import { siteConfig } from "@/data/portfolio";
import { HeroOrb, DotOrb } from "@/components/orbs";

export function Hero() {
  return (
    <section
      id="top"
      className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center pt-22 pb-18"
    >
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2.5 font-mono text-xs text-stone-600">
          <DotOrb />
          {siteConfig.availability} &middot; {siteConfig.location} &middot;{" "}
          {siteConfig.mode}
        </div>
        <h1 className="text-[clamp(38px,5.5vw,60px)] leading-[1.05] tracking-[-0.03em] font-semibold text-pretty">
          Freelance data engineer for teams that need{" "}
          <span className="text-orange-700">
            pipelines, automation and AI agents that just work.
          </span>
        </h1>
        <p className="text-lg leading-relaxed text-stone-600 max-w-[680px] text-pretty">
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
        </p>
        <div className="flex gap-3 flex-wrap pt-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center bg-orange-700 hover:bg-orange-800 text-white px-6 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
          >
            Book a free 30-min call
          </a>
          <a
            href="#services"
            className="inline-flex items-center border border-stone-300 hover:border-stone-900 text-stone-900 px-6 py-3.5 rounded-lg text-[15px] font-medium transition-colors"
          >
            See what I do
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3.5">
        <div className="w-[280px] h-[330px] rounded-2xl flex items-center justify-center overflow-visible">
          <HeroOrb />
        </div>
        <div className="font-mono text-[11px] text-stone-400">
          {siteConfig.email}
        </div>
      </div>
    </section>
  );
}
