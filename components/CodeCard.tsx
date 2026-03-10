"use client";
import { motion } from "framer-motion";

// Syntax-highlighted D365 C# plugin — no extra libraries, pure CSS
const code = [
  { parts: [
    { t: "public class ", c: "#569cd6" }, { t: "LeadScoringPlugin", c: "#4ec9b0" },
    { t: " : ", c: "#d4d4d4" }, { t: "IPlugin", c: "#4ec9b0" },
  ]},
  { parts: [{ t: "{", c: "#d4d4d4" }] },
  { parts: [
    { t: "  public void ", c: "#569cd6" }, { t: "Execute", c: "#dcdcaa" },
    { t: "(IServiceProvider ", c: "#4ec9b0" }, { t: "sp)", c: "#9cdcfe" },
  ]},
  { parts: [{ t: "  {", c: "#d4d4d4" }] },
  { parts: [
    { t: "    var ", c: "#569cd6" }, { t: "ctx", c: "#9cdcfe" },
    { t: " = (", c: "#d4d4d4" }, { t: "IPluginExecutionContext", c: "#4ec9b0" }, { t: ")", c: "#d4d4d4" },
  ]},
  { parts: [
    { t: "          sp.GetService(", c: "#d4d4d4" },
    { t: "typeof", c: "#569cd6" }, { t: "(", c: "#d4d4d4" },
    { t: "IPluginExecutionContext", c: "#4ec9b0" }, { t: "));", c: "#d4d4d4" },
  ]},
  { parts: [] }, // blank line
  { parts: [
    { t: "    // Stage 10 — Pre-Validation", c: "#6a9955" },
  ]},
  { parts: [
    { t: "    var ", c: "#569cd6" }, { t: "lead", c: "#9cdcfe" },
    { t: " = (", c: "#d4d4d4" }, { t: "Entity", c: "#4ec9b0" },
    { t: ")ctx.InputParameters[", c: "#d4d4d4" },
    { t: '"Target"', c: "#ce9178" }, { t: "];", c: "#d4d4d4" },
  ]},
  { parts: [
    { t: "    if ", c: "#c586c0" }, { t: "(!lead.Contains(", c: "#d4d4d4" },
    { t: '"emailaddress1"', c: "#ce9178" }, { t: "))", c: "#d4d4d4" },
  ]},
  { parts: [
    { t: "      throw new ", c: "#569cd6" },
    { t: "InvalidPluginExecutionException", c: "#4ec9b0" }, { t: "(", c: "#d4d4d4" },
  ]},
  { parts: [
    { t: '        "Business email required."', c: "#ce9178" }, { t: ");", c: "#d4d4d4" },
  ]},
  { parts: [] }, // blank line
  { parts: [
    { t: "    // AI Score → Pending", c: "#6a9955" },
  ]},
  { parts: [
    { t: "    lead", c: "#9cdcfe" },
    { t: '[', c: "#d4d4d4" }, { t: '"sd_aiqualificationscore"', c: "#ce9178" }, { t: "] =", c: "#d4d4d4" },
  ]},
  { parts: [
    { t: "      new ", c: "#569cd6" }, { t: "OptionSetValue", c: "#4ec9b0" },
    { t: "(", c: "#d4d4d4" }, { t: "100000003", c: "#b5cea8" }, { t: ");", c: "#d4d4d4" },
  ]},
  { parts: [{ t: "  }", c: "#d4d4d4" }] },
  { parts: [{ t: "}", c: "#d4d4d4" }] },
];

export default function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, rotate: 3 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "absolute",
        right: "4%",
        top: "52%",
        transform: "translateY(-50%)",
        width: "min(480px, 46vw)",
        background: "#1e1e1e",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)",
        zIndex: 2,
      }}
      whileHover={{ scale: 1.02, rotate: 0.5 }}
    >
      {/* Window chrome */}
      <div style={{
        background: "#2d2d2d",
        padding: "0.65rem 1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        borderBottom: "1px solid #3a3a3a",
      }}>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840" }} />
        <span style={{
          marginLeft: "0.75rem",
          fontSize: "0.72rem", color: "#858585",
          fontFamily: "monospace",
        }}>LeadScoringPlugin.cs</span>
        <span style={{
          marginLeft: "auto",
          fontSize: "0.65rem",
          background: "rgba(26,108,245,0.2)",
          color: "#60a5fa",
          padding: "0.15rem 0.5rem",
          borderRadius: "4px",
          fontFamily: "monospace",
        }}>C# · .NET 4.6.2</span>
      </div>

      {/* Code */}
      <div style={{
        padding: "1.1rem 1.4rem",
        fontFamily: "'Cascadia Code', 'Fira Code', 'Courier New', monospace",
        fontSize: "0.72rem",
        lineHeight: 1.7,
        overflowX: "hidden",
      }}>
        {code.map((line, i) => (
          <div key={i} style={{ display: "flex", minHeight: "1.2em" }}>
            <span style={{
              color: "#4a4a5a", marginRight: "1.2rem",
              minWidth: "1.5rem", textAlign: "right",
              userSelect: "none", fontSize: "0.65rem",
            }}>{i + 1}</span>
            <span>
              {line.parts.map((p, j) => (
                <span key={j} style={{ color: p.c }}>{p.t}</span>
              ))}
            </span>
          </div>
        ))}
      </div>

      {/* Footer badge */}
      <div style={{
        padding: "0.5rem 1.4rem",
        borderTop: "1px solid #2a2a2a",
        display: "flex", gap: "0.75rem", alignItems: "center",
      }}>
        <span style={{
          fontSize: "0.65rem", color: "#6a9955",
          display: "flex", alignItems: "center", gap: "0.3rem",
        }}>● Pre-Validation · Stage 10 · Sync</span>
        <span style={{
          fontSize: "0.65rem", color: "#858585", marginLeft: "auto",
        }}>Dynamics 365 / Dataverse</span>
      </div>
    </motion.div>
  );
}
