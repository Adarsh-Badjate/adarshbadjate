"use client";

import { certs } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="pt-22 flex flex-col gap-9">
      <div className="flex flex-col gap-2.5">
        <div className="font-mono text-xs text-orange-700 tracking-[0.06em]">
          CERTIFICATIONS
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">
          6&times; Dataiku certified
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {certs.map((c, i) => (
          <div
            key={c.name}
            className={`flex flex-col gap-2 p-4 rounded-xl border border-stone-200 bg-white transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="text-sm font-medium text-stone-900 leading-snug">
              {c.name}
            </div>
            <div className="font-mono text-[11px] text-stone-400">{c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
