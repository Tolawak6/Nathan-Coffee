import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bean, Droplets, Mountain, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { COFFEES, type Coffee } from "../data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Coffees() {
  const [active, setActive] = useState<Coffee | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <section id="coffee" aria-label="Ethiopian coffee origins" className="relative bg-parchment py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee-900/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Collection"
          title={
            <>
              Eight origins, <em className="font-display text-leaf-700 italic">one homeland</em>
            </>
          }
          lead="Ethiopia is not one flavour but a whole atlas of them. Each of these regions grows coffee with its own unmistakable signature — explore them all."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {COFFEES.map((coffee, i) => (
            <Reveal key={coffee.id} delay={(i % 4) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white ring-1 ring-coffee-900/8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_34px_60px_-28px_rgba(42,24,16,0.4)] hover:ring-leaf-400/50">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={coffee.image}
                    alt={`${coffee.name} coffee — ${coffee.region}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent" />
                  <span className="absolute top-3 right-4 font-display text-lg text-cream/85 italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-3 left-4 rounded-full bg-coffee-950/55 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-coffee-100 uppercase backdrop-blur-sm">
                    {coffee.process}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[26px] font-semibold text-coffee-900">
                    {coffee.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-leaf-700 uppercase">
                    {coffee.region}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-coffee-700/80">
                    {coffee.short}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {coffee.notes.slice(0, 3).map((note) => (
                      <span
                        key={note}
                        className="rounded-full bg-leaf-50 px-2.5 py-1 text-[10.5px] font-bold text-leaf-700"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(coffee)}
                    aria-label={`Explore ${coffee.name} coffee`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-left text-[13px] font-bold text-coffee-900 transition-colors hover:text-leaf-700"
                  >
                    Explore this origin
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ------------------------------ Detail modal ------------------------------ */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            onClick={close}
            className="fixed inset-0 z-[90] grid place-items-center bg-coffee-950/70 p-4 backdrop-blur-md sm:p-6"
          >
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={`${active.name} coffee details`}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grain relative grid max-h-[90vh] w-full max-w-3xl overflow-x-hidden overflow-y-auto rounded-[28px] bg-coffee-950 shadow-2xl md:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative h-56 md:h-auto md:min-h-[520px]">
                <img src={active.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/60 to-transparent md:bg-gradient-to-r" />
              </div>

              <div className="relative z-10 flex flex-col p-7 sm:p-9">
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close details"
                  className="absolute top-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-leaf-400 hover:text-leaf-300"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                <p className="text-[11px] font-bold tracking-[0.3em] text-leaf-300 uppercase">{active.region}</p>
                <h3 className="mt-2 font-display text-4xl font-semibold text-cream">{active.name}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {active.notes.map((note) => (
                    <span key={note} className="rounded-full border border-leaf-400/40 bg-leaf-900/40 px-3 py-1 text-xs font-bold text-leaf-200">
                      {note}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-coffee-100/85">{active.story}</p>

                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-cream/10 pt-6">
                  {[
                    { icon: Droplets, label: "Process", value: active.process },
                    { icon: Mountain, label: "Altitude", value: active.altitude },
                    { icon: Bean, label: "Varieties", value: active.varieties },
                    { icon: ArrowUpRight, label: "Beautiful as", value: active.bestFor },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3">
                      <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-300" />
                      <div>
                        <dt className="text-[10px] font-bold tracking-[0.2em] text-coffee-300 uppercase">{row.label}</dt>
                        <dd className="mt-0.5 text-sm font-semibold text-cream">{row.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <a
                  href="#contact"
                  onClick={close}
                  className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-leaf-600 px-6 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:bg-leaf-500"
                >
                  Request this coffee
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
