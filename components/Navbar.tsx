"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, RESUME_PATH } from "@/lib/content";
import { DownloadIcon } from "./ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop and lock scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-white/85 shadow-[0_1px_0_rgba(11,21,38,0.02)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <a href="#home" className="flex items-center gap-2.5 no-underline" aria-label="Shaik Jahangeer, back to top">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-mono text-[0.7rem] font-semibold tracking-tight text-white">
            SJ
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:block">Shaik Jahangeer</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-md px-3 py-2 text-[0.85rem] font-medium no-underline transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-azure"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={RESUME_PATH} download className="btn btn-dark hidden !px-4 !py-2.5 text-[0.82rem] sm:inline-flex">
            <DownloadIcon size={14} />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white text-ink lg:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-line bg-white lg:hidden"
          >
            <ul className="container-x flex max-h-[calc(100dvh-4rem)] flex-col overflow-y-auto py-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === l.href ? "location" : undefined}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium no-underline ${
                      active === l.href ? "bg-azure-soft text-azure-deep" : "text-ink hover:bg-surface"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-line pt-3 sm:hidden">
                <a href={RESUME_PATH} download onClick={() => setOpen(false)} className="btn btn-dark w-full">
                  <DownloadIcon size={14} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
