import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import LocationCard from "@/components/LocationCard";
import TestimonialCard from "@/components/TestimonialCard";
import Accordion from "@/components/v/Accordion";
import ScrollLines from "@/components/v/ScrollLines";
import CtaBand from "@/components/v/CtaBand";
import { locations, cities, getLocationsByCity } from "@/data/locations";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Our Locations | 14 Clinics Across 8 Cities — The Wellness Co.",
  description: "Find The Wellness Co. clinic nearest you — Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Ludhiana and Ahmedabad. One clinical standard, every location.",
};

const locationFaqs = [
  { q: "Do all locations offer the same therapies?", a: "Core therapies are available at every clinic. Specialised equipment such as HBOT or genetic screening is concentrated in select locations — each clinic page lists exactly what's on site." },
  { q: "Can I book at a different clinic than my usual one?", a: "Yes — your consultation history travels with you across any The Wellness Co. clinic." },
  { q: "Is walk-in available?", a: "We recommend booking ahead to guarantee therapist availability, though walk-ins are accommodated where the day's schedule allows." },
];

export default async function LocationsHub({ searchParams }) {
  const sp = (await searchParams) || {};
  const activeCity = sp.city;
  const list = activeCity ? getLocationsByCity(activeCity) : locations;

  return (
    <div style={{ background: "var(--v-cream)" }}>

      <section className="py-5 text-center">
        <Container>
          <div className="v-eyebrow mx-auto"><span className="dot" />Find A Clinic Near You</div>
          <ScrollLines as="h1" lines={["14 clinics.", "Every one built the same way."]} className="font-display twc-locations-h1 mx-auto" />
          <p className="v-lede mx-auto mt-4">Whichever city you walk into, the standard of care, the technology and the protocol are identical — only the address changes.</p>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <Link href="/locations" className={`px-3 py-2 rounded-pill twc-city-pill ${!activeCity ? "twc-city-pill-active" : ""}`} style={{ fontSize: 13.5 }}>
              All Cities
            </Link>
            {cities.map((c) => (
              <Link key={c} href={`/locations?city=${encodeURIComponent(c)}`} className={`px-3 py-2 rounded-pill twc-city-pill ${activeCity === c ? "twc-city-pill-active" : ""}`} style={{ fontSize: 13.5 }}>
                {c}
              </Link>
            ))}
          </div>
          <Row className="g-4 mt-4">
            {list.map((l) => <Col sm={6} lg={4} key={l.slug}><LocationCard location={l} /></Col>)}
          </Row>
        </Container>
      </section>

      <section className="py-5" style={{ background: "var(--v-ink)" }}>
        <Container>
          <div className="v-eyebrow on-ink"><span className="dot" />Reviews From Our Clinics</div>
          <h2 className="v-h-lg text-white" style={{ maxWidth: 540 }}>Why clients keep coming back.</h2>
          <Row className="g-4 mt-4">
            {testimonials.slice(6, 9).map((t) => <Col sm={4} key={t.name}><TestimonialCard testimonial={t} dark /></Col>)}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="v-eyebrow"><span className="dot" />FAQ</div>
              <h2 className="v-h-lg">Visiting a clinic.</h2>
            </Col>
            <Col lg={7}>
              <Accordion items={locationFaqs} />
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand secondaryLabel="Explore Programs" secondaryHref="/therapies" />
    </div>
  );
}
