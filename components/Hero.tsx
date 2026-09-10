"use client";
import { motion, useReducedMotion } from "framer-motion";
import { heroChips, profile, RESUME_PATH } from "@/lib/content";
import HeroVisual from "./HeroVisual";
import { ArrowDownIcon, DownloadIcon, MailIcon, PinIcon } from "./ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="home" className="relative overflow-hidden bg-surface pt-28 pb-16 md:pt-36 md:pb-24" aria-labelledby="hero-title">
      {/* Backdrop: restrained grid + a single soft azure wash */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-azure/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
        <div className="max-w-2xl">
          <motion.p {...rise(0.05)} className="eyebrow">
            <span aria-hidden="true" className="h-px w-6 bg-azure" />
            7+ Years · Microsoft Dynamics 365 · Enterprise CRM
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            id="hero-title"
            className="mt-5 text-[2.35rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.4rem] xl:text-6xl"
          >
            Senior Microsoft Dynamics&nbsp;365 <span className="text-azure">CE/CRM</span> Developer
          </motion.h1>

          <motion.p {...rise(0.25)} className="mt-6 max-w-xl text-base leading-relaxed text-body md:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.ul {...rise(0.33)} className="mt-7 flex flex-wrap gap-2" aria-label="Core technologies">
            {heroChips.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </motion.ul>

          <motion.div {...rise(0.42)} className="mt-9 flex flex-wrap gap-3">
            <a href="#experience" className="btn btn-primary">
              View Experience
              <ArrowDownIcon size={15} />
            </a>
            <a href={RESUME_PATH} download className="btn btn-dark">
              <DownloadIcon size={15} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <MailIcon size={15} />
              Contact Me
            </a>
          </motion.div>

          <motion.dl {...rise(0.5)} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm">
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-faint">Currently</dt>
              <dd className="mt-1 font-medium text-ink">
                {profile.role} · {profile.company}
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-faint">Based in</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-medium text-ink">
                <PinIcon size={14} className="text-azure" />
                {profile.location}
              </dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="w-full"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
