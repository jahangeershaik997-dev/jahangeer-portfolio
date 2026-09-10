import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({ eyebrow, title, description, dark, align = "left", id }: Props) {
  return (
    <Reveal className={`mb-12 max-w-3xl md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`eyebrow ${dark ? "text-sky-300" : ""}`}>
        <span aria-hidden="true" className={`h-px w-6 ${dark ? "bg-sky-300" : "bg-azure"}`} />
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-4 text-3xl font-bold tracking-[-0.02em] md:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-night-text" : "text-body"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
