import { motion } from "framer-motion";
import {
  Blender,
  Cherry,
  Coffee,
  CupSoda,
  Flame,
  Hand,
  Sun,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { IMAGES, PROCESS_STEPS } from "../data/site";
import { Reveal, SectionHeading } from "./Reveal";

const STEP_ICONS: LucideIcon[] = [Cherry, Hand, Waves, Sun, Flame, Blender, CupSoda, Coffee];

export function Process() {
  return (
    <section
      id="process"
      aria-label="The journey of Ethiopian coffee"
      className="grain relative overflow-hidden bg-coffee-950 py-24 sm:py-32"
    >
      {/* auras */}
      <div aria-hidden className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-leaf-700/15 blur-[140px]" />
      <div aria-hidden className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-leaf-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="light"
          eyebrow="From Cherry to Cup"
          title={
            <>
              The journey of <em className="font-display text-leaf-300 italic">every cherry</em>
            </>
          }
          lead="Eight passages stand between an Ethiopian hillside and your morning. Each one is small — together, they are everything."
        />

        <div className="mt-20 space-y-20 sm:space-y-24">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i];
            const flip = i % 2 === 1;
            return (
              <div
                key={step.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
              >
                {/* image */}
                <motion.div
                  initial={{ opacity: 0, x: flip ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={flip ? "md:order-2" : ""}
                >
                  <div className="group relative mx-auto max-w-[520px]">
                    <div className="overflow-hidden rounded-[26px] ring-1 ring-cream/10">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="aspect-[5/4] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                      />
                    </div>
                    {/* icon badge */}
                    <span className="absolute -bottom-5 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-leaf-600 text-white shadow-[0_16px_32px_-12px_rgba(49,106,56,0.9)] ring-4 ring-coffee-950 transition-transform duration-500 group-hover:rotate-6">
                      <Icon className="h-6 w-6" strokeWidth={1.9} />
                    </span>
                    <span className="absolute top-4 right-5 font-display text-2xl text-cream/80 italic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>

                {/* text */}
                <motion.div
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={flip ? "md:order-1 md:text-right" : ""}
                >
                  <span className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-leaf-300 uppercase">
                    {!flip && <span className="h-px w-8 bg-leaf-300/70" />}
                    Step {String(i + 1).padStart(2, "0")}
                    {flip && <span className="h-px w-8 bg-leaf-300/70" />}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-medium text-cream sm:text-4xl">
                    {step.title}
                  </h3>
                  <p className={`mt-4 max-w-md leading-relaxed text-coffee-100/75 ${flip ? "md:ml-auto" : ""}`}>
                    {step.text}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* closing banner */}
        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-[30px] ring-1 ring-cream/12">
            <img
              src={IMAGES.processEnd}
              alt="A finished cup of coffee resting among roasted beans"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/92 via-coffee-950/70 to-coffee-950/35" />
            <div className="relative z-10 max-w-lg p-9 sm:p-12">
              <p className="text-[11px] font-bold tracking-[0.32em] text-leaf-300 uppercase">The destination</p>
              <p className="mt-4 font-display text-3xl leading-snug font-medium text-cream sm:text-4xl">
                Every step was a decision.{" "}
                <em className="font-display text-leaf-300 italic">You can taste each one.</em>
              </p>
              <a
                href="#contact"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-[13px] font-bold text-coffee-900 transition-all duration-300 hover:bg-leaf-600 hover:text-white"
              >
                Taste the journey
                <Coffee className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
