"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { num: 7, suffix: "+", label: "Years Enterprise CRM", sub: "D365 · Dataverse · Power Platform" },
  { num: 5, suffix: "", label: "Global Enterprise Brands", sub: "MSCI · Unilever · Walmart · PEI · SIS" },
  { num: 3, suffix: "", label: "Continents Served", sub: "North America · Europe · Asia" },
  { num: 50, suffix: "+", label: "Plugin Assemblies Deployed", sub: "Pre-Validation · Post-Create · Async" },
];

function AnimatedNum({ n, suffix, inView }: { n: number; suffix: string; inView: boolean }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let cur = 0;
    const step = Math.ceil(n / 35);
    const t = setInterval(() => {
      cur += step;
      if (cur >= n) { setVal(n); clearInterval(t); }
      else setVal(cur);
    }, 28);
    return () => clearInterval(t);
  }, [inView, n]);

  return (
    <span style={{
      fontFamily: "Syne, sans-serif",
      fontSize: "clamp(2.8rem, 4vw, 3.8rem)",
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 1,
      background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>{val}{suffix}</span>
  );
}

export default function ImpactStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{
      background: "#0d1117",
      padding: "4rem",
      position: "relative",
      zIndex: 1,
      overflow: "hidden",
    }}>
      {/* Decorative gradient line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, transparent, #1a6cf5, #f5a623, transparent)",
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.5rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{
              padding: "2rem 1.5rem",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              position: "relative",
            }}
          >
            <AnimatedNum n={s.num} suffix={s.suffix} inView={inView} />
            <div style={{
              fontSize: "0.9rem", fontWeight: 600, color: "white",
              margin: "0.5rem 0 0.3rem", fontFamily: "Syne, sans-serif",
            }}>{s.label}</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>
              {s.sub}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          section { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
