import { siteConfig } from "@/data/portfolio";
import { CTAOrb } from "@/components/orbs";

export function CTA() {
  return (
    <section className="mt-12 md:mt-24">
      <div className="relative overflow-hidden bg-stone-900 text-stone-50 rounded-2xl md:rounded-[20px] p-7 md:py-14 md:px-12 flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4 md:gap-8 md:items-center">
        <CTAOrb />
        <div className="relative flex flex-col gap-2.5 md:gap-3">
          <h2 className="text-2xl md:text-[34px] font-semibold tracking-tight text-pretty">
            {siteConfig.ctaHeading}
          </h2>
          <p className="text-stone-400 text-sm md:text-base max-w-[520px] leading-relaxed text-pretty">
            Tell me what&apos;s broken or missing. I&apos;ll reply within a day
            with an honest take on scope and timeline.
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="relative flex md:inline-flex justify-center items-center min-h-12 md:min-h-0 bg-orange-700 hover:bg-orange-600 text-white px-6 py-3.5 rounded-lg text-sm md:text-[15px] font-medium whitespace-nowrap transition-colors"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
