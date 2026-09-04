import { ChevronDown } from "lucide-react";

/**
 * Soft double-bump wave, drawn in the color of the section BELOW it, so it
 * reads as a "peel" transition off the section above. Pass the fill that
 * matches the next section's background.
 */
export default function WaveDivider({ fill = "var(--v-cream)", cue = true, flip = false }) {
  return (
    <div className={`relative w-full ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" className="w-full h-[48px] sm:h-[72px]" preserveAspectRatio="none">
        <path
          d="M0,32 C 240,80 360,0 600,24 C 840,48 960,8 1200,32 C 1320,44 1380,44 1440,32 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
      {cue && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 v-scroll-cue">
          <ChevronDown size={20} style={{ color: fill === "var(--v-cream)" ? "var(--v-text)" : "var(--v-white)" }} className="opacity-40" />
        </div>
      )}
    </div>
  );
}
