"use client";

import { cases } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function CaseStudies() {
  const { ref, inView } = useInView();

  return (
    <section id="work" ref={ref} className="pt-12 md:pt-22 flex flex-col gap-5 md:gap-9">
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[11px] md:text-xs text-orange-700 tracking-[0.06em]">
          SELECTED WORK
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          Problems I&apos;ve solved for real teams
        </h2>
        <p className="hidden md:block text-stone-600 text-base max-w-[560px] text-pretty">
          Less about tools, more about what changed for the people relying on
          the data.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        {cases.map((c, i) => (
          <article
            key={c.title}
            className={`bg-white border border-stone-200 rounded-xl md:rounded-[14px] p-5 md:p-7 flex flex-col gap-2.5 md:gap-4 hover:border-orange-700/40 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex justify-between items-center font-mono text-[11px] md:text-xs text-stone-500">
              <span>{c.company}</span>
              <span>{c.year}</span>
            </div>
            <div className="text-[30px] md:text-4xl font-semibold tracking-tight text-orange-700 leading-none">
              {c.metric}
            </div>
            <h3 className="text-base md:text-[19px] font-semibold tracking-tight leading-snug text-pretty">
              {c.title}
            </h3>
            <p className="text-[13px] md:text-[15px] leading-relaxed text-stone-600 text-pretty">
              {c.body}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-0.5">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] md:text-[11px] px-1.5 md:px-2 py-1 rounded-[5px] bg-stone-100 text-stone-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
