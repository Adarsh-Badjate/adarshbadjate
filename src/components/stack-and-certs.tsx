"use client";

import { stack, certs } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function StackAndCerts() {
  const { ref, inView } = useInView();

  return (
    <section
      id="stack"
      ref={ref}
      className="pt-12 md:pt-22 flex flex-col md:grid md:grid-cols-[1fr_1fr] gap-10 md:gap-12"
    >
      {/* Stack */}
      <div
        className={`flex flex-col gap-4 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="font-mono text-[11px] md:text-xs text-orange-700 tracking-[0.06em]">
          STACK
        </div>
        <h2 className="hidden md:block text-3xl font-semibold tracking-tight">
          What I work with
        </h2>
        <div className="flex flex-col gap-3">
          {stack.map((g) => (
            <div key={g.group} className="flex flex-col gap-1.5">
              <div className="text-xs md:text-[13px] text-stone-500">{g.group}</div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs md:text-[13px] px-2.5 md:px-3 py-1.5 rounded-md border border-stone-200 bg-white text-stone-900 hover:border-orange-700/40 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div
        className={`flex flex-col gap-3 md:gap-5 transition-all duration-500 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: "120ms" }}
      >
        <div className="font-mono text-[11px] md:text-xs text-orange-700 tracking-[0.06em]">
          CERTIFICATIONS
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          6&times; Dataiku certified
        </h2>
        <div className="flex flex-col">
          {certs.map((c) => (
            <div
              key={c.name}
              className="flex justify-between gap-3 py-2.5 border-b border-stone-200 text-[13px] md:text-sm"
            >
              <span>{c.name}</span>
              <span className="font-mono text-[11px] md:text-xs text-stone-500 whitespace-nowrap">
                {c.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
