"use client";

import { roles, education } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="pt-12 md:pt-22 flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-5 md:gap-12"
    >
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[11px] md:text-xs text-orange-700 tracking-[0.06em]">
          EXPERIENCE
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-pretty">
          Where I&apos;ve been
        </h2>
        <p className="hidden md:block text-stone-600 text-[15px] text-pretty">
          Healthcare data, enterprise AI consulting, and now go-to-market
          engineering.
        </p>
      </div>
      <div className="flex flex-col">
        {roles.map((r, i) => (
          <div
            key={r.dates}
            className={`flex flex-col md:grid md:grid-cols-[120px_1fr] gap-1 md:gap-5 py-4 md:py-5.5 border-t border-stone-200 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="font-mono text-[11px] md:text-xs text-stone-500 leading-relaxed">
              {r.dates}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[15px] md:text-[17px] font-semibold tracking-tight">
                <span className="md:hidden">{r.title} &middot; {r.company}</span>
                <span className="hidden md:inline">{r.title}</span>
              </div>
              <div className="text-[13px] md:text-sm text-stone-600 leading-snug">
                <span className="hidden md:inline">{r.company} &middot; </span>
                {r.meta}
              </div>
            </div>
          </div>
        ))}
        <div
          className={`flex flex-col md:grid md:grid-cols-[120px_1fr] gap-1 md:gap-5 py-4 md:py-5.5 border-t border-b md:border-b-0 border-stone-200 transition-all duration-500 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
          style={{ transitionDelay: `${roles.length * 100}ms` }}
        >
          <div className="font-mono text-[11px] md:text-xs text-stone-500 leading-relaxed">
            {education.dates}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[15px] md:text-[17px] font-semibold tracking-tight">
              {education.school}
            </div>
            <div className="text-[13px] md:text-sm text-stone-600">{education.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
