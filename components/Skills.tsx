import Image from "next/image";
import { certification, skillCategories } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { ExternalIcon } from "./ui/Icons";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          eyebrow="Technical expertise"
          title="Skills across the Dynamics 365 and Power Platform stack"
          description="Grouped by how they are used in real delivery: platform, code, integration, cloud, data, DevOps, tooling and engineering practice."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={0.05 * i} className="h-full">
              <div className="card card-hover h-full p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="font-mono text-[0.68rem] text-faint">0{i + 1}</span>
                  {cat.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {cat.items.map((s) => (
                    <li key={s} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-body ring-1 ring-line">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="card mt-8 flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-7">
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full shrink-0 overflow-hidden rounded-lg border border-line md:w-56"
              aria-label={`${certification.name} credential (opens in a new tab)`}
            >
              <Image
                src={certification.image}
                alt={`${certification.name} certificate`}
                width={1039}
                height={636}
                className="h-auto w-full"
                sizes="(min-width: 768px) 14rem, 100vw"
              />
            </a>
            <div className="min-w-0">
              <p className="eyebrow">{certification.issuer}</p>
              <h3 className="mt-2 text-lg font-bold text-ink">{certification.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                Microsoft certification covering Power Platform and Dataverse development, including plugins, client scripting and integrations.
              </p>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-azure no-underline hover:text-azure-deep"
              >
                View credential on Microsoft Learn
                <ExternalIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
