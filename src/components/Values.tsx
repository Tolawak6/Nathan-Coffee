import {
  BadgeCheck,
  Droplets,
  Handshake,
  Landmark,
  Leaf,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

interface Value {
  icon: LucideIcon;
  title: string;
  text: string;
}

const VALUES: Value[] = [
  {
    icon: BadgeCheck,
    title: "Quality, cupped first",
    text: "Every lot is judged in the cup before anything else — aroma, clarity, sweetness and finish.",
  },
  {
    icon: Leaf,
    title: "Authentically Ethiopian",
    text: "Real origins with real names. What we pour is what we promise — nothing dressed up.",
  },
  {
    icon: Droplets,
    title: "Careful processing",
    text: "Washed or natural, the handling at the mill decides the cup — so we respect each region's method.",
  },
  {
    icon: Sparkles,
    title: "Freshness",
    text: "Coffee is a harvest, not a commodity — at its best within its season and handled to stay that way.",
  },
  {
    icon: Handshake,
    title: "Sustainable relationships",
    text: "Long-term, fair-minded relationships with the people who grow, pick and prepare the coffee.",
  },
  {
    icon: Landmark,
    title: "Coffee culture",
    text: "From the buna ceremony to the modern brew bar — coffee is how people gather, and we honour that.",
  },
];

export function Values() {
  return (
    <section aria-label="Our values" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Stand For"
          title={
            <>
              Values in <em className="font-display text-leaf-700 italic">every cup</em>
            </>
          }
          lead="Simple principles, kept daily — from the lots we choose to the way we talk about them."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={(i % 3) * 0.09}>
              <div className="group h-full rounded-[26px] border border-coffee-900/8 bg-white/80 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf-400/60 hover:bg-white hover:shadow-[0_30px_56px_-28px_rgba(28,84,46,0.4)]">
                <span className="relative grid h-13 w-13 place-items-center">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-leaf-500 to-leaf-700 shadow-[0_14px_28px_-12px_rgba(49,106,56,0.8)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <value.icon className="relative h-5.5 w-5.5 text-white" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-[21px] font-semibold text-coffee-900">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-coffee-700/80">{value.text}</p>
                <span className="mt-5 block h-0.5 w-8 rounded-full bg-leaf-200 transition-all duration-500 group-hover:w-14 group-hover:bg-leaf-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
