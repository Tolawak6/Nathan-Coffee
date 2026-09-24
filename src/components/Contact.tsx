import { ArrowUpRight, Coffee, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";

const CONTACT_ROWS = [
  { icon: Phone, label: "Phone", value: "+251 •• ••• ••••" },
  { icon: Mail, label: "Email", value: "••••@noumannaveed•coffee" },
  { icon: MapPin, label: "Location", value: "Ethiopia — address to follow" },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram" },
  { icon: FacebookIcon, label: "Facebook" },
  { icon: LinkedinIcon, label: "LinkedIn" },
  { icon: YoutubeIcon, label: "YouTube" },
];

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="grain relative overflow-hidden bg-coffee-950 py-24 sm:py-32">
      <div aria-hidden className="absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-leaf-600/14 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.32em] text-leaf-300 uppercase">
              <span className="h-px w-8 bg-leaf-300/70" />
              Get In Touch
              <span className="h-px w-8 bg-leaf-300/70" />
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.06] font-medium text-balance text-cream sm:text-6xl">
              Experience{" "}
              <em className="font-display text-leaf-300 italic">Ethiopian Coffee</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-coffee-100/75">
              Curious about a specific origin, a process, or how to bring these coffees to
              your table? We would love to talk coffee with you.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact-card"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-leaf-600 px-8 py-4 text-sm font-bold text-white shadow-[0_18px_38px_-14px_rgba(49,106,56,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-500 active:scale-[0.98] sm:w-auto"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#coffee"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-cream px-8 py-4 text-sm font-bold text-coffee-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-leaf-100 active:scale-[0.98] sm:w-auto"
              >
                <Coffee className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
                Request Coffee
              </a>
              <a
                href="#contact-card"
                className="inline-flex w-full items-center justify-center rounded-full border border-cream/30 px-8 py-4 text-sm font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-300 hover:bg-cream/10 active:scale-[0.98] sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>

        {/* business-card-inspired contact card */}
        <Reveal delay={0.2} className="mt-20">
          <div
            id="contact-card"
            className="mx-auto grid max-w-4xl overflow-hidden rounded-[30px] shadow-[0_44px_90px_-36px_rgba(0,0,0,0.85)] ring-1 ring-cream/12 md:grid-cols-[0.95fr_1.05fr]"
          >
            {/* face of the card */}
            <div className="grain relative flex flex-col justify-between gap-10 bg-coffee-900 p-8 sm:p-10">
              <div aria-hidden className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-leaf-600/15 blur-3xl" />
              <div className="flex items-start justify-between">
                <div className="rounded-xl bg-white/10 p-2 backdrop-blur-sm">
                <img
  src="/logo.png"
  alt="Nouman Naveed Coffee"
  className="h-16 w-auto object-contain"
/>
                </div>
                <span className="rounded-full border border-leaf-400/40 px-3 py-1 text-[9px] font-bold tracking-[0.28em] text-leaf-300 uppercase">
                  Ethiopian Origin
                </span>
              </div>
              <div>
                <p className="font-display text-3xl leading-tight font-semibold text-cream">
                  Nouman Naveed
                  <span className="mt-1 block font-display text-3xl text-leaf-300 italic">Coffee</span>
                </p>
                <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-coffee-100/70">
                  From Ethiopia's finest coffee cherries to every carefully prepared cup.
                </p>
              </div>
              <div aria-hidden className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span key={i} className={`h-1 w-6 rounded-full ${i === 1 ? "bg-leaf-500" : "bg-coffee-700"}`} />
                ))}
              </div>
            </div>

            {/* details of the card */}
            <div className="flex flex-col justify-center gap-1 bg-cream p-8 sm:p-10">
              {CONTACT_ROWS.map((row) => (
                <div key={row.label} className="group flex items-center gap-4 border-b border-coffee-900/8 py-4 first:pt-0">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-leaf-50 text-leaf-700 transition-colors duration-300 group-hover:bg-leaf-600 group-hover:text-white">
                    <row.icon className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold tracking-[0.24em] text-leaf-700 uppercase">{row.label}</p>
                    <p className="truncate text-[15px] font-semibold text-coffee-900">{row.value}</p>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full bg-coffee-900/6 px-2.5 py-1 text-[9px] font-bold tracking-[0.18em] text-coffee-700/70 uppercase">
                    Placeholder
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between pt-5">
                <p className="text-[10px] font-bold tracking-[0.24em] text-coffee-700/70 uppercase">
                  Follow the journey
                </p>
                <div className="flex gap-2.5">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href="#contact-card"
                      aria-label={`${social.label} (placeholder link)`}
                      title={`${social.label} — coming soon`}
                      className="grid h-10 w-10 place-items-center rounded-full border border-coffee-900/12 text-coffee-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf-600 hover:bg-leaf-600 hover:text-white"
                    >
                      <social.icon className="h-4 w-4" strokeWidth={2} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
