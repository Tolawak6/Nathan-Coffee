import { Flame, Mountain, Sprout, Users } from "lucide-react";
import { IMAGES } from "../data/site";
import { Reveal } from "./Reveal";

const FACTS = [
  {
    icon: Sprout,
    title: "The birthplace of arabica",
    text: "Wild Coffea arabica still grows in the forests of Kaffa. Every arabica tree on earth traces its roots back to Ethiopian soil.",
  },
  {
    icon: Mountain,
    title: "Grown high, ripened slow",
    text: "Most Ethiopian coffee grows between 1,500 and 2,300 metres, where cool nights slow the cherry and build dense, sugary beans.",
  },
  {
    icon: Users,
    title: "Millions of small gardens",
    text: "Much of the harvest comes from smallholder garden plots beside family homes — coffee woven into daily life, not industrial estates.",
  },
  {
    icon: Flame,
    title: "Coffee as ceremony",
    text: "Buna is hospitality itself: beans roasted over coals, ground by hand and brewed three rounds in the jebena — abol, tona, baraka.",
  },
];

export function WhyEthiopia() {
  return (
    <section aria-label="Why Ethiopian coffee" className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* mosaic */}
        <div className="relative mx-auto w-full max-w-[540px]">
          <Reveal className="relative z-10 w-[64%]">
            <div className="overflow-hidden rounded-[28px] shadow-[0_34px_64px_-28px_rgba(42,24,16,0.5)]">
              <img
                src={IMAGES.whyMain}
                alt="Pouring coffee from a traditional pot"
                loading="lazy"
                className="aspect-[5/6] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="absolute top-8 right-0 z-20 w-[46%]">
            <div className="overflow-hidden rounded-[24px] border-[6px] border-parchment shadow-[0_30px_56px_-26px_rgba(42,24,16,0.5)]">
              <img
                src={IMAGES.whyWide}
                alt="Hands picking ripe coffee cherries from the tree"
                loading="lazy"
                className="aspect-[5/4] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.28} className="absolute right-6 -bottom-8 z-30 w-[38%] sm:right-10">
            <div className="overflow-hidden rounded-[22px] border-[6px] border-parchment shadow-[0_28px_52px_-24px_rgba(42,24,16,0.55)]">
              <img
                src={IMAGES.whyTall}
                alt="Traditional Ethiopian pot resting on woven cloth"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>
          </Reveal>

          {/* quote card */}
          <Reveal delay={0.4} className="absolute -bottom-6 left-2 z-40 max-w-[240px]">
            <figure className="rounded-2xl bg-coffee-950 p-5 shadow-[0_26px_50px_-22px_rgba(29,15,8,0.8)] ring-1 ring-cream/10">
              <blockquote className="font-display text-[15px] leading-snug text-cream italic">
                “Buna dabo naw — coffee is our bread.”
              </blockquote>
              <figcaption className="mt-2 text-[10px] font-bold tracking-[0.24em] text-leaf-300 uppercase">
                An Ethiopian saying
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* copy */}
        <div className="pt-10 lg:pt-0">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.32em] text-leaf-600 uppercase">
              <span className="h-px w-8 bg-leaf-600/60" />
              Why Ethiopian Coffee
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] font-medium text-balance text-coffee-900 sm:text-5xl">
              No country lives with coffee{" "}
              <em className="font-display text-leaf-700 italic">like Ethiopia</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 leading-relaxed text-coffee-700/90">
              Ethiopia is the plant's homeland, one of the world's great coffee landscapes,
              and a place where drinking coffee is still a daily act of welcome. That is why
              its coffees carry a depth — of flavour and of meaning — that no other origin
              can imitate.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {FACTS.map((fact, i) => (
              <Reveal key={fact.title} delay={0.12 + i * 0.08}>
                <div className="group flex gap-5">
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center">
                    <span className="absolute inset-0 rounded-2xl bg-leaf-100 transition-colors duration-300 group-hover:bg-leaf-600" />
                    <fact.icon className="relative h-5 w-5 text-leaf-700 transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-coffee-900">{fact.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-coffee-700/80">{fact.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
