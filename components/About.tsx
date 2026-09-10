import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const pillars = [
  {
    title: "Enterprise CRM engineering",
    body: "Customization and configuration of Dynamics 365 CE at enterprise scale: entities, forms, Business Process Flows, custom status and stage transitions, security roles and solution management.",
  },
  {
    title: "Server and client logic",
    body: "Synchronous and asynchronous C#.NET plugins, workflows, Business Rules and JavaScript form logic, built with SOLID principles and unit and integration testing.",
  },
  {
    title: "Integration and cloud",
    body: "WebAPI, OData and system integrations, extended with Azure Functions and Power Automate for automation across cloud and on-premise environments.",
  },
  {
    title: "Delivery and DevOps",
    body: "Azure DevOps CI/CD with Power Platform Build Tools and Git, plus production support, troubleshooting, deployment and developer mentoring in Agile/Scrum teams.",
  },
];

const facts = [
  { label: "Experience", value: "7+ years" },
  { label: "Focus", value: "Dynamics CRM / D365" },
  { label: "Platforms", value: "CRM 2013 → D365 Online" },
  { label: "Environments", value: "Cloud & On-premise" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white" aria-labelledby="about-title">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow="About"
              title="Senior CRM developer focused on enterprise Dynamics 365 delivery"
            />
            <Reveal delay={0.1}>
              <p className="-mt-6 text-base leading-relaxed text-body md:text-lg">
                I have spent 7+ years in IT specializing in Microsoft Dynamics CRM and Dynamics 365 development,
                working across Dynamics CRM 2013, 2015 and 2016, Dynamics 365 CE, Dynamics 365 On-Premise 9.1 and
                Dynamics 365 Online. My work covers the full lifecycle of a CRM solution: design, customization,
                server-side and client-side logic, integration, deployment and production support.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                {facts.map((f) => (
                  <div key={f.label} className="rounded-xl border border-line bg-surface px-4 py-3">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-faint">{f.label}</dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.08 * i}>
                <li className="card card-hover h-full p-6">
                  <span className="mb-4 block h-1 w-8 rounded-full bg-azure" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
