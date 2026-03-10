"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import CodeCard from "./CodeCard";

const stats = [
  { icon: "⚡", bg: "#dbeafe", num: "7", label: "Years IT Experience" },
  { icon: "🏗️", bg: "#fef3c7", num: "6", label: "Years Dynamics 365 / CRM" },
  { icon: "🚀", bg: "#d1fae5", num: "5+", label: "Enterprise Projects" },
  { icon: "☁️", bg: "#ede9fe", num: "4+", label: "Years Azure · Functions · DevOps" },
];

function Counter({ target }: { target: string }) {
  const [val, setVal] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isNum = !isNaN(parseFloat(target));

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      if (!isNum) { setVal(target); return; }
      const n = parseFloat(target);
      const hasPlus = target.includes("+");
      let start = 0;
      const step = n / 40;
      const t = setInterval(() => {
        start += step;
        if (start >= n) { setVal(target); clearInterval(t); return; }
        setVal(Math.floor(start) + (hasPlus ? "+" : ""));
      }, 30);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isNum]);

  return <div ref={ref} style={{
    fontFamily: "Syne, sans-serif", fontSize: "1.8rem",
    fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1,
  }}>{val}</div>;
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="home" ref={ref} style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      padding: "7rem 4rem 5rem",
      position: "relative",
      gap: "4rem",
      background: "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(26,108,245,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 10% 80%, rgba(245,166,35,0.05) 0%, transparent 50%), #f5f3ee",
      overflow: "hidden",
    }}
      className="hero-grid"
    >
      {/* Left — text */}
      <motion.div style={{ position: "relative", zIndex: 3, y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#1a6cf5", marginBottom: "1.5rem",
          }}
        >
          <span style={{ display: "block", width: "2rem", height: "2px", background: "#1a6cf5" }} />
          Senior CRM Developer · Hyderabad, IN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(3rem, 5vw, 5rem)",
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-0.04em", marginBottom: "1.5rem",
          }}
        >
          Shaik<br />
          <span style={{
            background: "linear-gradient(135deg, #1a6cf5 0%, #0d4fc9 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Jahangeer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          style={{
            fontSize: "1rem", color: "#6b7280", fontWeight: 300,
            maxWidth: "42ch", marginBottom: "2rem", lineHeight: 1.75,
          }}
        >
          7 years building enterprise CRM solutions on Microsoft Dynamics 365, Azure, and the Power Platform — from C# plugins and Azure Functions to CI/CD pipelines and AI-powered automations.
        </motion.p>

        {/* Client strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{ marginBottom: "2rem" }}
        >
          <div style={{ fontSize: "0.68rem", color: "#9ca3af", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Trusted by
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["MSCI", "Unilever", "Walmart", "PEI Group"].map((c) => (
              <span key={c} style={{
                fontSize: "0.75rem", fontWeight: 600, color: "#6b7280",
                background: "white", border: "1px solid #d8d3c8",
                padding: "0.3rem 0.8rem", borderRadius: "6px",
              }}>{c}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <a href="#projects" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.9rem 1.8rem", borderRadius: "8px",
            background: "#0d1117", color: "white",
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.95rem",
            textDecoration: "none", transition: "all 0.25s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1a6cf5"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#0d1117"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            View Case Studies ↓
          </a>
          <a href="mailto:jahangeershaik997@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.9rem 1.8rem", borderRadius: "8px",
            background: "transparent", color: "#0d1117",
            border: "1.5px solid #d8d3c8",
            fontFamily: "DM Sans, sans-serif", fontWeight: 500, fontSize: "0.95rem",
            textDecoration: "none", transition: "all 0.25s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0d1117"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#d8d3c8"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Right — code card (desktop) */}
      <div style={{ position: "relative", zIndex: 2, height: "100%" }} className="hero-right-col">
        <CodeCard />
      </div>

      {/* Floating "available" badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: "8%", left: "50%",
          transform: "translateX(-50%)",
          background: "#0d1117", color: "white",
          padding: "0.6rem 1.2rem", borderRadius: "100px",
          fontSize: "0.78rem", fontWeight: 500,
          display: "flex", alignItems: "center", gap: "0.5rem",
          boxShadow: "0 8px 32px rgba(13,17,23,0.25)",
          zIndex: 10, whiteSpace: "nowrap",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
        Available for Senior D365 / Azure roles
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 6rem 1.5rem 3rem !important;
          }
          .hero-right-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}
