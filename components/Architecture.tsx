"use client";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

/**
 * Layered CRM architecture diagram (SVG, viewBox-based so it scales).
 * Rows are layers; boxes are components; the vertical lines carry animated
 * pulses to suggest flow. Illustrative of how the pieces relate, not a
 * specific production system.
 */
type Node = { id: string; label: string; x: number; w: number; tone: "user" | "core" | "client" | "server" | "api" | "cloud" | "ext" };
type Layer = { y: number; title: string; nodes: Node[] };

const W = 960;
const ROW_H = 46;
const layers: Layer[] = [
  { y: 24, title: "People", nodes: [{ id: "users", label: "Users", x: 380, w: 200, tone: "user" }] },
  { y: 112, title: "Platform", nodes: [{ id: "d365", label: "Dynamics 365 CE", x: 330, w: 300, tone: "core" }] },
  {
    y: 200,
    title: "Client-side",
    nodes: [
      { id: "forms", label: "Forms", x: 60, w: 180, tone: "client" },
      { id: "rules", label: "Business Rules", x: 270, w: 200, tone: "client" },
      { id: "js", label: "JavaScript", x: 500, w: 180, tone: "client" },
      { id: "bpf", label: "BPF", x: 710, w: 190, tone: "client" },
    ],
  },
  {
    y: 288,
    title: "Server-side",
    nodes: [
      { id: "plugins", label: "Plugins (C#.NET)", x: 200, w: 250, tone: "server" },
      { id: "workflows", label: "Workflows", x: 510, w: 250, tone: "server" },
    ],
  },
  {
    y: 376,
    title: "Service layer",
    nodes: [
      { id: "webapi", label: "WebAPI", x: 120, w: 210, tone: "api" },
      { id: "odata", label: "OData", x: 375, w: 210, tone: "api" },
      { id: "integrations", label: "Integrations", x: 630, w: 210, tone: "api" },
    ],
  },
  {
    y: 464,
    title: "Cloud automation",
    nodes: [
      { id: "functions", label: "Azure Functions", x: 200, w: 250, tone: "cloud" },
      { id: "flow", label: "Power Automate", x: 510, w: 250, tone: "cloud" },
    ],
  },
  {
    y: 552,
    title: "Outside CRM",
    nodes: [
      { id: "external", label: "External Systems", x: 200, w: 250, tone: "ext" },
      { id: "data", label: "Data", x: 510, w: 250, tone: "ext" },
    ],
  },
];

const H = 552 + ROW_H + 24;

const toneStyle: Record<Node["tone"], { fill: string; stroke: string; text: string }> = {
  user: { fill: "rgba(255,255,255,0.06)", stroke: "rgba(255,255,255,0.35)", text: "#ffffff" },
  core: { fill: "#0f6cbd", stroke: "#4c9be0", text: "#ffffff" },
  client: { fill: "rgba(76,155,224,0.12)", stroke: "rgba(76,155,224,0.55)", text: "#dbeafe" },
  server: { fill: "rgba(139,116,214,0.14)", stroke: "rgba(139,116,214,0.6)", text: "#e9e3fb" },
  api: { fill: "rgba(45,180,180,0.12)", stroke: "rgba(45,180,180,0.6)", text: "#d5f3f3" },
  cloud: { fill: "rgba(240,160,60,0.12)", stroke: "rgba(240,160,60,0.6)", text: "#fde7c7" },
  ext: { fill: "rgba(255,255,255,0.04)", stroke: "rgba(255,255,255,0.28)", text: "rgba(255,255,255,0.85)" },
};

// Connections between layer centres. Each is a vertical link from a node bottom
// to the next layer's node top.
const links: Array<[string, string]> = [
  ["users", "d365"],
  ["d365", "forms"], ["d365", "rules"], ["d365", "js"], ["d365", "bpf"],
  ["forms", "plugins"], ["rules", "plugins"], ["js", "workflows"], ["bpf", "workflows"],
  ["plugins", "webapi"], ["plugins", "odata"], ["workflows", "odata"], ["workflows", "integrations"],
  ["webapi", "functions"], ["odata", "functions"], ["odata", "flow"], ["integrations", "flow"],
  ["functions", "external"], ["functions", "data"], ["flow", "external"], ["flow", "data"],
];

const nodeMap = new Map<string, { cx: number; top: number; bottom: number }>();
for (const l of layers) {
  for (const n of l.nodes) nodeMap.set(n.id, { cx: n.x + n.w / 2, top: l.y, bottom: l.y + ROW_H });
}

function pathFor(a: string, b: string) {
  const from = nodeMap.get(a)!;
  const to = nodeMap.get(b)!;
  const midY = (from.bottom + to.top) / 2;
  return `M ${from.cx} ${from.bottom} C ${from.cx} ${midY}, ${to.cx} ${midY}, ${to.cx} ${to.top}`;
}

const legend = [
  { label: "Client-side logic", tone: "client" as const },
  { label: "Server-side logic", tone: "server" as const },
  { label: "Service layer", tone: "api" as const },
  { label: "Cloud automation", tone: "cloud" as const },
];

const principles = [
  { title: "Client-side first where it belongs", body: "Forms, Business Rules, JavaScript and Business Process Flows guide users and validate early, keeping server logic focused." },
  { title: "Plugins and workflows for rules that must hold", body: "Synchronous and asynchronous C#.NET plugins and workflows enforce business logic on the server, with exception handling and unit tests." },
  { title: "Integrate through the platform APIs", body: "WebAPI, OData and FetchXML expose CRM data cleanly to other systems and to Azure Functions and Power Automate for orchestration." },
  { title: "Ship with solutions and pipelines", body: "Solution management, Azure DevOps, Power Platform Build Tools and Git-based CI/CD move changes between environments predictably." },
];

export default function Architecture() {
  const reduce = useReducedMotion();

  return (
    <section id="architecture" className="section-pad relative overflow-hidden bg-night text-white" aria-labelledby="architecture-title">
      <div aria-hidden="true" className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      <div className="container-x relative">
        <SectionHeading
          dark
          id="architecture-title"
          eyebrow="Architecture"
          title="How I build enterprise CRM solutions"
          description="The layers of a Dynamics 365 CE solution and how work flows between them: from users and the platform, through client and server logic, to the service layer, cloud automation and external systems."
        />

        <Reveal>
          <figure className="overflow-hidden rounded-2xl border border-night-line bg-night-2/70 p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] sm:p-5">
            <div className="overflow-x-auto">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="mx-auto block h-auto w-full min-w-[640px]"
                role="img"
                aria-labelledby="arch-svg-title arch-svg-desc"
              >
                <title id="arch-svg-title">Layered Dynamics 365 solution architecture</title>
                <desc id="arch-svg-desc">
                  Users interact with Dynamics 365 CE. Client-side logic uses Forms, Business Rules, JavaScript and Business
                  Process Flows. Server-side logic uses Plugins and Workflows. The service layer exposes WebAPI, OData and
                  Integrations. Azure Functions and Power Automate provide cloud automation to External Systems and Data.
                </desc>

                {/* Layer labels */}
                {layers.map((l) => (
                  <text key={l.title} x={8} y={l.y + ROW_H / 2 + 4} fill="rgba(255,255,255,0.38)" fontSize="10" fontFamily="var(--font-mono)" letterSpacing="1.5">
                    {l.title.toUpperCase()}
                  </text>
                ))}

                {/* Links */}
                {links.map(([a, b], i) => {
                  const d = pathFor(a, b);
                  return (
                    <g key={`${a}-${b}`}>
                      <motion.path
                        d={d}
                        fill="none"
                        stroke="rgba(255,255,255,0.16)"
                        strokeWidth="1.25"
                        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.03, ease: "easeOut" }}
                      />
                      {!reduce && (
                        <motion.circle
                          r="2.6"
                          fill="#7cc0ff"
                          initial={{ offsetDistance: "0%", opacity: 0 }}
                          whileInView={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                          viewport={{ once: false, amount: 0.2 }}
                          transition={{ duration: 2.4, delay: 1 + (i % 7) * 0.35, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                          style={{ offsetPath: `path("${d}")` }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Nodes */}
                {layers.map((l, li) =>
                  l.nodes.map((n, ni) => {
                    const t = toneStyle[n.tone];
                    return (
                      <motion.g
                        key={n.id}
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + li * 0.1 + ni * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <rect x={n.x} y={l.y} width={n.w} height={ROW_H} rx="9" fill={t.fill} stroke={t.stroke} strokeWidth="1.25" />
                        <text
                          x={n.x + n.w / 2}
                          y={l.y + ROW_H / 2 + 4.5}
                          textAnchor="middle"
                          fill={t.text}
                          fontSize="13"
                          fontWeight="600"
                          fontFamily="var(--font-sans)"
                        >
                          {n.label}
                        </text>
                      </motion.g>
                    );
                  }),
                )}
              </svg>
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-night-line pt-4 text-xs text-night-text">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {legend.map((g) => (
                  <li key={g.label} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-sm" style={{ background: toneStyle[g.tone].stroke }} aria-hidden="true" />
                    {g.label}
                  </li>
                ))}
              </ul>
              <span className="font-mono text-[0.68rem] text-white/45">Illustrative solution layering</span>
            </figcaption>
          </figure>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={0.06 * i} className="h-full">
              <li className="h-full rounded-xl border border-night-line bg-white/[0.03] p-5">
                <span className="font-mono text-[0.68rem] text-sky-300">0{i + 1}</span>
                <h3 className="mt-2 text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-night-text">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
