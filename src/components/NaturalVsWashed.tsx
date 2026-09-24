import { Droplets, Sun } from "lucide-react";
import { IMAGES } from "../data/site";
import { cn } from "../utils/cn";
import { Reveal, SectionHeading } from "./Reveal";

interface MethodCard {
  name: string;
  alias: string;
  tagline: string;
  image: string;
  imageAlt: string;
  icon: typeof Sun;
  steps: string[];
  flavour: string;
  notes: string[];
  origins: string;
  dark?: boolean;
}

const CARDS: MethodCard[] = [
  {
    name: "Natural",
    alias: "Sun-Dried",
    tagline: "Dried with the fruit intact",
    image: IMAGES.natural,
    imageAlt: "Whole coffee cherries drying in the sun",
    icon: Sun,
    steps: [
      "Ripe cherries are hand-sorted and left whole",
      "Dried slowly on raised beds, fruit and all, for weeks",
      "Only then is the dried fruit milled away from the bean",
    ],
    flavour:
      "All that time resting inside the cherry lets its sugars and aromatics settle into the bean — the cup often turns fruitier, sweeter and fuller, with notes of blueberry, stone fruit and wine-like depth.",
    notes: ["Blueberry", "Stone fruit", "Syrupy body"],
    origins: "Signature in Harrar · Guji · Lekempti",
  },
  {
    name: "Washed",
    alias: "Wet-Processed",
    tagline: "Fruit removed with water, before drying",
    image: IMAGES.washed,
    imageAlt: "Clean washed green coffee beans in parchment",
    icon: Droplets,
    steps: [
      "Pulp is removed within hours, using clean water",
      "Beans ferment briefly in tanks to loosen the mucilage",
      "Washed in water channels, then dried in parchment",
    ],
    flavour:
      "With the fruit washed away before drying, the seed speaks entirely for itself — the cup turns cleaner and brighter, with lifted acidity, florals and a refined, tea-like clarity.",
    notes: ["Jasmine", "Citrus", "Tea-like clarity"],
    origins: "Signature in Yirgacheffe · Sidamo · Limu",
    dark: true,
  },
];

export function NaturalVsWashed() {
  return (
    <section aria-label="Natural versus washed processing" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div aria-hidden className="absolute top-24 -left-24 h-72 w-72 rounded-full bg-coffee-100/80 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="One Cherry · Two Journeys"
          title={
            <>
              Natural <em className="font-display text-leaf-700 italic">vs</em> Washed
            </>
          }
          lead="The two heritage ways Ethiopia prepares its coffee. Same tree, same cherry — a different cup. It is the first thing worth knowing about any Ethiopian coffee."
        />

        <div className="relative mt-16 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-6">
          {/* center emblem */}
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <div className="grid h-24 w-24 place-items-center rounded-full bg-cream shadow-[0_20px_44px_-16px_rgba(42,24,16,0.45)] ring-1 ring-coffee-900/10">
              <span className="font-display text-lg font-semibold tracking-[0.18em] text-coffee-900">VS</span>
            </div>
          </div>

          {CARDS.map((card, idx) => {
            const dark = card.dark;
            return (
              <Reveal key={card.name} delay={idx * 0.12}>
                <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-[30px] transition-shadow duration-500 hover:shadow-[0_40px_70px_-32px_rgba(42,24,16,0.5)]",
                    dark
                      ? "grain bg-leaf-950 ring-1 ring-leaf-400/25"
                      : "bg-white ring-1 ring-coffee-900/10"
                  )}
                >
                  <div className="relative h-56 overflow-hidden sm:h-64">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-107"
                    />
                    <div
                      className={cn(
                        "absolute inset-0",
                        dark
                          ? "bg-gradient-to-t from-leaf-950 via-leaf-950/25 to-transparent"
                          : "bg-gradient-to-t from-coffee-950/70 via-coffee-950/15 to-transparent"
                      )}
                    />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <span
                        className={cn(
                          "grid h-11 w-11 place-items-center rounded-xl backdrop-blur-sm",
                          dark ? "bg-leaf-400/25 text-leaf-200" : "bg-cream/90 text-coffee-800"
                        )}
                      >
                        <card.icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <div>
                        <p className="font-display text-3xl font-semibold text-cream">{card.name}</p>
                        <p className={cn("text-[11px] font-bold tracking-[0.24em] uppercase", dark ? "text-leaf-300" : "text-coffee-200")}>
                          {card.alias} — {card.tagline}
                        </p>
                      </div>
                    </div>
                    <span className="absolute top-4 right-5 font-display text-xl text-cream/80 italic">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-7 sm:p-9">
                    <ol className="space-y-3.5">
                      {card.steps.map((step, i) => (
                        <li key={step} className="flex items-start gap-3.5">
                          <span
                            className={cn(
                              "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold",
                              dark ? "bg-leaf-400/20 text-leaf-200" : "bg-leaf-100 text-leaf-700"
                            )}
                          >
                            {i + 1}
                          </span>
                          <span className={cn("text-sm leading-relaxed", dark ? "text-leaf-100/85" : "text-coffee-700/90")}>
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>

                    <p
                      className={cn(
                        "mt-6 border-l-2 pl-4 text-sm leading-relaxed",
                        dark ? "border-leaf-400/50 text-leaf-100/75" : "border-leaf-500/50 text-coffee-700/80"
                      )}
                    >
                      {card.flavour}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {card.notes.map((note) => (
                        <span
                          key={note}
                          className={cn(
                            "rounded-full px-3 py-1 text-[11px] font-bold",
                            dark ? "border border-leaf-400/35 bg-leaf-900/60 text-leaf-200" : "bg-leaf-50 text-leaf-700"
                          )}
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <p className={cn("mt-6 text-[11px] font-bold tracking-[0.22em] uppercase", dark ? "text-leaf-300/90" : "text-leaf-700/90")}>
                      {card.origins}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="mt-14 flex justify-center">
          <div className="flex items-center gap-4 rounded-full border border-coffee-900/10 bg-white/90 py-2 pr-6 pl-3 shadow-sm backdrop-blur">
            <img src="/logo.png" alt="Nouman Naveed Coffee" className="h-10 w-auto object-contain" draggable={false} />
            <p className="text-sm leading-snug text-coffee-700/90">
              Carried side by side on every Nouman Naveed Coffee card —{" "}
              <span className="font-semibold text-coffee-900">two traditions, one cup.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
