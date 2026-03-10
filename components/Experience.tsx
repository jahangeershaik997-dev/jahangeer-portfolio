"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    date: "Dec 2025 – Present",
    company: "PEI Group · Expian Technologies, Bangalore",
    role: "Senior MS Dynamics 365 CRM Developer",
    current: true,
    bullets: [
      "Built C# plugins and Azure Functions to automate subscriber management across PEI's portfolio of specialist finance brands",
      "Designed and maintained CI/CD pipelines using Azure DevOps and Power Platform Build Tools for automated D365 deployments",
      "Integrated Power Automate flows for subscriber onboarding, renewals, and cross-brand data synchronisation",
      "Provided technical leadership and mentorship to junior developers in an Agile (Scrum) environment",
    ],
  },
  {
    date: "Feb 2019 – Nov 2025",
    company: "Starlite Infotech Ltd, Hyderabad",
    role: "Senior MS Dynamics CRM Developer",
    current: false,
    bullets: [
      "Delivered CRM solutions for global enterprise clients including MSCI, Unilever, and Walmart (US pharmacy)",
      "Developed plugins, JavaScript customisations, workflows, and SSRS reports across multiple D365 implementations",
      "Led entity, form, relationship, and security role configuration across several large-scale CRM projects",
      "Performed end-to-end solution import/export, sandbox-to-production deployments, and ribbon customisations",
    ],
  },
];

function ExpItem({ job, index }: { job: typeof jobs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: "relative", paddingBottom: "3rem", paddingLeft: "2rem" }}
    >
      {/* Timeline dot */}
      <div style={{
        position: "absolute", left: "-2.35rem", top: "0.4rem",
        width: 12, height: 12, borderRadius: "50%",
        background: job.current ? "#1a6cf5" : "#d8d3c8",
        border: "2px solid white",
        boxShadow: job.current ? "0 0 0 4px rgba(26,108,245,0.2)" : "none",
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
        <span style={{
          fontSize: "0.75rem", fontWeight: 500, color: "#1a6cf5",
          background: "#e8f0fe", padding: "0.25rem 0.8rem",
          borderRadius: "100px",
        }}>{job.date}</span>
        {job.current && (
          <span style={{
            fontSize: "0.7rem", fontWeight: 600, color: "#15803d",
            background: "#dcfce7", padding: "0.2rem 0.65rem",
            borderRadius: "100px", letterSpacing: "0.05em", textTransform: "uppercase",
          }}>Current</span>
        )}
        <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>{job.company}</span>
      </div>

      <div style={{
        fontFamily: "Syne, sans-serif", fontSize: "1.25rem",
        fontWeight: 700, letterSpacing: "-0.01em", marginBottom: "0.85rem",
      }}>{job.role}</div>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
        {job.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + i * 0.06 + 0.3 }}
            style={{
              fontSize: "0.9rem", color: "#6b7280",
              paddingLeft: "1.35rem", position: "relative",
            }}
          >
            <span style={{
              position: "absolute", left: 0, color: "#1a6cf5",
              fontSize: "0.72rem", top: "0.12rem",
            }}>→</span>
            {b}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="experience" style={{
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
        >Career History</motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 800, letterSpacing: "-0.02em",
            marginBottom: "3rem",
          }}
        >Work Experience</motion.h2>
      </div>

      <div style={{
        position: "relative", paddingLeft: "2rem",
        borderLeft: "2px solid linear-gradient(to bottom, #1a6cf5, transparent)",
      }}>
        {/* Timeline line */}
        <div style={{
          position: "absolute", left: 0, top: "0.5rem", bottom: 0,
          width: 2,
          background: "linear-gradient(to bottom, #1a6cf5 0%, #d8d3c8 100%)",
        }} />

        {jobs.map((j, i) => <ExpItem key={j.role} job={j} index={i} />)}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
