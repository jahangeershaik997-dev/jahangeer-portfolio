"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    num: "01",
    name: "PEI Group — Subscriber Intelligence & CRM Platform",
    challenge: "Automate subscriber lifecycle management across 8 specialist finance brands with zero cross-brand data contamination.",
    solution: "C# plugins + Azure Functions pipeline with Power Automate flows for onboarding, renewals, and cross-brand sync. CI/CD via Azure DevOps.",
    impact: "8 brands · CI/CD automated deployments · Zero manual subscriber ops",
    impactNum: "8", impactLabel: "brands on one platform",
    tags: ["D365", "Azure Functions", "Power Automate", "C#.NET", "Azure DevOps", "CI/CD"],
    accent: "#1a6cf5",
  },
  {
    num: "02",
    name: "MSCI — Budgeting & Forecasting CRM",
    challenge: "Implement Income Statements for MSCI Emerging Markets used by Morgan Stanley's global equity index teams.",
    solution: "MS CRM 2016 customisations with C# plugins for financial calculation workflows, SSRS reports for BI output.",
    impact: "Global equity index data · Finance-grade accuracy · Multi-currency",
    impactNum: "$50T+", impactLabel: "index AUM tracked",
    tags: ["MS CRM 2016", "JavaScript", "C# Plugins", "Workflows", "SSRS"],
    accent: "#7c3aed",
  },
  {
    num: "03",
    name: "Walmart US — Health & Wellness Pharmacy CRM",
    challenge: "Manage end-to-end pharmacy order flow — patient registration to drug counselling — across thousands of US stores.",
    solution: "D365 Cloud CRM with custom plugins handling drug dispensing logic, prescription tracking, and compliance reporting.",
    impact: "US-wide pharmacy chain · Patient safety compliance · 24/7 uptime",
    impactNum: "4,700+", impactLabel: "Walmart stores served",
    tags: ["D365 Cloud", "C# Plugins", "JavaScript", "Workflows", "Office 365"],
    accent: "#0891b2",
  },
  {
    num: "04",
    name: "Unilever — OPSO HD & PPM Tool",
    challenge: "Unify global product portfolio management for Unilever brand teams across multiple continents and product lines.",
    solution: "CRM D365 with WebAPI integrations, FetchXML-powered dashboards, stored procedures, and plugin-driven automation.",
    impact: "Global FMCG operations · Multi-continent teams · Real-time portfolio data",
    impactNum: "400+", impactLabel: "brands in one system",
    tags: ["MS CRM D365", "C#.NET Plugins", "WebAPI", "FetchXML", "SQL"],
    accent: "#059669",
  },
  {
    num: "05",
    name: "SIS K-12 — School Information System",
    challenge: "Build a CRM product for global school management — student lifecycle from registration to graduation.",
    solution: "D365 with Portals for parent/student access, Power Apps for mobile use, custom plugins for attendance and fee automation.",
    impact: "Global school network · Student portal · Fee automation",
    impactNum: "30+", impactLabel: "countries deployed",
    tags: ["D365", "C# Plugins", "SQL Server", "D365 Portals", "Power Apps"],
    accent: "#d97706",
  },
];

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const [tab, setTab] = useState<"challenge" | "solution">("challenge");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff", border: "1px solid #d8d3c8",
        borderRadius: "16px", padding: "1.75rem",
        position: "relative", overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.1)` : "0 2px 12px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        display: "flex", flexDirection: "column", gap: "1rem",
      }}
    >
      {/* Accent top bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${p.accent}, ${p.accent}66)`,
        transform: `scaleX(${hovered ? 1 : 0})`,
        transformOrigin: "left",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
      }} />

      {/* Hover glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${p.accent}07 0%, transparent 70%)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.35s", pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{
          fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em",
          color: p.accent, textTransform: "uppercase",
          fontFamily: "Syne, sans-serif",
        }}>Project {p.num}</span>
        {/* Impact badge */}
        <div style={{
          background: `${p.accent}12`, border: `1px solid ${p.accent}22`,
          borderRadius: "8px", padding: "0.4rem 0.75rem", textAlign: "right",
        }}>
          <div style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "1rem", color: p.accent, lineHeight: 1,
          }}>{p.impactNum}</div>
          <div style={{ fontSize: "0.6rem", color: "#6b7280", marginTop: "0.15rem" }}>
            {p.impactLabel}
          </div>
        </div>
      </div>

      <div style={{
        fontFamily: "Syne, sans-serif", fontSize: "1.05rem",
        fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.35,
        color: "#0d1117",
      }}>{p.name}</div>

      {/* Challenge / Solution toggle */}
      <div>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem" }}>
          {(["challenge", "solution"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              fontSize: "0.68rem", fontWeight: 600,
              padding: "0.25rem 0.7rem", borderRadius: "100px",
              border: `1px solid ${tab === t ? p.accent : "#d8d3c8"}`,
              background: tab === t ? `${p.accent}12` : "transparent",
              color: tab === t ? p.accent : "#6b7280",
              cursor: "pointer", transition: "all 0.2s",
              textTransform: "capitalize",
            }}>{t === "challenge" ? "🎯 Challenge" : "🔧 Solution"}</button>
          ))}
        </div>
        <p style={{
          fontSize: "0.83rem", color: "#6b7280",
          lineHeight: 1.6, minHeight: "3.2em",
        }}>
          {tab === "challenge" ? p.challenge : p.solution}
        </p>
      </div>

      {/* Impact */}
      <div style={{
        background: "#f5f3ee", borderRadius: "8px",
        padding: "0.6rem 0.85rem",
        fontSize: "0.72rem", color: "#6b7280",
        borderLeft: `3px solid ${p.accent}`,
      }}>
        <span style={{ fontWeight: 600, color: "#0d1117" }}>Impact: </span>
        {p.impact}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {p.tags.map((t) => (
          <span key={t} style={{
            fontSize: "0.7rem", fontWeight: 500,
            padding: "0.22rem 0.65rem", borderRadius: "100px",
            background: `${p.accent}10`, color: p.accent,
            border: `1px solid ${p.accent}20`,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="projects" style={{
      padding: "6rem 4rem", background: "white",
      position: "relative", zIndex: 1,
    }}>
      <div ref={titleRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#1a6cf5", marginBottom: "0.75rem",
            fontFamily: "Syne, sans-serif",
          }}
        >Case Studies</motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            marginBottom: "0.6rem",
          }}
        >Enterprise Projects Delivered</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2.5rem" }}
        >
          Click Challenge / Solution on each card to explore the technical depth.
        </motion.p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
      }}>
        {projects.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
