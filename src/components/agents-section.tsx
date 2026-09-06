"use client";

import { agents } from "@/data/portfolio";
import { useInView } from "@/components/use-in-view";
import { AgentOrb } from "@/components/orbs";

export function AgentsSection() {
  const { ref, inView } = useInView();

  return (
    <section id="agents" ref={ref} className="pt-12 md:pt-22 flex flex-col gap-5 md:gap-9">
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[11px] md:text-xs text-orange-700 tracking-[0.06em]">
          AI AGENTS
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Agents that do the boring parts
        </h2>
        <p className="hidden md:block text-stone-600 text-base max-w-[560px] text-pretty">
          LLMs are most useful when they sit inside a pipeline with clear state,
          retries, and a human-checkable output. That&apos;s how I build them.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
        {agents.map((a, i) => (
          <article
            key={a.title}
            className={`bg-stone-900 text-stone-50 rounded-xl md:rounded-[14px] p-5 md:p-7 flex flex-col gap-2.5 md:gap-3.5 transition-all duration-500 ${
              inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-2 font-mono text-[11px] md:text-xs text-orange-700">
              <AgentOrb delay={i * 0.6} />
              {a.kind}
            </div>
            <h3 className="text-base md:text-[19px] font-semibold tracking-tight leading-snug text-pretty">
              {a.title}
            </h3>
            <p className="text-[13px] md:text-[15px] leading-relaxed text-stone-400 text-pretty">
              {a.body}
            </p>
            <div className="mt-auto pt-2 border-t border-stone-800">
              <div className="font-mono text-[11px] text-stone-300 md:text-stone-300 leading-relaxed">
                {a.flow}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
