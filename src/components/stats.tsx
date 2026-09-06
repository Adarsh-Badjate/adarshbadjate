"use client";

import { stats } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";

export function Stats() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 border-y border-stone-200"
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`py-6 flex flex-col gap-1.5 transition-all duration-500 ${
            inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
          <div className="text-[13px] text-stone-500">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
