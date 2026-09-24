import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/*  Nouman Naveed Coffee — Logo                                         */
/*                                                                      */
/*  Uses the actual logo PNG placed in public/logo.png.                 */
/*  If the image is missing it falls back to a plain text wordmark.     */
/*  To use your real logo: drop your logo.png into the /public folder.  */
/* ------------------------------------------------------------------ */

interface LogoProps {
  className?: string;
  tone?: "light" | "dark";
  markClassName?: string;
  disc?: boolean;
}

/* ── Entire logo as an <img> pointing at public/logo.png ── */
export function LogoLockup({ className }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="Nouman Naveed Coffee — Home"
      className={cn("block shrink-0", className)}
    >
      {/*
        * mix-blend-mode: multiply makes white pixels transparent so the
        * logo's white background blends into whatever background is behind it.
        * The parent div carries the cream colour so white → cream seamlessly.
        * The brown and green logo colours are unaffected by multiply.
      */}
      <div style={{ backgroundColor: "#faf6ee" }} className="rounded-lg">
        <img
          src="/logo.png"
          alt="Nouman Naveed Coffee"
          className="h-12 w-auto object-contain"
          style={{ mixBlendMode: "multiply" }}
          draggable={false}
        />
      </div>
    </a>
  );
}

/* ── Bean-only mark (used in hero & contact card) ── */
export function LogoMark({ className, tone = "dark" }: LogoProps) {
  /*
   * Real logo geometry (traced from the original image):
   *
   *  The bean is an ellipse, tilted ~8° clockwise, dark brown #432616.
   *  A white center-crack curves from top-right to bottom-left.
   *  Two thick vivid-green (#009a44) diagonal band/stripes cross the bean
   *  forming a double-chevron "N" shape, with a thin white gap between them.
   *  The stripes enter from upper-left and exit lower-right.
   */
  const BROWN = "#432616";
  const GREEN = "#009a44";
  const WHITE = tone === "light" ? "rgba(255,255,255,0.92)" : "#ffffff";
  const BG    = tone === "light" ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)";

  return (
    <svg
      viewBox="0 0 200 220"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Nouman Naveed Coffee bean mark"
      style={{ background: BG }}
    >
      {/* ── Bean body ── */}
      <ellipse
        cx="100" cy="112"
        rx="82" ry="100"
        fill={BROWN}
        transform="rotate(-8 100 112)"
      />

      {/* ── White center crack (curves top-right → bottom-left) ── */}
      <path
        d="M118 16 C110 55, 126 90, 108 130 C92 168, 96 196, 90 210"
        stroke={WHITE}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        opacity="0.88"
      />

      {/* ── Double green "N" chevron bands ── */}
      {/* Top stripe */}
      <path
        d="M28 105 L60 105 L148 38 L180 38"
        stroke={GREEN}
        strokeWidth="22"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Bottom stripe */}
      <path
        d="M28 140 L60 140 L148 73 L180 73"
        stroke={GREEN}
        strokeWidth="22"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* White gap between stripes */}
      <path
        d="M28 122 L60 122 L148 55 L180 55"
        stroke={WHITE}
        strokeWidth="6"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
