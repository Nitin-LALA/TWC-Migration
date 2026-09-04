import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import { MapPin, Clock, Phone, ArrowLeft, ArrowUpRight } from "lucide-react";
import Media from "@/components/Media";
import Accordion from "@/components/v/Accordion";
import CtaBand from "@/components/v/CtaBand";
import TestimonialCard from "@/components/TestimonialCard";
import Avatar from "@/components/Avatar";
import { locations, getLocation, getLocationsByCity } from "@/data/locations";
import { testimonials } from "@/data/testimonials";
import { localExperts } from "@/data/team";
import { site } from "@/data/site";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return {
    title: `The Wellness Co. — ${l.name}, ${l.city} | Book a Visit`,
    description: l.about || `Visit The Wellness Co. in ${l.name}, ${l.city} for integrative wellness therapies, IV drips, cryotherapy and more.`,
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();
  const nearby = getLocationsByCity(l.city).filter((n) => n.slug !== l.slug).slice(0, 3);
  const expert = localExperts.find((e) => e.location.includes(l.name));
  const testimonial = testimonials[2];
  const localFaqs = [
    { q: `Is parking available at the ${l.name} clinic?`, a: "Street or building parking is typically available; details are shared upon booking confirmation." },
    { q: "Do you accept walk-ins at this location?", a: "Appointments are recommended to guarantee therapist availability; walk-ins are accommodated based on the day's schedule." },
    { q: "What are the clinic's operating hours?", a: `${l.hours}.` },
  ];

  return (
    <div style={{ background: "var(--v-cream)" }}>

      <section className="py-5 pb-3">
        <Container>
          <Link href="/locations" className="d-inline-flex align-items-center gap-2 mb-4 twc-back-link" style={{ fontSize: 13.5, color: "var(--v-muted)" }}>
            <ArrowLeft size={14} /> All Locations
          </Link>

          <Row className="align-items-center g-4">
            <Col lg={6}>
              <div className="v-eyebrow"><span className="dot" />{l.region}</div>
              <h1 className="v-h-xl">{l.name}</h1>
              <div className="d-flex flex-column gap-3 mt-4">
                <MetaRow icon={<MapPin size={16} />} label="Address" value={l.address} />
                <MetaRow icon={<Clock size={16} />} label="Hours" value={l.hours} />
                <MetaRow icon={<Phone size={16} />} label="Direct Line" value={l.phone} />
              </div>
              <div className="d-flex gap-3 flex-wrap mt-4">
                <Link href="/contact" className="v-btn v-btn-accent">Book At {l.name}<span className="chip"><ArrowUpRight size={16} /></span></Link>
                <a href={`https://wa.me/${site.whatsapp}`} className="v-btn v-btn-dark">WhatsApp<span className="chip"><ArrowUpRight size={16} /></span></a>
              </div>
              {!l.verified && !l.isRetreat && (
                <p className="fst-italic mt-4" style={{ fontSize: 12, color: "var(--v-muted)" }}>Full address on file — confirmed at time of booking.</p>
              )}
            </Col>
            <Col lg={6}>
              <div className="v-card-photo" style={{ aspectRatio: "4/3" }}><Media imgKey={l.image} alt={`${l.name} clinic interior`} /></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <h2 className="v-h-md">About this location</h2>
              <p className="mt-3" style={{ color: "var(--v-muted)", lineHeight: 1.7 }}>{l.about || `Our ${l.name} clinic brings The Wellness Co.'s full clinical standard to ${l.city} — the same protocols, technology and doctor oversight as every other location.`}</p>
            </Col>
            <Col lg={6}>
              <h2 className="v-h-md">Therapies available here</h2>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {l.therapiesAvailable.map((t) => (
                  <span key={t} className="px-3 py-2 rounded-pill" style={{ background: "var(--v-white)", border: "1px solid var(--v-line)", fontSize: 12.5 }}>{t}</span>
                ))}
                <Link href="/therapies" className="px-3 py-2 rounded-pill text-decoration-none" style={{ background: "var(--v-white)", border: "1px solid var(--v-line)", fontSize: 12.5, color: "var(--v-ink)" }}>+ Full catalogue</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {expert && (
        <section className="py-5" style={{ background: "var(--v-ink)" }}>
          <Container className="d-flex align-items-center gap-3">
            <Avatar initials={expert.initials} name={expert.name} size={52} />
            <div>
              <div className="text-uppercase fw-semibold" style={{ fontSize: 11, letterSpacing: "0.05em", color: "var(--v-accent)" }}>Expert At This Location</div>
              <h4 className="font-display text-white mt-1" style={{ fontSize: 18 }}>{expert.name} — {expert.role}</h4>
              <div className="mt-1" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{expert.note}</div>
            </div>
          </Container>
        </section>
      )}

      <section className="py-5">
        <Container style={{ maxWidth: 640 }}>
          <div className="v-eyebrow"><span className="dot" />Reviews</div>
          <TestimonialCard testimonial={testimonial} />
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="v-eyebrow"><span className="dot" />Local FAQs</div>
              <h2 className="v-h-lg">Visiting {l.name}.</h2>
            </Col>
            <Col lg={7}>
              <Accordion items={localFaqs} />
            </Col>
          </Row>
        </Container>
      </section>

      {nearby.length > 0 && (
        <section className="pb-5">
          <Container>
            <div className="v-eyebrow"><span className="dot" />Nearby</div>
            <div className="d-flex flex-wrap gap-3">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/locations/${n.slug}`} className="px-3 py-2 rounded-pill text-decoration-none twc-city-pill" style={{ fontSize: 13 }}>{n.name}</Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand title={`Book your ${l.name} appointment in under a minute.`} secondaryLabel="View All Locations" secondaryHref="/locations" />
    </div>
  );
}

function MetaRow({ icon, label, value }) {
  return (
    <div className="d-flex gap-3 align-items-start" style={{ fontSize: 14.5 }}>
      <span className="mt-1 flex-shrink-0" style={{ color: "var(--v-ink)" }}>{icon}</span>
      <div>
        <span className="d-block text-uppercase fw-semibold mb-1" style={{ fontSize: 10.5, letterSpacing: "0.05em", color: "var(--v-muted)" }}>{label}</span>
        {value}
      </div>
    </div>
  );
}
