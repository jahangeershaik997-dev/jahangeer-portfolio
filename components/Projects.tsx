"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects, type Accent, type Project } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { CheckIcon, ChevronIcon } from "./ui/Icons";

const accentStyles: Record<Accent, { bar: string; badge: string }> = {
  azure: { bar: "bg-azure", badge: "bg-azure-soft text-azure-deep" },
  teal: { bar: "bg-teal", badge: "bg-teal-soft text-teal" },
  violet: { bar: "bg-violet", badge: "bg-violet-soft text-violet" },
  amber: { bar: "bg-amber", badge: "bg-amber-soft text-amber" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const a = accentStyles[project.accent];
  const panelId = `project-${project.id}-details`;

  return (
    <Reveal delay={0.06 * index} className="h-full">
      <article id={`project-${project.id}`} className="card card-hover flex h-full scroll-mt-24 flex-col overflow-hidden">
        <div className={`h-1 ${a.bar}`} aria-hidden="true" />
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <span className="font-mono text-xs font-medium text-faint">0{index + 1}</span>
            <span className={`rounded-full px-2.5 py-1 text-[0.7rem] font-semibold ${a.badge}`}>
              Team of {project.teamSize}
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold tracking-[-0.01em] text-ink md:text-xl">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">{project.context}</p>

          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-faint">Environment</dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {project.environment.map((e) => (
                  <span key={e} className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-body ring-1 ring-line">
                    {e}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-faint">Technology</dt>
              <dd className="mt-1.5 flex flex-wrap gap-1.5">
                {project.technology.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-1 text-xs font-medium text-body ring-1 ring-line">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-azure hover:text-azure-deep"
            >
              {open ? "Hide responsibilities" : "Key responsibilities"}
              <ChevronIcon size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 grid gap-2.5 border-t border-line pt-4">
                    {project.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-body">
                        <CheckIcon size={15} className={`mt-1 shrink-0 ${a.badge.split(" ")[1]}`} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-white" aria-labelledby="projects-title">
      <div className="container-x">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects"
          title="Enterprise CRM project case studies"
          description="Four Dynamics CRM and Dynamics 365 implementations delivered as part of enterprise teams, covering customization, plugins, integrations, reporting and deployment."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
