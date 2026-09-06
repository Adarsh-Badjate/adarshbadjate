import { siteConfig } from "@/data/portfolio";
import { CTAOrb } from "@/components/orbs";

export function CTA() {
  return (
    <section className="mt-24">
      <div className="relative overflow-hidden bg-stone-900 text-stone-50 rounded-[20px] py-14 px-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
        <CTAOrb />
        <div className="relative flex flex-col gap-3">
          <h2 className="text-[34px] font-semibold tracking-tight text-pretty">
            {siteConfig.ctaHeading}
          </h2>
          <p className="text-stone-400 text-base max-w-[520px] text-pretty">
            {siteConfig.ctaBody}
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="relative inline-flex items-center bg-orange-700 hover:bg-orange-600 text-white px-6 py-3.5 rounded-lg text-[15px] font-medium whitespace-nowrap transition-colors"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  );
}
