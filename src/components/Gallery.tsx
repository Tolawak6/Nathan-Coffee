import { GALLERY } from "../data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" aria-label="Photo gallery" className="relative bg-parchment py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coffee-900/15 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Gallery"
          title={
            <>
              A field guide, <em className="font-display text-leaf-700 italic">in photographs</em>
            </>
          }
          lead="Cherry, harvest, drying yards, roastery and the finished cup — the whole landscape of an Ethiopian coffee's life."
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.07} className="mb-5 break-inside-avoid">
              <figure
                tabIndex={0}
                aria-label={`${item.tag}: ${item.caption}`}
                className="group relative m-0 cursor-pointer overflow-hidden rounded-[24px] ring-1 ring-coffee-900/10 transition-shadow duration-500 hover:shadow-[0_34px_60px_-26px_rgba(42,24,16,0.5)]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108 group-focus-visible:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/85 via-coffee-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="inline-block rounded-full bg-leaf-600/90 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <p className="mt-2.5 font-display text-lg leading-snug text-cream">{item.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
