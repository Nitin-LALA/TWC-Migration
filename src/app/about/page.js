import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Media from "@/components/Media";
import Avatar from "@/components/Avatar";
import WaveDivider from "@/components/v/WaveDivider";
import ScrollLines from "@/components/v/ScrollLines";
import Accordion from "@/components/v/Accordion";
import { advisoryBoard } from "@/data/team";

export const metadata = {
  title: "About Us | The Wellness Co. — India's Integrative Wellness Pioneers",
  description: "Founded by Rohan and Rishabh Jain, The Wellness Co. brings USFDA, CE and MFDS-approved integrative wellness therapies to India, backed by a five-doctor Medical Advisory Board.",
};

const values = [
  { title: "Cutting-Edge Therapies", desc: "World-class wellness therapies tailored to your specific concerns and needs." },
  { title: "Global Standards & Expertise", desc: "Committed to global quality and training standards for your well-being." },
  { title: "Holistic & Personalised Care", desc: "Highly personalised, attentive, holistic health care with every visit." },
  { title: "Doctor-Reviewed Protocols", desc: "Every therapy is signed off by our Medical Advisory Board before it reaches a client." },
];

const expectations = [
  "A consultation before any therapy, not after",
  "Your health history and goals reviewed by a doctor",
  "A written protocol, not a verbal sales pitch",
  "The same clinical standard at every one of our 14 clinics",
];

const aboutFaqs = [
  { q: "Who founded The Wellness Co.?", a: "Rohan and Rishabh Jain, two sports enthusiasts who discovered these therapies during their professional and collegiate tennis careers in the USA and Spain, and set out to make them accessible in India." },
  { q: "Is The Wellness Co. medically supervised?", a: "Yes — every protocol is reviewed by our Medical Advisory Board and delivered by certified professionals under doctor-defined guidelines." },
  { q: "Who backs The Wellness Co.?", a: "Rollins International, an investor focused on India's health and wellness sector, also behind brands including PureFoods and Ubody." },
];

export default function AboutPage() {
  return (
    <div className="bg-v-cream">

      {/* ============ 1. HERO — full-bleed photo ============ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Media imgKey="hero-about" alt="The Wellness Co. clinical team" className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-v-charcoal/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-v-charcoal/60 via-v-charcoal/35 to-v-charcoal/25" />
        <div className="relative v-shell pb-16 pt-32 text-center w-full">
          <ScrollLines as="h1" lines={["Care that starts with", "a consultation, not a catalogue."]} className="font-display text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.05] text-v-white max-w-[780px] mx-auto" />
          <p className="text-[16px] mt-5 max-w-[560px] mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Men and women at the top of the success ladder often endure real strain on both mental and physical well-being. We build tailor-made wellness strategies to help you stay balanced, day to day.
          </p>
          <Link href="/contact" className="v-btn v-btn-accent mt-8 inline-flex">Book Consultation<span className="chip"><ArrowUpRight size={16} /></span></Link>
        </div>
      </section>
      <WaveDivider fill="var(--v-cream)" />

      {/* ============ 2. MISSION STATEMENT ============ */}
      <section className="v-section-tight">
        <div className="v-shell">
          <div className="v-eyebrow"><span className="dot" />Our Story</div>
          <h2 className="v-h-lg max-w-[640px]">Two sports-loving brothers, one mission.</h2>
          <p className="v-lede mt-5">
            Rohan and Rishabh Jain discovered the benefits of integrative wellness therapies during their professional and collegiate tennis careers in the USA and Spain. Inspired by what they experienced abroad, they set out to make it accessible in India for the very first time.
          </p>
          <p className="v-lede mt-4">
            Backed by Rollins International — an investor at the forefront of India's health and wellness sector, also behind PureFoods and Ubody — we're built around one mission: scientifically-proven therapies grounded in evidence, focused on oxygenation, hydration and circulation at the cellular level.
          </p>
        </div>
      </section>

      {/* ============ 3. IMPACT / STATS (dark) ============ */}
      <section className="bg-v-ink v-section-tight">
        <div className="v-shell">
          <div className="v-eyebrow on-ink"><span className="dot" />Our Impact</div>
          <h2 className="v-h-lg text-v-white max-w-[560px]">One clinical standard, wherever you walk in.</h2>
          <div className="grid grid-cols-2 gap-3 mt-10">
            <div className="aspect-[4/5] v-card-photo"><Media imgKey="hero-about" alt="" /></div>
            <div className="aspect-[4/5] v-card-photo mt-8"><Media imgKey="clinic-interior-reception" alt="" /></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <Stat n="14" l="Clinics Nationwide" />
            <Stat n="8" l="Cities Served" />
            <Stat n="5" l="Doctors On Our Board" />
            <Stat n="4.8★" l="Average Rating" />
          </div>
        </div>
      </section>

      {/* ============ 4. OUR VALUES (dark bento) ============ */}
      <section className="bg-v-ink v-section-tight pt-0">
        <div className="v-shell">
          <h2 className="v-h-lg text-v-white">Our Values</h2>
          <p className="text-[15px] mt-3 max-w-[520px]" style={{ color: "rgba(255,255,255,0.55)" }}>Not words on a waiting-room wall — these decide how long appointments run, and what equipment sits on the floor.</p>
          <div className="v-bento grid-cols-1 sm:grid-cols-2 mt-10">
            {values.map((v) => (
              <div key={v.title}>
                <Check size={20} className="text-v-accent mb-5" />
                <h4 className="text-[18px] text-v-white font-medium">{v.title}</h4>
                <p className="text-[14px] mt-2.5" style={{ color: "rgba(255,255,255,0.55)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="var(--v-cream)" flip />

      {/* ============ 5. OUR STORY / WHAT TO EXPECT ============ */}
      <section className="v-section">
        <div className="v-shell grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] v-card-photo order-2 lg:order-1"><Media imgKey="therapy-cryo" alt="Inside a consultation" /></div>
          <div className="order-1 lg:order-2">
            <div className="v-eyebrow"><span className="dot" />What To Expect</div>
            <h2 className="v-h-lg">A visit built around a conversation.</h2>
            <ul className="mt-8">
              {expectations.map((e, i) => (
                <li key={e} className={`flex items-start gap-3 py-4 text-[15px] ${i > 0 ? "v-divider" : ""}`}>
                  <Check size={18} className="text-v-ink mt-0.5 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="v-btn v-btn-dark mt-6 inline-flex">Book Consultation<span className="chip"><ArrowUpRight size={16} /></span></Link>
          </div>
        </div>
      </section>

      {/* ============ 6. FOUNDERS / MEDICAL ADVISORY BOARD ============ */}
      <section id="advisory-board" className="v-section-tight bg-v-cream">
        <div className="v-shell">
          <div className="v-eyebrow"><span className="dot" />Excellence In Preventive, Integrative &amp; Longevity Medicine</div>
          <h2 className="v-h-lg max-w-[600px]">Medical Advisory Board</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {advisoryBoard.map((d, i) => (
              <div key={d.slug} className={`relative aspect-[4/5] v-card-photo bg-v-ink p-6 flex flex-col justify-end ${i % 3 === 1 ? "sm:mt-8" : ""}`}>
                <span className="v-name-chip absolute top-5 left-5">
                  <Avatar initials={d.initials} name={d.name} size={26} />
                  <span className="text-[12.5px] font-medium text-v-text">{d.name}</span>
                </span>
                <div>
                  <div className="text-[11px] text-v-accent font-semibold uppercase tracking-wide">{d.role}</div>
                  <div className="text-[11.5px] mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{d.credentials}</div>
                  <p className="text-[13px] mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="v-section">
        <div className="v-shell grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <div>
            <div className="v-eyebrow"><span className="dot" />FAQ</div>
            <h2 className="v-h-lg">Getting to know us.</h2>
          </div>
          <Accordion items={aboutFaqs} />
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="bg-v-ink v-section-tight text-center">
        <div className="v-shell">
          <h2 className="v-h-lg text-v-white max-w-[600px] mx-auto">Ready to meet your care team?</h2>
          <Link href="/contact" className="v-btn v-btn-accent mt-8 inline-flex">Book Consultation<span className="chip"><ArrowUpRight size={16} /></span></Link>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div className="font-display text-[36px] sm:text-[44px] text-v-white leading-none">{n}</div>
      <div className="text-[13px] mt-2.5" style={{ color: "rgba(255,255,255,0.55)" }}>{l}</div>
    </div>
  );
}
