"use client";

import { services } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" ref={ref} className="pt-22 flex flex-col gap-9">
      <div className="flex flex-col gap-2.5">
        <div className="font-mono text-xs text-orange-700 tracking-[0.06em]">
          SERVICES
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">
          How I can help
        </h2>
        <p className="text-stone-600 text-base max-w-[560px] text-pretty">
          Fixed-scope projects or ongoing support. You get working systems and
          documentation, not a slide deck.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <div
            key={s.num}
            className={`flex flex-col gap-3 p-6 border border-stone-200 rounded-[14px] bg-white hover:border-orange-700/40 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="font-mono text-xs text-orange-700">{s.num}</div>
            <h3 className="text-lg font-semibold tracking-tight leading-snug">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-stone-600 text-pretty">
              {s.body}
            </p>
            <div className="text-[13px] text-stone-500 mt-auto pt-2">
              Good fit if: {s.fit}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
