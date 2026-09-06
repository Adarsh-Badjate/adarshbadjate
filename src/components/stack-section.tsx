"use client";

import { stack } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function StackSection() {
  const { ref, inView } = useInView();

  return (
    <section id="stack" ref={ref} className="pt-22 flex flex-col gap-9">
      <div className="flex flex-col gap-2.5">
        <div className="font-mono text-xs text-orange-700 tracking-[0.06em]">
          STACK
        </div>
        <h2 className="text-3xl font-semibold tracking-tight">
          What I work with
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stack.map((g, gi) => (
          <div
            key={g.group}
            className={`flex flex-col gap-4 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${gi * 120}ms` }}
          >
            <h3 className="font-mono text-xs text-stone-500 tracking-wide">
              {g.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[13px] px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:border-orange-700/40 hover:text-orange-700 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
