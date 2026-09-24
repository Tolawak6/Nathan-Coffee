import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { COFFEES, NAV_LINKS } from "../data/site";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative bg-coffee-950 text-coffee-100" aria-label="Footer">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-leaf-500/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-18 pb-10 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" aria-label="Nouman Naveed Coffee">
              <img src="/logo.png" alt="Nouman Naveed Coffee" className="h-16 w-32 object-contain" draggable={false} />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-coffee-100/70">
              An Ethiopian coffee house devoted to origin — carrying the country's
              celebrated coffees from highland cherry to the final cup, honestly
              and with care.
            </p>
            <div className="mt-6 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={`${social.label} (placeholder link)`}
                  title={`${social.label} — coming soon`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-coffee-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-500 hover:bg-leaf-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* explore */}
          <nav aria-label="Footer navigation">
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-leaf-300 uppercase">Explore</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-coffee-100/75 transition-colors hover:text-cream"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-leaf-400 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* origins */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-leaf-300 uppercase">Coffee Origins</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-1">
              {COFFEES.map((coffee) => (
                <li key={coffee.id}>
                  <a
                    href="#coffee"
                    className="text-sm font-medium text-coffee-100/75 transition-colors hover:text-leaf-300"
                  >
                    {coffee.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.3em] text-leaf-300 uppercase">Contact</h3>
            <ul className="mt-5 space-y-4">
              {[
                { icon: Phone, text: "+251 •• ••• ••••" },
                { icon: Mail, text: "••••@noumannaveed•coffee" },
                { icon: MapPin, text: "Ethiopia — address to follow" },
              ].map((row) => (
                <li key={row.text} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-coffee-900 text-leaf-300 ring-1 ring-cream/10">
                    <row.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="text-sm text-coffee-100/75">{row.text}</span>
                </li>
              ))}
              <li className="text-[10px] font-bold tracking-[0.2em] text-coffee-300/70 uppercase">
                Details are placeholders
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-7 sm:flex-row">
          <p className="text-xs text-coffee-100/55">
            © {year} Nouman Naveed Coffee. All rights reserved.
          </p>
          <p className="font-display text-sm text-coffee-100/60 italic">
            From Ethiopia, with warmth — cherry to cup.
          </p>
        </div>
      </div>
    </footer>
  );
}
