import { experienceBadges, experienceHighlights, profile, projects } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { CheckIcon, PinIcon } from "./ui/Icons";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface" aria-labelledby="experience-title">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Career timeline"
          description="Documented professional experience in Microsoft Dynamics CRM and Dynamics 365 development."
        />

        <ol className="relative m-0 list-none p-0 pl-8 sm:pl-12">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[0.6rem] w-px bg-line-strong sm:left-[1.1rem]" />

          <li className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-azure shadow-[0_0_0_4px_rgba(15,108,189,0.15)] sm:-left-12 sm:h-6 sm:w-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            <Reveal>
              <article className="card p-6 md:p-8">
                <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-azure-soft px-3 py-1 text-xs font-semibold text-azure-deep">
                        {profile.period}
                      </span>
                      <span className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal">Current</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold tracking-[-0.01em] text-ink md:text-2xl">{profile.role}</h3>
                    <p className="mt-1 text-base font-medium text-body">{profile.company}</p>
                  </div>
                  <p className="flex items-center gap-1.5 text-sm text-muted">
                    <PinIcon size={14} className="text-azure" />
                    {profile.location.replace(", India", "")}
                  </p>
                </header>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {experienceHighlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-body">
                      <CheckIcon size={16} className="mt-1 shrink-0 text-azure" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-faint">Projects delivered</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {projects.map((p) => (
                      <li key={p.id}>
                        <a href={`#project-${p.id}`} className="chip no-underline hover:border-azure hover:text-azure-deep">
                          {p.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-faint">Technology</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {experienceBadges.map((b) => (
                      <li key={b} className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-body ring-1 ring-line">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
