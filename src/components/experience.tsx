"use client";

import { roles, education } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="pt-22 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12"
    >
      <div className="flex flex-col gap-2.5">
        <div className="font-mono text-xs text-orange-700 tracking-[0.06em]">
          EXPERIENCE
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty">
          Where I&apos;ve been
        </h2>
        <p className="text-stone-600 text-[15px] text-pretty">
          Healthcare data, enterprise AI consulting, and now go-to-market
          engineering.
        </p>
      </div>
      <div className="flex flex-col">
        {roles.map((r, i) => (
          <div
            key={r.dates}
            className={`grid grid-cols-[120px_1fr] gap-5 py-5.5 border-t border-stone-200 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="font-mono text-xs text-stone-500 leading-relaxed">
              {r.dates}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[17px] font-semibold tracking-tight">
                {r.title}
              </div>
              <div className="text-sm text-stone-600">
                {r.company} &middot; {r.meta}
              </div>
            </div>
          </div>
        ))}
        <div
          className={`grid grid-cols-[120px_1fr] gap-5 py-5.5 border-t border-stone-200 transition-all duration-500 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          }`}
          style={{ transitionDelay: `${roles.length * 100}ms` }}
        >
          <div className="font-mono text-xs text-stone-500 leading-relaxed">
            {education.dates}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[17px] font-semibold tracking-tight">
              {education.school}
            </div>
            <div className="text-sm text-stone-600">{education.location}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
