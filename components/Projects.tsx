"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    responsibilities: [
      "Architected and developed C# plugin assemblies for automated subscriber lifecycle management across 8 specialist finance brands",
      "Built Azure Functions (.NET 8 Isolated) for event-driven subscriber processing and renewal workflows",
      "Designed Power Automate Cloud Flows for subscriber onboarding, cross-brand data synchronisation, and renewal notifications",
      "Implemented CI/CD pipelines using Azure DevOps and Power Platform Build Tools for zero-downtime D365 deployments",
      "Created custom Dataverse tables, relationships, views, and Business Process Flows for subscription management",
      "Provided technical leadership and mentored junior developers in plugin architecture and D365 best practices",
      "Conducted code reviews, sprint planning, and stakeholder demonstrations in an Agile Scrum environment",
    ],
  },
  {
    num: "02",
    name: "MSCI — Budgeting & Forecasting CRM",
    challenge: "Implement Income Statements for MSCI Emerging Markets used by Morgan Stanley's global equity index teams.",
    solution: "MS CRM 2016 customisations with C# plugins for financial calculation workflows, SSRS reports for BI output.",
    impact: "Global equity index data · Finance-grade accuracy · Multi-currency",
    impactNum: "Global", impactLabel: "Equity Index CRM",
    tags: ["MS CRM 2016", "JavaScript", "C# Plugins", "Workflows", "SSRS"],
    accent: "#7c3aed",
    responsibilities: [
      "Implemented Income Statement calculations for MSCI Emerging Markets using C# plugins and custom Dataverse entities",
      "Performed large-scale data migration from legacy systems into MS CRM 2016 with full validation and reconciliation",
      "Developed custom SSRS reports for financial performance metrics consumed by global equity index teams",
      "Built JavaScript web resources for dynamic form behaviour, field validation, and conditional business logic",
      "Created automated workflows for budgeting cycle notifications and approval routing",
      "Configured security roles, entity permissions, and field-level security for a global user base across multiple regions",
    ],
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
    responsibilities: [
      "Designed and developed a CRM application for end-to-end pharmacy order management across 4,700+ US Walmart stores",
      "Built C# plugins for drug dispensing business logic, prescription tracking, patient registration, and counselling workflows",
      "Implemented compliance reporting modules with full audit trails meeting US healthcare regulatory requirements (HIPAA-aligned)",
      "Developed Office 365 integrations for automated pharmacy communications including email alerts and calendar scheduling",
      "Created custom JavaScript web resources for pharmacy store UI interactions and real-time form validation",
      "Configured D365 Cloud security model supporting multi-store, multi-role pharmacy staff with least-privilege access",
    ],
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
    responsibilities: [
      "Built plugin-driven automation for global product portfolio management across Unilever brand teams on multiple continents",
      "Developed WebAPI integrations connecting CRM with external product management systems and ERP platforms",
      "Created FetchXML-powered dashboards and system views for real-time portfolio visibility across brand hierarchies",
      "Implemented SQL stored procedures for complex cross-entity reporting and data aggregation requirements",
      "Led entity, form, and relationship design for the OPSO HD product and PPM portfolio hierarchy model",
      "Performed managed/unmanaged solution import/export, patch management, and environment promotion across Dev → UAT → Prod",
      "Delivered ribbon customisations using Ribbon Workbench for context-sensitive toolbar actions",
    ],
  },
  {
    num: "05",
    name: "SIS K-12 — School Information System",
    challenge: "Build a CRM product for global school management including student lifecycle from registration to graduation.",
    solution: "D365 with Portals for parent/student access, Power Apps for mobile use, custom plugins for attendance and fee automation.",
    impact: "Global school network · Student portal · Fee automation",
    impactNum: "30+", impactLabel: "countries deployed",
    tags: ["D365", "C# Plugins", "SQL Server", "D365 Portals", "Power Apps"],
    accent: "#d97706",
    responsibilities: [
      "Built a multi-module D365 CRM product for global school management covering student registration, teacher records, attendance, and fee management",
      "Developed D365 Portals (Power Pages) for student and parent self-service — enrolment, attendance viewing, and fee payment",
      "Built Power Apps canvas apps for mobile-first attendance tracking and teacher-facing classroom workflows",
      "Implemented C# plugins for automated fee calculation, attendance aggregation, notifications, and academic report generation",
      "Designed SQL Server stored procedures and SSRS reports for academic performance summaries and financial reporting",
      "Deployed the product to 30+ countries with localisation support for multiple currencies, date formats, and regional compliance",
      "Configured complex security roles supporting school admins, teachers, parents, and students with appropriate data access levels",
    ],
  },
];

// ── Modal ─────────────────────────────────────────────────────────────────────
function Modal({ p, onClose }: { p: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(13,17,23,0.75)",
          backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#ffffff", borderRadius: "20px",
            maxWidth: "640px", width: "100%",
            maxHeight: "85vh", overflowY: "auto",
            padding: "2.5rem",
            boxShadow: "0 40px 120px rgba(0,0,0,0.3)",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button onClick={onClose} style={{
            position: "absolute", top: "1.25rem", right: "1.25rem",
            width: 32, height: 32, borderRadius: "50%",
            background: "#f5f3ee", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1rem", color: "#6b7280",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#d8d3c8")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f3ee")}
          >✕</button>

          {/* Header */}
          <div style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em",
            color: p.accent, textTransform: "uppercase",
            fontFamily: "Syne, sans-serif", marginBottom: "0.5rem",
          }}>Project {p.num}</div>

          <div style={{
            fontFamily: "Syne, sans-serif", fontWeight: 800,
            fontSize: "1.3rem", letterSpacing: "-0.02em",
            marginBottom: "0.5rem", lineHeight: 1.3,
            paddingRight: "2rem",
          }}>{p.name}</div>

          {/* Impact badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: `${p.accent}10`, border: `1px solid ${p.accent}20`,
            borderRadius: "8px", padding: "0.4rem 0.9rem",
            marginBottom: "1.75rem",
          }}>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: p.accent }}>
              {p.impactNum}
            </span>
            <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>{p.impactLabel}</span>
          </div>

          {/* Responsibilities */}
          <div style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "#9ca3af",
            marginBottom: "1rem",
          }}>Responsibilities</div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {p.responsibilities.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontSize: "0.88rem", color: "#374151",
                  paddingLeft: "1.4rem", position: "relative",
                  lineHeight: 1.65,
                }}
              >
                <span style={{
                  position: "absolute", left: 0, top: "0.3rem",
                  width: 6, height: 6, borderRadius: "50%",
                  background: p.accent, display: "block",
                }} />
                {r}
              </motion.li>
            ))}
          </ul>

          {/* Tags */}
          <div style={{
            marginTop: "1.75rem", paddingTop: "1.5rem",
            borderTop: "1px solid #d8d3c8",
            display: "flex", flexWrap: "wrap", gap: "0.4rem",
          }}>
            {p.tags.map((t) => (
              <span key={t} style={{
                fontSize: "0.72rem", fontWeight: 500,
                padding: "0.25rem 0.7rem", borderRadius: "100px",
                background: `${p.accent}10`, color: p.accent,
                border: `1px solid ${p.accent}20`,
              }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Project card ──────────────────────────────────────────────────────────────
function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  const [tab, setTab] = useState<"challenge" | "solution">("challenge");
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <Modal p={p} onClose={() => setOpen(false)} />}

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

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em",
            color: p.accent, textTransform: "uppercase", fontFamily: "Syne, sans-serif",
          }}>Project {p.num}</span>
          <div style={{
            background: `${p.accent}12`, border: `1px solid ${p.accent}22`,
            borderRadius: "8px", padding: "0.4rem 0.75rem", textAlign: "right",
          }}>
            <div style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "1rem", color: p.accent, lineHeight: 1 }}>
              {p.impactNum}
            </div>
            <div style={{ fontSize: "0.6rem", color: "#6b7280", marginTop: "0.15rem" }}>{p.impactLabel}</div>
          </div>
        </div>

        <div style={{
          fontFamily: "Syne, sans-serif", fontSize: "1.05rem",
          fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.35, color: "#0d1117",
        }}>{p.name}</div>

        {/* Challenge / Solution */}
        <div>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem" }}>
            {(["challenge", "solution"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{
                fontSize: "0.68rem", fontWeight: 600,
                padding: "0.25rem 0.7rem", borderRadius: "100px",
                border: `1px solid ${tab === t ? p.accent : "#d8d3c8"}`,
                background: tab === t ? `${p.accent}12` : "transparent",
                color: tab === t ? p.accent : "#6b7280",
                cursor: "pointer", transition: "all 0.2s", textTransform: "capitalize",
              }}>{t === "challenge" ? "🎯 Challenge" : "🔧 Solution"}</button>
            ))}
          </div>
          <p style={{ fontSize: "0.83rem", color: "#6b7280", lineHeight: 1.6, minHeight: "3.2em" }}>
            {tab === "challenge" ? p.challenge : p.solution}
          </p>
        </div>

        {/* Impact */}
        <div style={{
          background: "#f5f3ee", borderRadius: "8px",
          padding: "0.6rem 0.85rem", fontSize: "0.72rem", color: "#6b7280",
          borderLeft: `3px solid ${p.accent}`,
        }}>
          <span style={{ fontWeight: 600, color: "#0d1117" }}>Impact: </span>{p.impact}
        </div>

        {/* Tags + View button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
            {p.tags.map((t) => (
              <span key={t} style={{
                fontSize: "0.7rem", fontWeight: 500,
                padding: "0.22rem 0.65rem", borderRadius: "100px",
                background: `${p.accent}10`, color: p.accent, border: `1px solid ${p.accent}20`,
              }}>{t}</span>
            ))}
          </div>

          <button onClick={() => setOpen(true)} style={{
            display: "inline-flex", alignItems: "center", gap: "0.35rem",
            fontSize: "0.75rem", fontWeight: 600, color: p.accent,
            background: `${p.accent}10`, border: `1px solid ${p.accent}25`,
            padding: "0.35rem 0.85rem", borderRadius: "100px",
            cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = `${p.accent}20`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = `${p.accent}10`; }}
          >
            View Responsibilities →
          </button>
        </div>
      </motion.div>
    </>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
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
            fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.6rem",
          }}
        >Enterprise Projects Delivered</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "2.5rem" }}
        >
          Click <strong>"View Responsibilities"</strong> on any project to see the full technical breakdown.
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
