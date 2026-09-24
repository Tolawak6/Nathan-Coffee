import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Coffees } from "./components/Coffees";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import { NaturalVsWashed } from "./components/NaturalVsWashed";
import { Process } from "./components/Process";
import { ProcessGrid } from "./components/ProcessGrid";
import { Values } from "./components/Values";
import { WhyEthiopia } from "./components/WhyEthiopia";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 18, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-leaf-600 text-white shadow-[0_16px_34px_-12px_rgba(49,106,56,0.95)] ring-4 ring-cream/80 transition-colors hover:bg-leaf-500 sm:right-7 sm:bottom-7"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-coffee-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProcessGrid />
        <Marquee />
        <About />
        <Coffees />
        <Process />
        <NaturalVsWashed />
        <WhyEthiopia />
        <Values />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
