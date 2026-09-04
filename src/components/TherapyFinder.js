"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GOALS = {
  Energy: ["iv-drip-therapy", "blood-work-panels", "doctors-consultations"],
  Sleep: ["total-wellness-capsule", "pemf-negative-ion-therapy", "personalized-mind-wellness-programs"],
  Recovery: ["whole-body-cryotherapy", "normatec-compression-therapy", "red-light-therapy"],
  Weight: ["cryo-ems-slimming", "integrative-slimming-programs", "nutritional-counseling"],
  Skin: ["hydrafacial-syndeo", "morpheus8", "red-light-therapy"],
  Longevity: ["advanced-genetic-screening", "telomere-biological-age-test", "hyperbaric-oxygen-therapy"],
};

export default function TherapyFinder({ therapyMap }) {
  const [goal, setGoal] = useState(null);

  return (
    <div>
      <div className="eyebrow on-dark"><span className="dot" />Find Your Fit</div>
      <h3 className="h-md text-cream max-w-[420px]">What are you optimising for today?</h3>
      <div className="flex gap-2.5 flex-wrap mt-7">
        {Object.keys(GOALS).map((g) => (
          <button
            key={g}
            onClick={() => setGoal(g)}
            className={`px-4.5 py-2.5 rounded-full border text-[13.5px] transition-colors ${
              goal === g ? "bg-cream border-cream text-forest-deep" : "border-[var(--line-on-dark)] text-cream hover:border-cream/60"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {goal && (
        <div className="mt-8 pt-7 divider-dark">
          <div className="text-[12px] uppercase tracking-wide text-cream/45 mb-3">Recommended for you</div>
          <div className="flex gap-3 flex-wrap">
            {GOALS[goal].map((slug) => {
              const t = therapyMap[slug];
              if (!t) return null;
              return (
                <Link key={slug} href={`/therapies/${slug}`} className="bg-cream/10 border border-[var(--line-on-dark)] rounded-[var(--radius-s)] px-4.5 py-3.5 text-[14px] text-cream hover:bg-cream/15">
                  {t.name}
                </Link>
              );
            })}
          </div>
          <Link href="/contact" className="btn btn-invert btn-sm mt-6 inline-flex items-center gap-1.5">
            Continue to Consultation <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
}
