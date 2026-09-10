import { profile, projects } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    marker: "2019",
    title: `Joined ${profile.company}`,
    body: `${profile.role}, ${profile.location.replace(", India", "")}. Started February 2019, working on Microsoft Dynamics CRM and Dynamics 365 customization, plugins, workflows and JavaScript.`,
  },
  {
    marker: "Enterprise delivery",
    title: "Four enterprise CRM implementations",
    body: `${projects.map((p) => p.name).join(" · ")}. Delivered across Dynamics CRM 2016 and Dynamics 365 Cloud environments as part of teams of 8 to 10.`,
  },
  {
    marker: "Platform breadth",
    title: "Dynamics CRM 2013 through Dynamics 365 Online",
    body: "Hands-on experience across Dynamics CRM 2013, 2015 and 2016, Dynamics 365 CE, Dynamics 365 On-Premise 9.1 and Dynamics 365 Online, spanning both on-premise and cloud.",
  },
  {
    marker: "Present",
    title: "Senior developer with 7+ years in Dynamics CRM/D365",
    body: "Enterprise CRM architecture, integrations with Azure Functions and Power Automate, Azure DevOps CI/CD, production support and mentoring developers in Agile/Scrum teams.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section-pad bg-white" aria-labelledby="journey-title">
      <div className="container-x">
        <SectionHeading id="journey-title"
          eyebrow="Professional journey" title="From 2019 to today" />

        <ol className="relative m-0 grid list-none gap-8 p-0 md:grid-cols-4 md:gap-6">
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[0.55rem] w-px bg-line-strong md:top-[0.55rem] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-auto" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <li className="relative pl-8 md:pl-0 md:pt-8">
                <span
                  aria-hidden="true"
                  className={`absolute top-0 left-0 h-[1.15rem] w-[1.15rem] rounded-full border-2 border-white ${
                    i === 0 || i === steps.length - 1 ? "bg-azure shadow-[0_0_0_4px_rgba(15,108,189,0.15)]" : "bg-line-strong"
                  }`}
                />
                <p className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-azure">{s.marker}</p>
                <h3 className="mt-2 text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
