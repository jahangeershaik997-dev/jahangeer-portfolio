import { EMAIL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_TEL, profile, RESUME_PATH } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { DownloadIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from "./ui/Icons";

const subject = encodeURIComponent("Dynamics 365 opportunity");

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-night text-white" aria-labelledby="contact-title">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-azure/15 blur-3xl" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            dark
            id="contact-title"
            eyebrow="Contact"
            title="Let's talk about your Dynamics 365 work"
            description="Open to conversations about senior Dynamics 365 CE/CRM development, integrations and Power Platform delivery. Email is the fastest way to reach me."
          />
          <div className="-mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}?subject=${subject}`} className="btn btn-primary">
              <MailIcon size={16} />
              Send an email
            </a>
            <a href={RESUME_PATH} download className="btn btn-ghost-light">
              <DownloadIcon size={15} />
              Download Resume
            </a>
          </div>
        </div>

        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-xl border border-night-line bg-white/[0.04] p-4 no-underline transition-colors hover:bg-white/[0.08]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-azure/20 text-sky-300" aria-hidden="true">
                  <MailIcon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45">Email</span>
                  <span className="block truncate text-sm font-medium text-white">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-4 rounded-xl border border-night-line bg-white/[0.04] p-4 no-underline transition-colors hover:bg-white/[0.08]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-azure/20 text-sky-300" aria-hidden="true">
                  <PhoneIcon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45">Mobile</span>
                  <span className="block text-sm font-medium text-white">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-night-line bg-white/[0.04] p-4 no-underline transition-colors hover:bg-white/[0.08]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-azure/20 text-sky-300" aria-hidden="true">
                  <LinkedInIcon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45">LinkedIn</span>
                  <span className="block text-sm font-medium text-white">Connect on LinkedIn</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-xl border border-night-line bg-white/[0.04] p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-azure/20 text-sky-300" aria-hidden="true">
                <PinIcon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45">Location</span>
                <span className="block text-sm font-medium text-white">{profile.location}</span>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
