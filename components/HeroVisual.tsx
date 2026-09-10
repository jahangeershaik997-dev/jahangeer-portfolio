"use client";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Layered CRM solution stack. Illustrates the layers of a typical Dynamics 365
 * solution and the direction of flow between them. Illustrative, not a specific
 * production architecture.
 */
const layers = [
  { label: "Business Users", sub: "Model-driven apps · Portals", tone: "bg-ink text-white", dot: "bg-white/70" },
  { label: "Dynamics 365 CE", sub: "Dataverse · Security Roles · Solutions", tone: "bg-azure text-white", dot: "bg-white/70" },
  { label: "Forms · JavaScript · Business Rules · BPF", sub: "Client-side logic and guided processes", tone: "bg-white text-ink", dot: "bg-azure" },
  { label: "Plugins · Workflows", sub: "C#.NET sync/async server logic", tone: "bg-white text-ink", dot: "bg-violet" },
  { label: "WebAPI · OData · Integrations", sub: "Service layer and data exchange", tone: "bg-white text-ink", dot: "bg-teal" },
  { label: "Azure Functions · Power Automate", sub: "Cloud automation and orchestration", tone: "bg-white text-ink", dot: "bg-amber" },
  { label: "External Systems · Data", sub: "APIs · SQL Server · Reporting", tone: "bg-ink-soft text-white", dot: "bg-white/70" },
];

export default function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <figure className="card relative mx-auto w-full max-w-md overflow-hidden p-4 sm:p-5 lg:max-w-none" aria-label="Layered view of a Dynamics 365 solution stack">
      <figcaption className="mb-4 flex items-center justify-between border-b border-line pb-3">
        <span className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">Solution stack</span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-line-strong" />
          <span className="h-2 w-2 rounded-full bg-azure" />
        </span>
      </figcaption>

      <ol className="relative m-0 list-none space-y-2 p-0">
        {/* Animated spine behind the layers */}
        <div aria-hidden="true" className="absolute top-3 bottom-3 left-[1.05rem] w-px bg-line">
          {!reduce && (
            <motion.span
              className="absolute left-0 top-0 h-10 w-px bg-gradient-to-b from-transparent via-azure to-transparent"
              animate={{ y: ["-10%", "100%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        {layers.map((l, i) => (
          <motion.li
            key={l.label}
            initial={reduce ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 ${l.tone}`}
          >
            <span className={`relative z-10 h-2 w-2 shrink-0 rounded-full ${l.dot}`} aria-hidden="true" />
            <span className="min-w-0">
              <span className="block truncate text-[0.82rem] font-semibold leading-tight">{l.label}</span>
              <span className={`block truncate text-[0.7rem] leading-tight ${l.tone.includes("text-white") ? "text-white/65" : "text-muted"}`}>
                {l.sub}
              </span>
            </span>
          </motion.li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line pt-3 font-mono text-[0.66rem] whitespace-nowrap text-faint">
        <span>Cloud · On-premise</span>
        <span>C# · JS · Azure · Power Platform</span>
      </div>
    </figure>
  );
}
