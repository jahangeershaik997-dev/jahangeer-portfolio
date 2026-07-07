"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Skills", "AI", "Projects", "Experience", "Contact"];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jahangeer-shaik-3537422b4",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 4rem",
        background: scrolled ? "rgba(245,243,238,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #d8d3c8" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <a href="#home" style={{
        fontFamily: "Syne, sans-serif", fontWeight: 800,
        fontSize: "1.1rem", letterSpacing: "-0.02em",
        color: "#0d1117", textDecoration: "none",
      }}>
        SJ.
      </a>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}
          className="hidden-mobile">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} style={{
              fontSize: "0.875rem", fontWeight: 500,
              color: "#6b7280", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0d1117")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >{l}</a>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            title={s.label}
            style={{
              color: "#6b7280", transition: "color 0.2s",
              display: "flex", alignItems: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0d1117")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >{s.icon}</a>
        ))}
        <a href="/CRM_dev_shaik_jahangeer_7_exp.pdf" download style={{
          padding: "0.55rem 1.25rem",
          background: "#0d1117", color: "white",
          borderRadius: "6px", fontWeight: 500, fontSize: "0.875rem",
          textDecoration: "none", transition: "all 0.2s",
          display: "flex", alignItems: "center", gap: "0.4rem",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6cf5")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#0d1117")}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        className="show-mobile"
        style={{ background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", gap: "5px", padding: "4px" }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: "block", width: "22px", height: "2px",
            background: "#0d1117", borderRadius: "2px",
            transition: "all 0.3s",
          }} />
        ))}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", top: "60px", left: 0, right: 0,
              background: "rgba(245,243,238,0.97)",
              backdropFilter: "blur(16px)",
              padding: "1.5rem 2rem",
              borderBottom: "1px solid #d8d3c8",
              display: "flex", flexDirection: "column", gap: "1rem",
            }}
          >
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "Syne, sans-serif", fontWeight: 600,
                  fontSize: "1.1rem", color: "#0d1117", textDecoration: "none",
                }}>
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
        nav { padding: 1rem 4rem; }
        @media (max-width: 768px) { nav { padding: 1rem 1.5rem !important; } }
      `}</style>
    </motion.nav>
  );
}
