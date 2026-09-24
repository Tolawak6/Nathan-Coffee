import { IMAGES } from "../data/site";
import { Reveal } from "./Reveal";

const COMPARISONS = [
  {
    type: "NATURAL",
    title: "Slowly Sun-Dried Cherry",
    image: IMAGES.natural,
    color: "bg-leaf-500",
  },
  {
    type: "WASHED",
    title: "Water Cleansed Parchment",
    image: IMAGES.washed,
    color: "bg-coffee-500",
  },
  {
    type: "NATURAL",
    title: "Hand-Sorted, Drying in the Sun",
    image: IMAGES.aboutWide,
    color: "bg-leaf-500",
  },
  {
    type: "WASHED",
    title: "Fermented & Washed with Clean Water",
    image: px(34437402, 800, 1000), // washing process
    color: "bg-coffee-500",
  },
];

function px(id: number, w = 800, h = 1000) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}

export function ProcessGrid() {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {COMPARISONS.map((item, i) => (
          <div key={i} className="group relative aspect-[4/5] sm:aspect-[3/4] md:h-[420px] lg:h-[500px] xl:h-[600px]">
            {/* Inner container to clip image hover but allow VS circle to break out */}
            <div className="absolute inset-0 overflow-hidden border-x border-white/10">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            </div>
            
            {/* VS Circle */}
            {(i === 0 || i === 2) && (
              <div className="absolute top-1/2 -right-4 z-20 flex h-7 w-7 sm:h-8 sm:w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white ring-1 ring-white/20 shadow-lg md:flex">
                VS
              </div>
            )}

            {/* Content positioned on top of the gradient */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-6 z-10">
              <Reveal delay={i * 0.1}>
                <span className={`inline-block px-3 py-1 text-[9px] font-bold tracking-widest text-white uppercase ${item.color}`}>
                  {item.type}
                </span>
                <h3 className="mt-3 font-sans text-xs leading-snug font-semibold text-white uppercase sm:text-sm">
                  {item.title}
                </h3>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
