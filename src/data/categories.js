export const categories = [
  {
    slug: "integrative-lifestyle-wellness",
    name: "Integrative & Lifestyle Wellness",
    short: "Lifestyle Wellness",
    description:
      "A holistic approach to wellness — personalised solutions and transformative lifestyle changes designed to optimise your health, vitality and overall well-being.",
    image: "category-integrative-lifestyle",
    genericBenefits: [
      { title: "Whole-Body Approach", desc: "Protocols that address root cause, not just symptoms." },
      { title: "Doctor-Reviewed", desc: "Every plan is signed off by our clinical team before you begin." },
      { title: "Measurable Progress", desc: "Outcomes tracked session to session, not left to guesswork." },
      { title: "Fits Real Life", desc: "Built around your schedule, not the other way around." },
    ],
  },
  {
    slug: "wellness-diagnostics-consultations",
    name: "Wellness Diagnostics & Consultations",
    short: "Diagnostics & Consultations",
    description:
      "Comprehensive wellness diagnostics and expert consultations that guide you toward optimal health through personalised insights and tailored strategy.",
    image: "category-diagnostics",
    genericBenefits: [
      { title: "Lab-Grade Accuracy", desc: "Diagnostics processed to clinical laboratory standards." },
      { title: "Doctor-Interpreted", desc: "Results explained by a physician, not left as a raw PDF." },
      { title: "A Real Baseline", desc: "Know what your body needs before you spend on the wrong therapy." },
      { title: "Actionable Next Steps", desc: "Every report ends in a protocol, not just a number." },
    ],
  },
  {
    slug: "weight-loss-slimming",
    name: "Weight Loss & Slimming",
    short: "Weight Loss & Slimming",
    description:
      "Effective, sustainable weight-loss and body-contouring solutions tailored to your unique physiology — not a one-size-fits-all program.",
    image: "category-weight-slimming",
    genericBenefits: [
      { title: "Body-Composition Led", desc: "Programs built on fat-to-muscle ratio, not just the scale." },
      { title: "No Crash Protocols", desc: "Sustainable pacing designed to hold once you stop coming in." },
      { title: "Nutrition Included", desc: "Counseling paired with every physical protocol." },
      { title: "Visible Milestones", desc: "Progress measured and reviewed on a fixed cadence." },
    ],
  },
  {
    slug: "recovery-athletic-enhancement",
    name: "Recovery & Athletic Enhancement",
    short: "Recovery & Performance",
    description:
      "Tailored solutions for pain recovery and athletic enhancement, blending cutting-edge technology with personalised care to optimise performance.",
    image: "category-recovery-performance",
    genericBenefits: [
      { title: "Faster Turnaround", desc: "Built for people who train again tomorrow, not next month." },
      { title: "Clinically Supervised", desc: "A trained therapist monitors every session, start to finish." },
      { title: "Pain-Led Diagnosis", desc: "We find the mechanical cause before we treat the symptom." },
      { title: "Athlete-Grade Equipment", desc: "The same technology used in professional recovery rooms." },
    ],
  },
  {
    slug: "mind-wellness-relaxation",
    name: "Mind Wellness & Relaxation",
    short: "Mind & Relaxation",
    description:
      "Mindfulness techniques and personalised relaxation therapies for mental rejuvenation, nervous-system regulation and emotional well-being.",
    image: "category-mind-relaxation",
    genericBenefits: [
      { title: "Nervous-System Focused", desc: "Protocols aimed at the stress response itself, not just symptoms." },
      { title: "Private & Unhurried", desc: "Sessions run without the clinic-clock feeling." },
      { title: "Sleep-Linked Tracking", desc: "Most clients pair this with sleep-quality follow-up." },
      { title: "No Sedation Required", desc: "Calm delivered through the body, not a prescription pad." },
    ],
  },
  {
    slug: "face-wellness-anti-aging",
    name: "Face Wellness & Anti-Ageing",
    short: "Face & Anti-Ageing",
    description:
      "Revitalising facials and advanced skincare solutions — personalised care designed to rejuvenate your complexion and defy the signs of ageing.",
    image: "category-face-beauty",
    genericBenefits: [
      { title: "Medical-Grade Devices", desc: "USFDA / CE-cleared technology, not salon-grade equipment." },
      { title: "Skin-Mapped Plans", desc: "Protocols set from a skin analysis, not a fixed menu." },
      { title: "No Downtime Options", desc: "Most sessions fit into a lunch break." },
      { title: "Dermatologist Oversight", desc: "Every device-led treatment is reviewed by our aesthetic team." },
    ],
  },
];

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}
