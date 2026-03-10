"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const flow = [
  { icon: "👤", label: "Lead Created", sub: "Dataverse", color: "#1a6cf5" },
  { icon: "⚙️", label: "C# Plugin", sub: "Stage 10 · Sync", color: "#7c3aed" },
  { icon: "✅", label: "Lead Saved", sub: "Status = Valid", color: "#059669" },
  { icon: "⚡", label: "Power Automate", sub: "Automated Flow", color: "#0891b2" },
  { icon: "☁️", label: "Azure Function", sub: ".NET 8 Isolated", color: "#f5a623" },
  { icon: "🤖", label: "Azure OpenAI", sub: "GPT-4o Scoring", color: "#e11d48" },
  { icon: "🏆", label: "AI Score", sub: "Hot / Warm / Cold", color: "#16a34a" },
];

const specialisms = [
  {
    icon: "🔌",
    title: "Plugin Architecture",
    points: ["Pre-Validation (Stage 10)", "Post-Create (Stage 40)", "Async Post-Operation", "Custom Actions"],
    color: "#1a6cf5",
  },
  {
    icon: "⚡",
    title: "Power Platform",
    points: ["Automated Cloud Flows", "Business Process Flows", "Model-Driven Apps", "Dataverse APIs"],
    color: "#7c3aed",
  },
  {
    icon: "☁️",
    title: "Azure Integration",
    points: ["Azure Functions (.NET 8)", "Azure DevOps CI/CD", "Managed Identity", "Application Insights"],
    color: "#0891b2",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    points: ["Azure OpenAI (GPT-4o)", "Lead Qualification AI", "Prompt Engineering", "Confidence Scoring"],
    color: "#f5a623",
  },
];

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const specRef = useRef<HTMLDivElement>(null);
  const specInView = useInView(specRef, { once: true, margin: "-60px" });

  return (
    <section style={{
      padding: "6rem 4rem", background: "#f5f3ee",
      position: "relative", zIndex: 1,
    }}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#1a6cf5",
            marginBottom: "0.75rem", fontFamily: "Syne, sans-serif",
          }}
        >How I architect solutions</motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
          }}
        >D365 Ecosystem Expertise</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "3rem", maxWidth: "60ch" }}
        >
          End-to-end architecture from Dataverse core to cloud-scale AI integrations — the full stack a modern D365 project demands.
        </motion.p>

        {/* Flow diagram */}
        <div style={{
          background: "white", border: "1px solid #d8d3c8",
          borderRadius: "16px", padding: "2rem",
          marginBottom: "3rem",
          overflowX: "auto",
        }}>
          <div style={{
            display: "flex", alignItems: "center",
            gap: "0.5rem", minWidth: "max-content",
            padding: "0.5rem 0",
          }}>
            {flow.map((node, i) => (
              <div key={node.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: "12px",
                    background: `${node.color}15`,
                    border: `2px solid ${node.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: `0 4px 16px ${node.color}15`,
                  }}>{node.icon}</div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: "0.72rem", fontWeight: 600,
                      color: "#0d1117", whiteSpace: "nowrap",
                    }}>{node.label}</div>
                    <div style={{
                      fontSize: "0.62rem", color: node.color,
                      fontWeight: 500, whiteSpace: "nowrap",
                    }}>{node.sub}</div>
                  </div>
                </motion.div>

                {i < flow.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    style={{
                      display: "flex", flexDirection: "column",
                      alignItems: "center", gap: "2px",
                    }}
                  >
                    <div style={{
                      width: "2rem", height: 2,
                      background: `linear-gradient(90deg, ${node.color}, ${flow[i+1].color})`,
                      borderRadius: 1,
                    }} />
                    <div style={{
                      fontSize: "0.55rem", color: "#9ca3af",
                      whiteSpace: "nowrap",
                    }}>→</div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialism cards */}
      <div ref={specRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {specialisms.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={specInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "white", border: "1px solid #d8d3c8",
              borderRadius: "12px", padding: "1.5rem",
              borderTop: `3px solid ${s.color}`,
              transition: "box-shadow 0.25s, transform 0.25s",
            }}
            whileHover={{ y: -4, boxShadow: `0 16px 40px ${s.color}14` }}
          >
            <div style={{
              fontSize: "1.5rem", marginBottom: "0.75rem",
            }}>{s.icon}</div>
            <div style={{
              fontFamily: "Syne, sans-serif", fontWeight: 700,
              fontSize: "0.95rem", marginBottom: "0.85rem", color: "#0d1117",
            }}>{s.title}</div>
            <ul style={{ listStyle: "none" }}>
              {s.points.map((p) => (
                <li key={p} style={{
                  fontSize: "0.8rem", color: "#6b7280",
                  padding: "0.2rem 0 0.2rem 1rem",
                  position: "relative",
                }}>
                  <span style={{
                    position: "absolute", left: 0,
                    color: s.color, fontSize: "0.7rem",
                  }}>▸</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #ecosystem { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
