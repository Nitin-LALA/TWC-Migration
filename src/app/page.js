import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowUpRight, Check, Building2, MapPinned, Stethoscope, Star } from "lucide-react";
import Media from "@/components/Media";
import { media } from "@/data/media";
import Avatar from "@/components/Avatar";
import WaveDivider from "@/components/v/WaveDivider";
import Carousel from "@/components/v/Carousel";
import Accordion from "@/components/v/Accordion";
import ProgramPicker from "@/components/v/ProgramPicker";
import { site } from "@/data/site";
import { therapies, featuredTherapies } from "@/data/therapies";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { advisoryBoard } from "@/data/team";
import { cities, locations } from "@/data/locations";

const HEADLINE_WORDS = ["Heal", "Recover", "Thrive"];

const trustStats = [
  { icon: <Building2 size={20} />, n: site.stats.clinics, l: "Clinics Nationwide" },
  { icon: <MapPinned size={20} />, n: site.stats.cities, l: "Cities Served" },
  { icon: <Stethoscope size={20} />, n: String(advisoryBoard.length), l: "Doctors On Our Board" },
  { icon: <Star size={20} />, n: `${site.stats.rating}★`, l: "Average Rating" },
];

const galleryCats = categories.slice(0, 4);
const pickerItems = featuredTherapies.slice(0, 4);

const cityAvailability = cities.slice(0, 5).map((city) => {
  const loc = locations.find((l) => l.city === city);
  return { city, image: loc?.image || "clinic-interior-reception", href: `/locations?city=${encodeURIComponent(city)}` };
});

const valuePillars = [
  { title: "Clinical Approach", desc: "Every protocol is doctor-reviewed, not just spa-designed." },
  { title: "Certified Technology", desc: "USFDA, CE and MFDS-cleared equipment across every clinic." },
  { title: "Personalisation", desc: "Built from your own diagnostics, not a fixed menu." },
];

const homeFaqs = [
  { q: "Is therapy at The Wellness Co. medically supervised?", a: "Yes. Every protocol — from IV formulations to cryotherapy sessions — is reviewed by our Medical Advisory Board and delivered by certified therapists under doctor-defined guidelines." },
  { q: "How do I know which programme is right for me?", a: "Book a consultation — our team builds a plan from your goals and, where relevant, your diagnostic results." },
  { q: "Do all clinics offer every programme?", a: "Most core therapies are available at every clinic. Specialised equipment such as HBOT or genetic screening is concentrated in select locations." },
  { q: "Can I walk in without an appointment?", a: "We recommend booking ahead to guarantee therapist availability, though walk-ins are accommodated where the day's schedule allows." },
];

export default function HomePage() {
  return (
    <div style={{ background: "var(--v-cream)" }}>

      {/* ============ 1. HERO ============ */}
      <section className="position-relative">
        <Container className="pt-4 pt-lg-3">
          <Row className="align-items-stretch g-4 g-lg-5">
            <Col lg={6} className="order-2 order-lg-1 d-flex flex-column justify-content-center py-4 py-lg-5">
              <p className="small mb-4" style={{ color: "var(--v-muted)" }}>India's integrative wellness &amp; longevity clinic</p>
              <h1 className="font-display twc-hero-h1" style={{ color: "var(--v-text)" }}>
                {HEADLINE_WORDS.map((w) => (
                  <span key={w} className="d-block">
                    {w}<span style={{ color: "var(--v-accent-deep)" }}>.</span>
                  </span>
                ))}
              </h1>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="d-flex twc-avatar-stack">
                  {testimonials.slice(0, 4).map((t) => (
                    <Avatar key={t.name} initials={t.name.split(" ").map((n) => n[0]).join("")} name={t.name} size={34} className="twc-avatar-ring" />
                  ))}
                </div>
                <p className="small mb-0" style={{ color: "var(--v-text-soft)" }}>Join thousands rated <b style={{ color: "var(--v-text)" }}>4.8★</b> across India</p>
              </div>
              <p className="small mt-3" style={{ color: "var(--v-muted)" }}>Same-day consultations available at most of our 14 clinics.</p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <Link href="/contact" className="v-btn v-btn-accent">Book Consultation<span className="chip"><ArrowUpRight size={16} /></span></Link>
                <Link href="/therapies" className="v-btn v-btn-dark">Explore Programs<span className="chip"><ArrowUpRight size={16} /></span></Link>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 position-relative v-card-photo overflow-hidden" style={{ minHeight: 320 }}>
              <video
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover" }}
                src="/video/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                poster={media["hero-home"]}
              />
            </Col>
          </Row>
        </Container>
        <WaveDivider fill="var(--v-cream)" />
      </section>

      {/* ============ TRUST STATS ============ */}
      <section className="pt-0 pb-5">
        <Container>
          <div className="v-bento on-cream row row-cols-2 row-cols-lg-4 g-0">
            {trustStats.map((s) => (
              <div key={s.l} className="text-center text-sm-start">
                <div className="d-flex justify-content-center justify-content-sm-start mb-3" style={{ color: "var(--v-ink)" }}>{s.icon}</div>
                <div className="font-display" style={{ fontSize: 32, lineHeight: 1 }}>{s.n}</div>
                <div className="small mt-2" style={{ color: "var(--v-muted)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ ABOUT THE WELLNESS CO. (real live-site copy) ============ */}
      <section className="pt-0 pb-5">
        <Container className="text-center">
          <div className="v-eyebrow mx-auto"><span className="dot" />About The Wellness Co.</div>
          <h2 className="v-h-lg mx-auto" style={{ maxWidth: 720 }}>
            Step into India's leading integrative wellness &amp; longevity clinics.
          </h2>
          <p className="v-lede mx-auto mt-3">Discover USFDA, CE, and ISO approved therapies for</p>
          <div className="d-flex align-items-center justify-content-center gap-3 mt-3 flex-wrap">
            {["Oxygenation", "Hydration", "Circulation"].map((w, i) => (
              <span key={w} className="d-flex align-items-center gap-3">
                {i > 0 && <span style={{ color: "var(--v-accent-deep)" }}>|</span>}
                <span className="font-display" style={{ fontSize: 19 }}>{w}</span>
              </span>
            ))}
          </div>
          <Link href="/about" className="v-btn v-btn-dark mt-4 d-inline-flex">Learn More<span className="chip"><ArrowUpRight size={16} /></span></Link>
        </Container>
      </section>

      {/* ============ PROGRAMS TEASER — edge to edge gallery ============ */}
      <section className="pb-5">
        <Container>
          <div className="v-eyebrow"><span className="dot" />Programs</div>
          <h2 className="v-h-lg" style={{ maxWidth: 560 }}>Six ways to work on your wellness.</h2>
          <p className="v-lede mt-3">Every category shares the same doctor oversight, the same certified equipment, and the same clinical standard.</p>
        </Container>
        <Row className="g-1 row-cols-2 row-cols-lg-4 mx-0 mt-4">
          {galleryCats.map((c) => (
            <Col key={c.slug} className="px-1">
              <Link href={`/therapies?category=${c.slug}`} className="d-block position-relative twc-cat-tile overflow-hidden text-decoration-none" style={{ aspectRatio: "3/4" }}>
                <Media imgKey={c.image} alt={c.name} className="twc-cat-tile-img" />
                <div className="position-absolute top-0 start-0 w-100 h-100 twc-gradient-top" />
                <span className="position-absolute bottom-0 start-0 end-0 p-3 text-white fw-medium" style={{ fontSize: 15 }}>{c.short}</span>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      {/* ============ 3. PROGRAM PICKER ============ */}
      <section className="py-5">
        <Container>
          <div className="v-eyebrow"><span className="dot" />Signature Programs</div>
          <h2 className="v-h-lg mb-5" style={{ maxWidth: 560 }}>Four programs our doctors recommend most.</h2>
          <ProgramPicker items={pickerItems.map((t) => ({ name: t.name, oneLiner: t.oneLiner, image: t.image, href: `/therapies/${t.slug}` }))} />
        </Container>
      </section>

      <WaveDivider fill="var(--v-ink)" />

      {/* ============ 4. SCHEDULE STRIP (repurposed: consultation availability) ============ */}
      <section className="py-5" style={{ background: "var(--v-ink)" }}>
        <Container>
          <div className="v-eyebrow on-ink"><span className="dot" />Book A Consultation</div>
          <h2 className="v-h-lg text-white" style={{ maxWidth: 560 }}>Availability, city by city.</h2>
          <p className="v-lede mt-3" style={{ color: "rgba(255,255,255,0.6)" }}>Most clinics can see you the same day. Pick your city to check the nearest one.</p>
          <div className="mt-5">
            <Carousel dark>
              {cityAvailability.map((c) => (
                <Link key={c.city} href={c.href} className="flex-shrink-0 v-card-panel position-relative twc-cat-tile text-decoration-none" style={{ width: 260, aspectRatio: "3/4", scrollSnapAlign: "start" }}>
                  <Media imgKey={c.image} alt={c.city} className="twc-cat-tile-img" />
                  <div className="position-absolute top-0 start-0 w-100 h-100 twc-gradient-top" />
                  <span className="position-absolute top-0 start-0 m-4 fw-semibold px-3 py-2 rounded-pill" style={{ fontSize: 11, background: "var(--v-accent)", color: "var(--v-ink-deep)" }}>Same-day slots</span>
                  <div className="position-absolute bottom-0 start-0 end-0 p-4">
                    <span className="text-white fw-medium" style={{ fontSize: 18 }}>{c.city}</span>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      {/* ============ 5. MISSION STATEMENT ============ */}
      <section className="py-5 text-center" style={{ background: "var(--v-ink)" }}>
        <Container>
          <h2 className="v-h-lg mx-auto text-white" style={{ maxWidth: 780 }}>
            We believe wellness should be delivered with the same rigour as medicine.
          </h2>
          <p className="mt-3" style={{ fontSize: 15, color: "rgba(255,255,255,0.55)" }}>Every protocol doctor-reviewed. Every clinic held to the same standard.</p>
          <Link href="/contact" className="v-btn v-btn-accent mt-4 d-inline-flex">Book Consultation<span className="chip"><ArrowUpRight size={16} /></span></Link>
        </Container>
      </section>

      <WaveDivider fill="var(--v-cream)" flip />

      {/* ============ 6. MEDICAL ADVISORY BOARD TEASER ============ */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div className="v-eyebrow"><span className="dot" />Our Doctors</div>
              <h2 className="v-h-lg">A Medical Advisory Board behind every protocol.</h2>
              <p className="v-lede mt-4">Five specialists — in longevity, hyperbaric medicine, aesthetics, and functional neurology — review every therapy before it reaches a client.</p>
              <Link href="/about#advisory-board" className="v-btn v-btn-dark mt-4 d-inline-flex">Meet The Team<span className="chip"><ArrowUpRight size={16} /></span></Link>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {advisoryBoard.slice(0, 4).map((d, i) => (
                  <Col xs={6} key={d.slug} className={i % 2 ? "mt-4" : ""}>
                    <div className="position-relative v-card-photo d-flex align-items-end p-3" style={{ aspectRatio: "3/4", background: "var(--v-ink)" }}>
                      <span className="v-name-chip">
                        <Avatar initials={d.initials} name={d.name} size={26} />
                        <span className="fw-medium" style={{ fontSize: 12.5, color: "var(--v-text)" }}>{d.name}</span>
                      </span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ 7. TESTIMONIALS ============ */}
      <section className="position-relative py-5 overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100"><Media imgKey="clinic-interior-treatment-room" alt="" /></div>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.55)" }} />
        <Container className="position-relative">
          <div className="v-eyebrow on-ink"><span className="dot" />Patient Stories</div>
          <h2 className="v-h-lg text-white" style={{ maxWidth: 560 }}>Care patients remember long after.</h2>
          <div className="mt-5">
            <Carousel dark>
              {testimonials.slice(0, 6).map((t) => (
                <div key={t.name} className="flex-shrink-0 v-glass v-card-panel p-4" style={{ width: 320, scrollSnapAlign: "start" }}>
                  <p className="text-white" style={{ fontSize: 15, lineHeight: 1.6 }}>"{t.quote}"</p>
                  <div className="d-flex align-items-center gap-3 mt-4">
                    <Avatar initials={t.name.split(" ").map((n) => n[0]).join("")} name={t.name} size={34} />
                    <div>
                      <div className="text-white fw-medium" style={{ fontSize: 13.5 }}>{t.name}</div>
                      {t.context && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{t.context}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </Container>
      </section>

      {/* ============ 8. WHY US (bento — replaces Pricing) ============ */}
      <section className="py-5" style={{ background: "var(--v-ink)" }}>
        <Container>
          <div className="v-eyebrow on-ink"><span className="dot" />Why The Wellness Co.</div>
          <h2 className="v-h-lg text-white mb-5" style={{ maxWidth: 560 }}>Care built the way medicine should be.</h2>
          <div className="v-bento row row-cols-1 row-cols-sm-3 g-0">
            {valuePillars.map((p) => (
              <div key={p.title}>
                <Check size={20} className="mb-4" style={{ color: "var(--v-accent)" }} />
                <h4 className="v-h-md text-white" style={{ fontSize: 19 }}>{p.title}</h4>
                <p className="mt-2" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ 9. FAQ ============ */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="v-eyebrow"><span className="dot" />Common Questions</div>
              <h2 className="v-h-lg">Everything before you book.</h2>
              <div className="mt-4 pt-3 v-divider">
                <p className="small" style={{ color: "var(--v-muted)" }}>4.8★ average rating across 14 clinics nationwide.</p>
              </div>
              <Link href="/contact" className="v-btn v-btn-dark mt-3 d-inline-flex">Talk To Us<span className="chip"><ArrowUpRight size={16} /></span></Link>
            </Col>
            <Col lg={7}>
              <Accordion items={homeFaqs} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
