import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Coffee, MapPin } from "lucide-react";
import { useRef } from "react";
import { IMAGES } from "../data/site";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 130]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Introduction"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-coffee-950"
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <img
          src={IMAGES.hero}
          alt=""
          fetchPriority="high"
          className={reduce ? "h-full w-full object-cover" : "animate-kenburns h-full w-full object-cover"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/85 via-coffee-950/45 to-coffee-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/70 via-transparent to-coffee-950/40" />
      </motion.div>

      {/* soft green auras */}
      <div aria-hidden className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-leaf-600/20 blur-[130px]" />
      <div aria-hidden className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-leaf-400/10 blur-[120px]" />

      {/* content container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-32 pb-28 sm:px-8"
      >
        {/* LOGO (Positioned on the Left) */}
        <div className="flex justify-start">
          <div className={reduce ? "" : "animate-float"}>
            <div className="rounded-2xl bg-white/95 px-5 py-3 shadow-[0_18px_44px_rgba(0,0,0,0.45)] backdrop-blur-sm">
              <img
                src="/logo.png"
                alt="Nouman Naveed Coffee"
                className="h-16 w-auto object-contain sm:h-20"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* REST OF THE CONTENT (Centered in the Middle) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-center text-center"
        >
          {/* Amharic & English Origin Badges */}
          <motion.div variants={item} className="flex flex-col items-center gap-2">
            {/* Amharic Tag */}
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-coffee-950/50 px-4 py-1.5 text-xs font-semibold tracking-wider text-amber-300 backdrop-blur-sm">
              የኢትዮጵያ ቡና · ከፍሬ እስከ ሲኒ
            </span>

            {/* English Tag */}
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cream/20 bg-coffee-950/40 px-5 py-2 text-[11px] font-bold tracking-[0.3em] text-coffee-100 uppercase backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-leaf-300" />
              Ethiopian Origin Coffee · Cherry to Cup
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="mt-7 font-sans text-[15vw] leading-[0.9] font-extrabold text-balance text-white sm:text-8xl md:text-[110px]"
          >
            It All<br />
            Starts Here
            <div className="mx-auto mt-4 h-2 w-32 bg-leaf-500" />
          </motion.h1>

          {/* Subheading / Description */}
          <motion.p
            variants={item}
            className="mt-9 max-w-lg text-lg leading-snug font-medium text-white sm:text-2xl"
          >
            Both Washed and Natural coffees begin as the same perfectly ripe cherry.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={item} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#coffee"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-leaf-600 px-8 py-4 text-sm font-bold text-white shadow-[0_18px_38px_-14px_rgba(49,106,56,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-500 hover:shadow-[0_22px_44px_-14px_rgba(67,132,71,0.95)] active:scale-[0.98] sm:w-auto"
            >
              <Coffee className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
              Explore Our Coffee
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-cream/35 px-8 py-4 text-sm font-bold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-300 hover:bg-cream/10 active:scale-[0.98] sm:w-auto"
            >
              Contact Us
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div variants={item} className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              ["8", "celebrated origins"],
              ["1,800m+", "high-grown lots"],
              ["2", "heritage processes"],
            ].map(([num, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-cream">{num}</span>
                <span className="text-[11px] font-bold tracking-[0.22em] text-leaf-300/90 uppercase">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex flex-col items-center gap-2.5 text-coffee-100/70 transition-colors hover:text-leaf-300">
          <span className="text-[10px] font-bold tracking-[0.34em] uppercase">Scroll</span>
          <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-current pt-1.5">
            <span className="animate-scrollcue block h-1.5 w-1.5 rounded-full bg-leaf-300" />
          </span>
        </span>
      </motion.a>
    </section>
  );
}