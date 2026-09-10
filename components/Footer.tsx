import { GITHUB_URL, LINKEDIN_URL, navLinks, profile, RESUME_PATH } from "@/lib/content";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-night-line bg-[#070e1b] text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold">{profile.name}</p>
          <p className="mt-1 text-sm font-medium text-white/70">{profile.title}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            Building enterprise CRM solutions with Dynamics 365, .NET, Azure and Power Platform.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/40">Sections</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 no-underline transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/40">Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 no-underline transition-colors hover:text-white">
                <GitHubIcon size={16} />
                GitHub repository
              </a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 no-underline transition-colors hover:text-white">
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={RESUME_PATH} download className="inline-flex items-center gap-2 text-white/70 no-underline transition-colors hover:text-white">
                <DownloadIcon size={16} />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-night-line">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
