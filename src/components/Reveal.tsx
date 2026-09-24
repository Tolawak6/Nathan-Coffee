import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

/* --------------------------- Scroll reveal --------------------------- */

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

export function Reveal({ children, className, delay = 0, y = 30, once = true }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------- Section heading ------------------------- */

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "center",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.32em]",
            isLight ? "text-leaf-300" : "text-leaf-500"
          )}
        >
          <span className={cn("h-px w-8", isLight ? "bg-leaf-300/70" : "bg-leaf-500/60")} />
          {eyebrow}
          <span className={cn("h-px w-8", isLight ? "bg-leaf-300/70" : "bg-leaf-500/60")} />
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl leading-[1.08] font-medium text-balance sm:text-5xl",
            isLight ? "text-cream" : "text-coffee-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              isLight ? "text-coffee-100/75" : "text-coffee-700/80"
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
