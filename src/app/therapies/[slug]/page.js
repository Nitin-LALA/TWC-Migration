import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Media from "@/components/Media";
import Accordion from "@/components/v/Accordion";
import CtaBand from "@/components/v/CtaBand";
import TestimonialCard from "@/components/TestimonialCard";
import { therapies, getTherapy } from "@/data/therapies";
import { getCategory } from "@/data/categories";
import { testimonials } from "@/data/testimonials";

export function generateStaticParams() {
  return therapies.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = getTherapy(slug);
  if (!t) return {};
  return { title: `${t.name} | The Wellness Co.`, description: t.what };
}

export default async function TherapyPage({ params }) {
  const { slug } = await params;
  const t = getTherapy(slug);
  if (!t) notFound();
  const cat = getCategory(t.category);
  const related = therapies.find((r) => r.slug !== t.slug && r.category === t.category);
  const testimonial = testimonials[0];

  return (
    <div style={{ background: "var(--v-cream)" }}>

      {/* ============ HEADER BLOCK ============ */}
      <section className="py-5 pb-3">
        <Container>
          <Link href="/therapies" className="d-inline-flex align-items-center gap-2 mb-4 twc-back-link" style={{ fontSize: 13.5, color: "var(--v-muted)" }}>
            <ArrowLeft size={14} /> All Programs
          </Link>

          <Row className="align-items-start g-4">
            <Col lg={7}>
              <div className="v-eyebrow"><span className="dot" />{cat?.short}</div>
              <h1 className="v-h-xl">{t.name}</h1>
              <p className="mt-2 fw-medium" style={{ fontSize: 13, color: "var(--v-muted)" }}>{t.identifier}</p>
            </Col>
            <Col lg={5} className="d-flex flex-wrap gap-2 justify-content-lg-end">
              <Chip label="Duration" value={t.quick.duration} />
              <Chip label="Downtime" value={t.quick.downtime} />
              <Chip label="Suitable For" value={t.quick.suitableFor} />
            </Col>
          </Row>

          <div className="v-card-photo mt-5" style={{ aspectRatio: "16/7" }}>
            <Media imgKey={t.image} alt={t.name} />
          </div>
        </Container>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section className="pb-5">
        <Container>
          <Row className="g-5">
            <Col lg={7}>
              <h2 className="v-h-md">Programme overview</h2>
              <p className="mt-3" style={{ color: "var(--v-muted)", lineHeight: 1.7 }}>{t.what}</p>

              <h3 className="v-h-md mt-5">Who it&apos;s for</h3>
              <p className="mt-3" style={{ color: "var(--v-muted)", lineHeight: 1.7 }}>{t.whoFor}</p>

              <h3 className="v-h-md mt-5">The Wellness Co. approach</h3>
              <p className="mt-3" style={{ color: "var(--v-muted)", lineHeight: 1.7 }}>{t.safety.keepSafe}</p>
            </Col>

            <Col lg={5}>
              <div className="p-4 p-sm-5 text-white" style={{ background: "var(--v-ink)", borderRadius: "var(--v-radius-card)" }}>
                <div className="text-uppercase fw-semibold mb-4" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--v-accent)" }}>Programme Info</div>
                <InfoRow label="Available At" value="14 clinics" first />
                <InfoRow label="Duration" value={t.quick.duration} />
                <InfoRow label="Downtime" value={t.quick.downtime} />
                <InfoRow label="Doctor Reviewed" value="Yes" />
                <Link href="/contact" className="v-btn v-btn-accent w-100 justify-content-center mt-4">Book This Programme<span className="chip"><ArrowUpRight size={16} /></span></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ NEW PRACTICES (how it works) ============ */}
      <section className="py-5" style={{ background: "var(--v-ink)" }}>
        <Container>
          <div className="v-eyebrow on-ink"><span className="dot" />What Happens In A Session</div>
          <h2 className="v-h-lg text-white" style={{ maxWidth: 540 }}>New practices you&apos;ll go through.</h2>
          <div className="v-bento row row-cols-1 row-cols-sm-3 g-0 mt-4">
            {t.how.map((s) => (
              <div key={s.k}>
                <span className="text-uppercase fw-semibold" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--v-accent)" }}>{s.k}</span>
                <h4 className="fw-medium mt-2 text-white" style={{ fontSize: 16 }}>{s.title}</h4>
                <p className="mt-2" style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ IMPROVEMENTS (benefits) ============ */}
      <section className="py-5">
        <Container>
          <div className="v-eyebrow"><span className="dot" />What You&apos;ll Gain</div>
          <h2 className="v-h-lg" style={{ maxWidth: 540 }}>Improvements our clients report.</h2>
          <Row className="g-4 mt-4">
            {t.benefits.map((b) => (
              <Col sm={6} lg={3} key={b.title}>
                <Check size={18} className="mb-3" style={{ color: "var(--v-ink)" }} />
                <h4 className="fw-medium" style={{ fontSize: 15.5 }}>{b.title}</h4>
                <p className="small mt-2" style={{ color: "var(--v-muted)" }}>{b.desc}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ============ BEFORE / DURING / AFTER ============ */}
      <section className="py-5" style={{ background: "var(--v-cream)" }}>
        <Container>
          <h2 className="v-h-md mb-4">Before, during &amp; after</h2>
          <Row className="g-4">
            <Col sm={4}><BdaCol label="Before" text={t.bda.before} /></Col>
            <Col sm={4}><BdaCol label="During" text={t.bda.during} /></Col>
            <Col sm={4}><BdaCol label="After" text={t.bda.after} /></Col>
          </Row>
        </Container>
      </section>

      {/* ============ PULL QUOTE ============ */}
      {testimonial && (
        <section className="py-5">
          <Container style={{ maxWidth: 640 }}>
            <TestimonialCard testimonial={testimonial} />
          </Container>
        </section>
      )}

      {/* ============ RELATED ============ */}
      {related && (
        <section className="pb-5">
          <Container>
            <Link
              href={`/therapies/${related.slug}`}
              className="d-flex align-items-center justify-content-between text-decoration-none twc-related-link py-4"
              style={{ borderTop: "1px solid var(--v-line)", borderBottom: "1px solid var(--v-line)" }}
            >
              <span style={{ fontSize: 14.5, color: "var(--v-muted)" }}>Related — <b className="fw-medium" style={{ color: "var(--v-text)" }}>{related.name}</b></span>
              <ArrowUpRight size={18} style={{ color: "var(--v-ink)" }} />
            </Link>
          </Container>
        </section>
      )}

      {/* ============ FAQ ============ */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="v-eyebrow"><span className="dot" />FAQ</div>
              <h2 className="v-h-lg">Common questions.</h2>
            </Col>
            <Col lg={7}>
              <Accordion items={t.faqs} />
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand title={`Ready to feel the difference ${t.name.toLowerCase()} makes?`} secondaryLabel="Find A Location" secondaryHref="/locations" />
    </div>
  );
}

function Chip({ label, value }) {
  return (
    <div className="text-white px-3 py-2" style={{ background: "var(--v-ink)", borderRadius: "var(--v-radius-photo)" }}>
      <div className="text-uppercase" style={{ fontSize: 9.5, letterSpacing: "0.05em", color: "var(--v-accent)" }}>{label}</div>
      <div className="fw-medium mt-1" style={{ fontSize: 13 }}>{value}</div>
    </div>
  );
}

function InfoRow({ label, value, first }) {
  return (
    <div className="d-flex justify-content-between align-items-center py-2" style={{ borderTop: first ? "none" : "1px solid var(--v-line-on-dark)" }}>
      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{label}</span>
      <span className="fw-medium" style={{ fontSize: 14 }}>{value}</span>
    </div>
  );
}

function BdaCol({ label, text }) {
  return (
    <div>
      <div className="text-uppercase fw-semibold mb-2" style={{ fontSize: 11, letterSpacing: "0.05em", color: "var(--v-muted-2)" }}>{label}</div>
      <p style={{ fontSize: 14, color: "var(--v-muted)", lineHeight: 1.7 }}>{text}</p>
    </div>
  );
}
