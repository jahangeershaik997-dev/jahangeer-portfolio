import { education } from "@/lib/content";
import Reveal from "./ui/Reveal";

export default function Education() {
  return (
    <section id="education" className="bg-surface py-14 md:py-20" aria-labelledby="education-title">
      <div className="container-x">
        <Reveal>
          <div className="card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="eyebrow">
                <span aria-hidden="true" className="h-px w-6 bg-azure" />
                Education
              </p>
              <h2 id="education-title" className="mt-3 text-xl font-bold text-ink md:text-2xl">
                {education.degree}
              </h2>
              <p className="mt-1 text-base text-body">{education.institution}</p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-azure-soft text-azure-deep" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10L12 5 2 10l10 5 10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
