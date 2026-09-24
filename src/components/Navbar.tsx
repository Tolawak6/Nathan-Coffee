import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/site";
import { cn } from "../utils/cn";
import { LogoLockup } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* scroll progress */}
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-leaf-700 via-leaf-500 to-leaf-300"
        style={{ scaleX: progress }}
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-500",
          scrolled
            ? "border-b border-coffee-200/60 bg-cream/97 shadow-[0_8px_30px_-12px_rgba(67,38,22,0.18)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream/90 backdrop-blur-md"
        )}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          {/* Logo — sits directly on the cream surface, no wrapper needed */}
          <LogoLockup className="shrink-0" />

          {/* desktop links — dark brown text on cream */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-[13px] font-semibold tracking-wide text-coffee-700 transition-colors hover:text-leaf-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-500 px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_10px_26px_-12px_rgba(0,154,68,0.6)] transition-all duration-300 hover:bg-leaf-600 hover:shadow-[0_14px_30px_-12px_rgba(0,154,68,0.7)] active:scale-[0.97]"
            >
              <Phone className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
              Get in Touch
            </a>
          </div>

          {/* mobile toggle — brown on cream */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-coffee-300/50 text-coffee-700 transition-colors hover:border-leaf-500 hover:text-leaf-600 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* mobile menu — cream background to match */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex flex-col bg-cream lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-[76px] items-center justify-between border-b border-coffee-200/40 px-5 sm:px-8">
              <LogoLockup />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-coffee-300/50 text-coffee-700 transition-colors hover:border-leaf-500 hover:text-leaf-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-1 items-center px-8">
              <ul className="w-full space-y-1.5">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -26 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-coffee-200/40 py-4"
                    >
                      <span className="font-mono text-xs font-medium text-leaf-500">
                        0{i + 1}
                      </span>
                      <span className="font-display text-3xl font-medium text-coffee-700 transition-colors group-hover:text-leaf-500">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-10 text-xs tracking-[0.3em] text-coffee-400 uppercase"
            >
              From Ethiopia — cherry to cup
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
