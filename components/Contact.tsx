"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" style={{
      padding: "7rem 4rem",
      background: "#0d1117", color: "white",
      position: "relative", zIndex: 1,
      textAlign: "center",
      overflow: "hidden",
    }}>
      {/* Glow orbs */}
      <div style={{
        position: "absolute", top: "20%", left: "20%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,108,245,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "20%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{
            fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "#f5a623", marginBottom: "0.75rem",
            fontFamily: "Syne, sans-serif",
          }}
        >Let's connect</motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "white", marginBottom: "1rem", lineHeight: 1.1,
          }}
        >
          Open to Senior D365<br />& Azure Roles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            color: "rgba(255,255,255,0.5)", fontSize: "1rem",
            marginBottom: "3rem",
          }}
        >
          Available immediately · Hyderabad, India · Open to remote
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}
        >
          <a href="mailto:jahangeershaik997@gmail.com" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.95rem 1.9rem", borderRadius: "8px",
            background: "#1a6cf5", color: "white",
            fontWeight: 500, fontSize: "0.9rem", textDecoration: "none",
            transition: "all 0.25s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            ✉ jahangeershaik997@gmail.com
          </a>

          <a href="tel:+919059314625" style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            padding: "0.95rem 1.9rem", borderRadius: "8px",
            background: "rgba(255,255,255,0.1)", color: "white",
            border: "1px solid rgba(255,255,255,0.15)",
            fontWeight: 500, fontSize: "0.9rem", textDecoration: "none",
            transition: "all 0.25s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            📞 +91 90593 14625
          </a>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.6rem",
            marginTop: "3rem",
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
            color: "#4ade80", padding: "0.6rem 1.4rem", borderRadius: "100px",
            fontSize: "0.82rem", fontWeight: 500,
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
            display: "inline-block",
            boxShadow: "0 0 0 3px rgba(34,197,94,0.3)",
          }} />
          Currently available — response within 24h
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 4rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
