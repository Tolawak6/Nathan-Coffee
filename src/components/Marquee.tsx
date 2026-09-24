import { Cherry } from "lucide-react";
import { ORIGIN_WORDS } from "../data/site";

export function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {ORIGIN_WORDS.map((word) => (
        <span key={word} className="flex items-center gap-10">
          <span className="font-display text-2xl font-medium tracking-wide text-coffee-100 italic sm:text-3xl">
            {word}
          </span>
          <Cherry className="h-5 w-5 shrink-0 text-leaf-400" strokeWidth={1.8} />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Coffee origins"
      className="relative overflow-hidden border-y border-coffee-800 bg-coffee-900 py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-coffee-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-coffee-900 to-transparent" />
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
