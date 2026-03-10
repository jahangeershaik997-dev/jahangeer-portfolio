"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Skills", "Experience", "Projects", "Contact"];

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

      <a href="mailto:jahangeershaik997@gmail.com" style={{
        padding: "0.55rem 1.25rem",
        background: "#0d1117", color: "white",
        borderRadius: "6px", fontWeight: 500, fontSize: "0.875rem",
        textDecoration: "none", transition: "all 0.2s",
      }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1a6cf5")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#0d1117")}
        className="hidden-mobile"
      >
        Hire Me
      </a>

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
