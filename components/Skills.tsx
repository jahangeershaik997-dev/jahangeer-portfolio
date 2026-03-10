"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "CRM Platform",
    tags: ["Dynamics 365", "Dataverse", "D365 Plugins", "CRM 2013–2016", "SSRS Reports", "Ribbon Workbench", "XRM Toolbox", "Business Process Flow"],
  },
  {
    title: "Azure & Cloud",
    tags: ["Azure Functions", "Azure DevOps", "CI/CD Pipelines", "Power Platform Build Tools", "Power Automate", "Azure OpenAI", "Managed Identity"],
  },
  {
    title: "Development",
    tags: ["C# .NET", ".NET Core", ".NET 8 Isolated", "JavaScript", "Web API", "OData", "FetchXML", "SQL Server", "Postman"],
  },
  {
    title: "Methodology",
    tags: ["Agile / Scrum", "SOLID Principles", "Unit Testing", "Git", "Technical Leadership", "Stakeholder Comms", "Code Review"],
  },
];

function SkillGroup({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "14px",
        padding: "1.75rem",
      }}
      whileHover={{ background: "rgba(255,255,255,0.08)" }}
    >
      <h3 style={{
        fontFamily: "Syne, sans-serif", fontSize: "0.78rem",
        fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em",
        color: "#f5a623", marginBottom: "1rem",
      }}>{group.title}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
        {group.tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.04, duration: 0.4 }}
            style={{
              fontSize: "0.78rem", padding: "0.32rem 0.8rem",
              borderRadius: "100px",
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontWeight: 400,
            }}
          >{tag}</motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="skills" style={{
      padding: "6rem 4rem", background: "#0d1117", color: "white",
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      {/* Glow */}
      <div style={{
        position: "absolute", top: "30%", left: "50%", transform: "translate(-50%,-50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(26,108,245,0.1) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={titleRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#f5a623", marginBottom: "0.75rem",
            fontFamily: "Syne, sans-serif",
          }}
        >What I work with</motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: "white", marginBottom: "3rem",
          }}
        >Technical Skills</motion.h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "1.5rem",
      }}>
        {skillGroups.map((g, i) => <SkillGroup key={g.title} group={g} index={i} />)}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
