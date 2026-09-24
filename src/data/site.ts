/* ------------------------------------------------------------------ */
/*  Nouman Naveed Coffee — site content & imagery                      */
/* ------------------------------------------------------------------ */

/** Pexels image helper — builds a cropped, compressed CDN url. */
const px = (id: number, w = 1200, h = 800, ext = "jpeg") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMAGES = {
  hero: px(34792534, 1920, 1280), // women picking coffee in a lush plantation
  heroSmall: px(34792534, 900, 600),
  aboutTall: px(7125698, 820, 1100), // ripe red cherries on the branch
  aboutWide: px(7791255, 1100, 760), // hands harvesting ripe cherries
  aboutBadge: px(29324430, 640, 640), // Ethiopian coffee burlap sack
  natural: px(29995166, 1000, 720), // whole cherries sun-drying
  washed: px(6007654, 1000, 720), // clean washed green beans
  processEnd: px(10327546, 1000, 820), // coffee cup resting on beans
  whyMain: px(5988437, 1000, 1180), // pouring from a traditional pot
  whyTall: px(30937097, 700, 940, "png"), // Ethiopian traditional cloth & pot
  whyWide: px(7125688, 1100, 720), // picking cherries from the tree
};

/* ----------------------------- Navigation ----------------------------- */

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Coffee", href: "#coffee" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

/* --------------------------- Coffee origins --------------------------- */

export interface Coffee {
  id: string;
  name: string;
  region: string;
  process: string;
  altitude: string;
  varieties: string;
  notes: string[];
  short: string;
  story: string;
  bestFor: string;
  image: string;
}

export const COFFEES: Coffee[] = [
  {
    id: "yirgacheffe",
    name: "Yirgacheffe",
    region: "Gedeo Zone · Southern Ethiopia",
    process: "Washed",
    altitude: "1,700 – 2,200 m",
    varieties: "Indigenous heirloom",
    notes: ["Jasmine", "Bergamot", "Lemon zest"],
    short:
      "The benchmark of elegance — bright and floral, with a silken, tea-like body and sparkling citrus clarity.",
    story:
      "Grown on tiny garden plots in the misty Gedeo highlands, Yirgacheffe built its name on the washed method. When the fruit is gently washed away before drying, the cup turns luminous — jasmine, bergamot and lemon carried on a weightless, tea-like body. It is the coffee many people mean when they say “Ethiopian”.",
    bestFor: "Pour-over · Jebena ceremony",
    image: px(10673548, 900, 700),
  },
  {
    id: "sidamo",
    name: "Sidamo",
    region: "Sidama Region · Rift Valley highlands",
    process: "Washed & Natural",
    altitude: "1,500 – 2,200 m",
    varieties: "Indigenous heirloom",
    notes: ["Sweet berry", "Citrus", "Cane sugar"],
    short:
      "Generous and balanced — sweet berries and soft florals over a rounded, cane-sugar body.",
    story:
      "The broad valleys and high plateaus of Sidama produce some of Ethiopia's most dependable cups. Fertile soils and a long ripening season give Sidamo its trademark balance — gentle berry sweetness, a wine-like brightness and a clean, sugary finish. Offered both washed and naturally processed.",
    bestFor: "Filter · Espresso",
    image: px(36776700, 900, 700),
  },
  {
    id: "guji",
    name: "Guji",
    region: "Guji Zone · Oromia",
    process: "Mostly Natural",
    altitude: "1,800 – 2,300 m",
    varieties: "Indigenous heirloom",
    notes: ["Peach", "Apricot", "Wild honey"],
    short:
      "Lush and layered — stone fruit and honey over a syrupy body; naturals turn wonderfully fruit-forward.",
    story:
      "Once counted within Sidamo, Guji earned its own name as its coffee proved impossible to confuse with anything else. Some of Ethiopia's highest farms sit here, and slow cherry maturation builds remarkable density. Expect ripe peach and apricot, a honeyed sweetness and, in natural lots, an almost tropical fruit character.",
    bestFor: "Pour-over · Cold brew",
    image: px(7761601, 900, 700),
  },
  {
    id: "harrar",
    name: "Harrar",
    region: "East Hararghe · Eastern highlands",
    process: "Natural · Sun-dried",
    altitude: "1,500 – 2,100 m",
    varieties: "Indigenous heirloom",
    notes: ["Blueberry", "Mocha", "Dried fruit"],
    short:
      "Wild and winey — the classic dry-processed cup, deep with blueberry, mocha and dried-fruit richness.",
    story:
      "From the ancient walled city of Harar and its surrounding highlands comes one of the world's oldest coffees. Harrar is traditionally dried with the fruit intact, and the months the bean spends inside the cherry leave their mark — wild blueberry, dark mocha and a heavy, wine-like depth unlike any washed coffee.",
    bestFor: "French press · Espresso",
    image: px(23017738, 900, 700),
  },
  {
    id: "limu",
    name: "Limu",
    region: "Jimma area · Southwestern highlands",
    process: "Washed",
    altitude: "1,400 – 2,000 m",
    varieties: "Indigenous heirloom",
    notes: ["Spiced wine", "Cocoa", "Sweet orange"],
    short:
      "Round and gently sweet — a balanced washed cup with soft winey spice and a cocoa finish.",
    story:
      "Limu grows in the forested hills of the southwest and is usually washed, which keeps the cup polished and clean. It sits at the gentle end of the Ethiopian spectrum — low-toned, rounded and sweet, with hints of spice, cocoa and orange. A quiet, composed coffee that rewards slow mornings.",
    bestFor: "Filter · Jebena ceremony",
    image: px(34386681, 900, 700),
  },
  {
    id: "jimma",
    name: "Jimma",
    region: "Oromia · Southwest Ethiopia",
    process: "Natural & Washed",
    altitude: "1,300 – 1,900 m",
    varieties: "Indigenous heirloom",
    notes: ["Dark chocolate", "Toasted grain", "Herbal"],
    short:
      "The dependable classic — earthy warmth, dark chocolate and an easy, everyday drinkability.",
    story:
      "Jimma is one of Ethiopia's great volume regions and the backbone of countless blends. Its coffees are hearty and honest — earthy, chocolate-leaning and gently herbal — bringing body and warmth wherever they are used. Washed lots from the area can be surprisingly refined.",
    bestFor: "Espresso blends · Moka pot",
    image: px(2131905, 900, 700),
  },
  {
    id: "lekempti",
    name: "Lekempti",
    region: "East Welega · Nekemte",
    process: "Natural · Sun-dried",
    altitude: "1,400 – 1,800 m",
    varieties: "Indigenous heirloom",
    notes: ["Plum", "Molasses", "Baking spice"],
    short:
      "Smooth and mellow — plum-like fruit, medium body and a long, gently spiced finish.",
    story:
      "Named for the market town of Nekemte — also called Lekempti — this western coffee from Welega is typically sun-dried. It pours mellow and composed: soft stone fruit, a molasses sweetness and a rounded body that lingers pleasantly. Often sold under the Gimbi name, it is a hidden gem of the west.",
    bestFor: "French press · Filter",
    image: px(17366133, 900, 700),
  },
  {
    id: "kaffa",
    name: "Kaffa",
    region: "Kaffa Zone · The birthplace forests",
    process: "Washed & Natural",
    altitude: "1,500 – 2,000 m",
    varieties: "Wild & semi-forest heirloom",
    notes: ["Forest florals", "Fig", "Black tea"],
    short:
      "Where coffee begins — deep, quietly complex cups from the forests that gave arabica to the world.",
    story:
      "In the cool, misted forests of Kaffa, Coffea arabica still grows wild beneath the canopy — the genetic heartland of all arabica coffee. Kaffa cups carry that origin plainly: deep and composed, with dark florals, fig-like sweetness and a refined, black-tea structure. Drinking it is drinking history.",
    bestFor: "Pour-over · Jebena ceremony",
    image: px(36509752, 900, 700),
  },
];

/* ------------------------------ Process ------------------------------- */

export interface ProcessStep {
  title: string;
  text: string;
  image?: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "The Coffee Cherry",
    text: "On shaded highland shrubs, arabica cherries ripen slowly to a deep wine-red. Altitude slows everything — and slow ripening means denser beans, more sugars, more complexity.",
    image: px(7125698, 700, 560),
  },
  {
    title: "Selective Harvesting",
    text: "Pickers return to the same trees again and again over the season, taking only the cherries at perfect ripeness — basket by basket, entirely by hand.",
    image: px(7791287, 700, 560),
  },
  {
    title: "Processing",
    text: "Within hours of picking, the cherries reach the wet mill or the drying beds. This is the fork in the road — washed or natural — that will shape everything the cup becomes.",
    image: px(6007654, 700, 560),
  },
  {
    title: "Sun Drying",
    text: "On raised African beds, parchment or whole cherries dry in thin layers for ten days or more, turned by hand through the day so every bean dries evenly.",
    image: px(17366133, 700, 560),
  },
  {
    title: "Roasting",
    text: "The rested green beans meet the roaster and turn chestnut-brown as their sugars caramelise — the moment the aroma locked inside the cherry finally announces itself.",
    image: px(22679457, 700, 560),
  },
  {
    title: "Grinding",
    text: "Ground fresh, moments before brewing — fine for the jebena, coarser for filter. Once coffee is ground its aromatics fade fast, so this step always waits until last.",
    image: px(20121334, 700, 560),
  },
  {
    title: "Brewing",
    text: "Water just off the boil meets the grounds — poured slow circles in a dripper, or simmered in a clay jebena as it has been in Ethiopia for centuries.",
    image: px(10673548, 700, 560),
  },
  {
    title: "The Final Cup",
    text: "From a cherry on a highland branch to the cup in your hands — every step was a decision, and you can taste each one. This is where it was always going.",
    image: px(7937427, 700, 560),
  },
];

/* ------------------------------- Gallery ------------------------------ */

export interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
  caption: string;
}

export const GALLERY: GalleryItem[] = [
  { src: px(7125698, 800, 1060), alt: "Ripe red coffee cherries on the branch", tag: "The Cherry", caption: "Cherries ripening wine-red on the branch" },
  { src: px(7791255, 900, 640), alt: "Hands harvesting ripe coffee cherries", tag: "Harvest", caption: "Selective picking, one ripe cherry at a time" },
  { src: px(7125702, 800, 1000), alt: "A palm full of freshly picked coffee cherries", tag: "Harvest", caption: "A morning's pick, straight from the tree" },
  { src: px(17366133, 900, 660), alt: "Coffee drying on raised beds in the sun", tag: "Drying", caption: "Raised-bed drying under the highland sun" },
  { src: px(6007654, 900, 640), alt: "Washed green coffee beans", tag: "Washed", caption: "Washed parchment, clean and pale-green" },
  { src: px(29995166, 900, 1180), alt: "Whole coffee cherries sun-drying", tag: "Natural", caption: "Natural lots drying whole, fruit intact" },
  { src: px(29324430, 800, 980), alt: "Burlap sack of Ethiopian coffee", tag: "Origin", caption: "Ethiopian coffee, ready for its journey" },
  { src: px(4820676, 800, 1060), alt: "Coffee beans turning inside a roasting drum", tag: "Roasting", caption: "Sugars caramelising in the drum" },
  { src: px(30937097, 800, 1060, "png"), alt: "Traditional Ethiopian pot and woven cloth", tag: "Culture", caption: "The vessel and cloth of the buna ceremony" },
  { src: px(34386681, 800, 1060), alt: "Steam rising from a pour-over brew", tag: "Brewing", caption: "Slow circles, rising steam" },
  { src: px(10327546, 900, 660), alt: "A cup of coffee among roasted beans", tag: "The Cup", caption: "Where every step was always headed" },
  { src: px(6876737, 900, 640), alt: "Green highland farming landscape", tag: "Highlands", caption: "The high country where coffee was born" },
];

/* ------------------------------ Marquee ------------------------------- */

export const ORIGIN_WORDS = COFFEES.map((c) => c.name);
