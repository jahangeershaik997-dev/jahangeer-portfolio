"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// ── AI Tools strip ────────────────────────────────────────────────────────────
const aiTools = [
  { name: "Azure OpenAI (GPT-4o)", status: "using" },
  { name: "Copilot Studio", status: "using" },
  { name: "AI Builder (Power Automate)", status: "using" },
  { name: "Prompt Engineering", status: "using" },
  { name: "Managed Identity", status: "using" },
  { name: "Semantic Kernel (C#)", status: "learning" },
  { name: "Azure AI Foundry", status: "learning" },
  { name: "GitHub Copilot", status: "using" },
  { name: "Dataverse AI Prompts", status: "learning" },
  { name: "Azure Document Intelligence", status: "learning" },
];

// ── Projects data ─────────────────────────────────────────────────────────────
const ripStack = [
  "D365 / Dataverse", "C# Plugins (.NET 4.6.2)", "Azure Functions (.NET 8)",
  "Azure OpenAI GPT-4o", "Node.js + Express", "Next.js + React",
  "PostgreSQL + Prisma", "Power Automate", "Docker", "Managed Identity",
  "Jira + Scrum", "GitHub CI/CD",
];

const otherProjects = [
  {
    tag: "Completed · 2025",
    tagColor: "#059669",
    name: "AI-Powered Lead Qualification System",
    what: "End-to-end D365 AI pipeline that automatically scores every new Lead as Hot, Warm, or Cold using GPT-4o — with confidence scoring, fallback logic, and zero-secret Managed Identity auth.",
    arch: ["D365 Lead Created", "C# Plugin (Stage 10)", "Power Automate Trigger", "Azure Function (.NET 8)", "Azure OpenAI GPT-4o", "Score Written to Dataverse"],
    impact: "Eliminated manual lead triage · $0.004 per scoring call · 1–3s latency",
    tags: ["D365", "C# Plugins", "Azure Functions", "Azure OpenAI", "Power Automate", "Managed Identity", "Prompt Engineering"],
    accent: "#7c3aed",
  },
  {
    tag: "Side Project · Python",
    tagColor: "#0891b2",
    name: "crm_agent — AI CLI Tool for D365 Developers",
    what: "A Python CLI that searches your D365 codebase, reads files safely, detects plugin/flow/Azure Function patterns, and generates implementation plans from Jira stories — replacing manual analysis.",
    arch: ["Jira Story Input", "Repo Scanner (Python)", "Pattern Detection Engine", "Context Pack Builder", "AI Plan Generator", "Rich CLI Output"],
    impact: "Search 40+ files in seconds · Detect Plugin/Flow/Function automatically · Generate phased implementation plans",
    tags: ["Python", "Typer CLI", "Pydantic", "Rich", "Azure OpenAI", "Prompt Engineering", "D365 Patterns"],
    accent: "#0891b2",
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function ArchFlow({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div style={{
      display: "flex", flexWrap: "wrap", gap: "0.4rem",
      alignItems: "center", marginTop: "0.75rem",
    }}>
      {steps.map((s, i) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span style={{
            fontSize: "0.68rem", fontWeight: 500,
            padding: "0.22rem 0.65rem", borderRadius: "6px",
            background: `${accent}12`, color: accent,
            border: `1px solid ${accent}25`,
            whiteSpace: "nowrap",
          }}>{s}</span>
          {i < steps.length - 1 && (
            <span style={{ color: accent, fontSize: "0.65rem", opacity: 0.5 }}>→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function OtherCard({ p, index }: { p: typeof otherProjects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "#ffffff", border: "1px solid #d8d3c8",
        borderRadius: "14px", padding: "1.75rem",
        borderLeft: `4px solid ${p.accent}`,
        transition: "box-shadow 0.3s",
      }}
      whileHover={{ boxShadow: `0 12px 40px ${p.accent}14` }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{
          fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em",
          background: `${p.tagColor}12`, color: p.tagColor,
          padding: "0.25rem 0.75rem", borderRadius: "100px",
          border: `1px solid ${p.tagColor}25`,
        }}>{p.tag}</span>
      </div>

      <div style={{
        fontFamily: "Syne, sans-serif", fontWeight: 700,
        fontSize: "1.1rem", letterSpacing: "-0.01em",
        marginBottom: "0.75rem", color: "#0d1117",
      }}>{p.name}</div>

      <p style={{ fontSize: "0.85rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "0.75rem" }}>
        {p.what}
      </p>

      {/* Architecture flow */}
      <div style={{ marginBottom: "0.85rem" }}>
        <div style={{ fontSize: "0.68rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
          Architecture
        </div>
        <ArchFlow steps={p.arch} accent={p.accent} />
      </div>

      {/* Impact */}
      <div style={{
        background: "#f5f3ee", borderRadius: "8px",
        padding: "0.55rem 0.85rem", marginBottom: "0.85rem",
        fontSize: "0.75rem", color: "#6b7280",
        borderLeft: `3px solid ${p.accent}`,
      }}>
        <span style={{ fontWeight: 600, color: "#0d1117" }}>Impact: </span>
        {p.impact}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {p.tags.map((t) => (
          <span key={t} style={{
            fontSize: "0.68rem", padding: "0.2rem 0.6rem",
            borderRadius: "100px",
            background: `${p.accent}10`, color: p.accent,
            border: `1px solid ${p.accent}20`, fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function AIProjects() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });
  const ripRef = useRef<HTMLDivElement>(null);
  const ripInView = useInView(ripRef, { once: true, margin: "-60px" });
  const toolsRef = useRef<HTMLDivElement>(null);
  const toolsInView = useInView(toolsRef, { once: true });

  return (
    <section id="ai" style={{
      padding: "6rem 4rem", background: "#f5f3ee",
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: "absolute", top: "10%", right: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div ref={titleRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#7c3aed",
            marginBottom: "0.75rem", fontFamily: "Syne, sans-serif",
          }}
        >AI-Augmented CRM Development</motion.div>

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
        >AI Projects & Tools</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            color: "#6b7280", fontSize: "0.9rem",
            marginBottom: "3rem", maxWidth: "60ch",
          }}
        >
          Building the next generation of CRM intelligence — combining D365 expertise with Azure OpenAI, Copilot Studio, and AI automation to deliver smarter CRM systems.
        </motion.p>
      </div>

      {/* ── FEATURED: RIP-2026 (Currently Building) ── */}
      <motion.div
        ref={ripRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ripInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "#0d1117",
          borderRadius: "20px",
          padding: "2.5rem",
          marginBottom: "2rem",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Background glow inside card */}
        <div style={{
          position: "absolute", top: "-30%", right: "-10%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,108,245,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "30%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Top bar */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-start", flexWrap: "wrap", gap: "1rem",
          marginBottom: "1.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)",
                color: "#4ade80", padding: "0.3rem 0.85rem",
                borderRadius: "100px", fontSize: "0.72rem", fontWeight: 600,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              In Development · Private Repo
            </motion.span>
            <span style={{
              background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)",
              padding: "0.3rem 0.85rem", borderRadius: "100px",
              fontSize: "0.72rem", fontWeight: 500,
            }}>RIP-2026</span>
          </div>
          <span style={{
            fontSize: "0.72rem", color: "rgba(255,255,255,0.3)",
            fontFamily: "monospace",
          }}>March 2026 →</span>
        </div>

        {/* Title */}
        <div style={{
          fontFamily: "Syne, sans-serif", fontWeight: 800,
          fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
          letterSpacing: "-0.02em", color: "white",
          marginBottom: "0.5rem",
        }}>Revenue Intelligence Platform</div>
        <div style={{
          fontSize: "0.85rem", color: "rgba(255,255,255,0.4)",
          marginBottom: "1.5rem",
        }}>
          Full-stack CRM + Data Analytics + AI platform — production-grade, corporate Agile delivery from scratch
        </div>

        {/* What I'm Building */}
        <div>
          <div style={{
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "#f5a623", marginBottom: "0.85rem",
          }}>What I&apos;m Building</div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              "C# Plugins for D365 Lead & Opportunity automation",
              "Azure Functions (.NET 8) + Azure OpenAI GPT-4o scoring",
              "Node.js + Express REST API for CRM operations",
              "Next.js + React frontend with Tailwind CSS",
              "PostgreSQL + Prisma ORM data layer",
              "Power Automate flows for async CRM orchestration",
              "Docker local dev + GitHub CI/CD pipeline",
            ].map((b) => (
              <li key={b} style={{
                fontSize: "0.82rem", color: "rgba(255,255,255,0.65)",
                paddingLeft: "1.2rem", position: "relative",
              }}>
                <span style={{ position: "absolute", left: 0, color: "#1a6cf5", fontSize: "0.7rem" }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div style={{
          marginTop: "1.75rem", paddingTop: "1.75rem",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{
            fontSize: "0.68rem", fontWeight: 600, color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem",
          }}>Tech Stack</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {ripStack.map((t) => (
              <span key={t} style={{
                fontSize: "0.72rem", padding: "0.25rem 0.7rem",
                borderRadius: "6px",
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontWeight: 400,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Other AI Projects ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "1.5rem",
        marginBottom: "3rem",
      }}>
        {otherProjects.map((p, i) => <OtherCard key={p.name} p={p} index={i} />)}
      </div>

      {/* ── AI Tools I Work With ── */}
      <motion.div
        ref={toolsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={toolsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          background: "white", border: "1px solid #d8d3c8",
          borderRadius: "16px", padding: "2rem",
        }}
      >
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem",
          marginBottom: "1.25rem", flexWrap: "wrap",
        }}>
          <div style={{
            fontFamily: "Syne, sans-serif", fontWeight: 700,
            fontSize: "1rem", color: "#0d1117",
          }}>AI Tools I Work With</div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <span style={{
              fontSize: "0.65rem", fontWeight: 600, padding: "0.2rem 0.6rem",
              borderRadius: "100px", background: "#dcfce7", color: "#15803d",
              border: "1px solid #bbf7d0",
            }}>● Using daily</span>
            <span style={{
              fontSize: "0.65rem", fontWeight: 600, padding: "0.2rem 0.6rem",
              borderRadius: "100px", background: "#fef9c3", color: "#854d0e",
              border: "1px solid #fef08a",
            }}>◐ Actively learning</span>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {aiTools.map((t, i) => (
            <motion.span
              key={t.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={toolsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              style={{
                fontSize: "0.8rem", fontWeight: 500,
                padding: "0.4rem 0.9rem", borderRadius: "100px",
                background: t.status === "using" ? "#e8f0fe" : "#fefce8",
                color: t.status === "using" ? "#1a4fa8" : "#92400e",
                border: `1px solid ${t.status === "using" ? "#bfdbfe" : "#fde68a"}`,
                display: "flex", alignItems: "center", gap: "0.35rem",
              }}
            >
              <span style={{ fontSize: "0.6rem" }}>
                {t.status === "using" ? "●" : "◐"}
              </span>
              {t.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #ai { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
