import { motion } from "framer-motion";
import { Droplets, Hand, Leaf, PackageCheck } from "lucide-react";
import { IMAGES } from "../data/site";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    icon: Leaf,
    title: "Rooted in origin",
    text: "Coffees from Ethiopia's celebrated growing regions — each presented with its own name and character.",
  },
  {
    icon: Hand,
    title: "Chosen with care",
    text: "Attention to origin, season and lot — because great coffee is selected, not merely bought.",
  },
  {
    icon: Droplets,
    title: "Two traditions",
    text: "Both washed and naturally processed coffees, honouring how each region prepares its harvest.",
  },
  {
    icon: PackageCheck,
    title: "Freshness first",
    text: "Handled gently and prepared with freshness in mind, from drying bed to final brew.",
  },
];

export function About() {
  return (
    <section id="about" aria-label="About Nouman Naveed Coffee" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* watermark leaf aria-hidden */}
      <div aria-hidden className="absolute -top-10 -right-16 h-72 w-72 rounded-full bg-leaf-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        {/* collage */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <Reveal className="relative z-10 w-[72%]">
            <div className="overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_rgba(42,24,16,0.45)]">
              <motion.img
                src={IMAGES.aboutTall}
                alt="Ripe red Ethiopian coffee cherries hanging on the branch"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.18} className="absolute right-0 bottom-6 z-20 w-[58%] sm:-bottom-4">
            <div className="overflow-hidden rounded-[24px] border-[6px] border-cream shadow-[0_30px_60px_-25px_rgba(42,24,16,0.5)]">
              <motion.img
                src={IMAGES.aboutWide}
                alt="Hands harvesting ripe coffee cherries from the tree"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Reveal>

          {/* floating chip */}
          <Reveal delay={0.3} className="absolute -top-5 right-4 z-30 sm:right-0">
            <div className="animate-float rounded-2xl border border-leaf-100 bg-white/95 px-5 py-4 shadow-[0_20px_45px_-20px_rgba(28,84,46,0.5)] backdrop-blur">
              <p className="font-display text-xl font-semibold text-coffee-900">100% Ethiopian</p>
              <p className="mt-0.5 text-[10px] font-bold tracking-[0.26em] text-leaf-600 uppercase">
                Origin coffee
              </p>
            </div>
          </Reveal>

          {/* dotted arc decoration */}
          <svg aria-hidden viewBox="0 0 200 200" className="absolute -bottom-10 -left-10 z-0 h-40 w-40 text-leaf-500/35">
            <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" className="animate-spin-slow" />
          </svg>
        </div>

        {/* copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.32em] text-leaf-600 uppercase">
              <span className="h-px w-8 bg-leaf-600/60" />
              About Nouman Naveed Coffee
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl leading-[1.08] font-medium text-balance text-coffee-900 sm:text-5xl">
              Rooted in the land where{" "}
              <em className="font-display text-leaf-700 italic">coffee began</em>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 leading-relaxed text-coffee-700/90">
              Nouman Naveed Coffee is built on a simple conviction — that the most
              expressive coffee in the world still grows where coffee itself first grew:
              in the forests and highland farms of Ethiopia. Our work is to honour that
              origin, not to overstate it.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 leading-relaxed text-coffee-700/90">
              We follow Ethiopian coffee through every stage worth savouring — ripe cherries
              on smallholder trees, washed and sun-dried lots resting on raised beds, careful
              roasting, and the final brewed cup. Whether it is a floral Yirgacheffe or a
              deep, fruit-laden Harrar, each origin is presented honestly, with its name,
              its region and its story intact.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={0.1 + i * 0.07}>
                <div className="group flex h-full gap-4 rounded-2xl border border-coffee-900/8 bg-white/70 p-4 transition-all duration-300 hover:border-leaf-300 hover:bg-white hover:shadow-[0_16px_36px_-20px_rgba(28,84,46,0.35)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-600 transition-colors duration-300 group-hover:bg-leaf-600 group-hover:text-white">
                    <point.icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-coffee-900">{point.title}</span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-coffee-700/75">
                      {point.text}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
