"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

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

function CertCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      {/* Lightbox overlay */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: "2rem",
          }}
        >
          <motion.img
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            src="/pl400-certificate.jpg"
            alt="PL-400 Certificate – Shaik Jahangeer"
            style={{
              maxWidth: "min(900px, 90vw)",
              maxHeight: "85vh",
              borderRadius: "16px",
              boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: "fixed", top: "1.5rem", right: "1.5rem",
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", borderRadius: "50%", width: "2.5rem", height: "2.5rem",
              fontSize: "1.2rem", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >✕</button>
        </motion.div>
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          background: "rgba(0,120,212,0.06)",
          border: "1px solid rgba(0,120,212,0.22)",
          borderRadius: "20px",
          padding: "2rem",
          alignItems: "center",
          maxWidth: "860px",
        }}
      >
        {/* Left: cert details */}
        <div>
          {/* Microsoft logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.4rem" }}>
            <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
              <rect x="12" y="1" width="10" height="10" fill="#7FBA00"/>
              <rect x="1" y="12" width="10" height="10" fill="#00A4EF"/>
              <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
            </svg>
            <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Microsoft</span>
          </div>

          {/* Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "0.8rem" }}>
            <span style={{
              fontFamily: "Syne, sans-serif", fontWeight: 800,
              fontSize: "1.6rem", color: "white", letterSpacing: "-0.02em",
            }}>PL-400</span>
            <span style={{
              fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.65rem",
              borderRadius: "100px", background: "rgba(0,120,212,0.3)",
              color: "#5BB5FF", textTransform: "uppercase", letterSpacing: "0.1em",
            }}>Certified</span>
          </div>

          <p style={{
            fontSize: "0.9rem", color: "rgba(255,255,255,0.8)",
            fontWeight: 500, marginBottom: "1.4rem", lineHeight: 1.5,
          }}>
            Microsoft Certified:<br />
            <strong style={{ color: "white" }}>Power Platform Developer Associate</strong>
          </p>

          {/* Meta grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.5rem" }}>
            {[
              { label: "Score", value: "853 / 1000" },
              { label: "Earned", value: "1 April 2026" },
              { label: "Expires", value: "2 April 2027" },
              { label: "Credential", value: "459C7DDEE3B5FF2C" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ fontSize: "0.67rem", color: "#f5a623", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{label}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="https://learn.microsoft.com/en-us/users/shaikjahangeer-5450/credentials/459c7ddee3b5ff2c?ref=https%3A%2F%2Fwww.linkedin.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.78rem", fontWeight: 600, padding: "0.5rem 1.1rem",
                borderRadius: "8px", background: "#0078D4", color: "white",
                textDecoration: "none", border: "none", cursor: "pointer",
              }}
            >Verify ↗</a>
            <button
              onClick={() => setLightbox(true)}
              style={{
                fontSize: "0.78rem", fontWeight: 600, padding: "0.5rem 1.1rem",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer",
              }}
            >View Certificate</button>
          </div>
        </div>

        {/* Right: certificate image thumbnail */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setLightbox(true)}
          style={{ cursor: "zoom-in", borderRadius: "12px", overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src="/pl400-certificate.jpg"
            alt="PL-400 Certificate – Shaik Jahangeer"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const certRef = useRef<HTMLDivElement>(null);
  const certInView = useInView(certRef, { once: true });

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

      {/* Certifications */}
      <div ref={certRef} style={{ marginTop: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#f5a623", marginBottom: "0.75rem",
            fontFamily: "Syne, sans-serif",
          }}
        >Microsoft Certified</motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: "white", marginBottom: "2rem",
          }}
        >Certifications</motion.h3>

        <CertCard />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills { padding: 4rem 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
