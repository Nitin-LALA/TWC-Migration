import { Container, Row, Col } from "react-bootstrap";
import { Phone, Mail, MapPin, Newspaper } from "lucide-react";
import Media from "@/components/Media";
import ContactForm from "@/components/ContactForm";
import Accordion from "@/components/v/Accordion";
import WaveDivider from "@/components/v/WaveDivider";
import ScrollLines from "@/components/v/ScrollLines";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us | Schedule a Free Consultation — The Wellness Co.",
  description: "Get in touch with The Wellness Co.'s wellness experts. Call, WhatsApp, or fill out our form to schedule a free consultation at your nearest clinic.",
};

const reasons = [
  { icon: <Phone size={18} />, title: "General Enquiries", desc: "Questions about therapies, protocols or your first visit.", contact: site.tollFree, image: "clinic-interior-reception" },
  { icon: <Newspaper size={18} />, title: "Press & Media", desc: "Media requests, interviews and partnership features.", contact: site.email, image: "hero-about" },
  { icon: <Mail size={18} />, title: "Membership Support", desc: "Existing clients — reschedule, billing, or protocol questions.", contact: site.email, image: "clinic-interior-treatment-room" },
  { icon: <MapPin size={18} />, title: "Visit Our Studio", desc: "Find your nearest clinic and walk-in hours.", contact: "14 clinics · 8 cities", image: "therapy-cryo" },
];

const contactFaqs = [
  { q: "Is the consultation free?", a: "Yes — the initial consultation to understand your goals and recommend a protocol is complimentary." },
  { q: "How quickly will I hear back?", a: "Our team typically responds within a few hours during clinic operating hours." },
  { q: "Can I reach a specific clinic directly?", a: "Yes — every clinic's direct line and email is listed on its individual location page." },
];

export default function ContactPage() {
  return (
    <div style={{ background: "var(--v-cream)" }}>

      {/* ============ HERO ============ */}
      <section className="position-relative d-flex align-items-center overflow-hidden" style={{ minHeight: "50vh" }}>
        <Media imgKey="hero-home" alt="" className="position-absolute top-0 start-0 w-100 h-100" priority />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.6)" }} />
        <Container className="position-relative text-center py-5">
          <ScrollLines as="h1" lines={["Let's connect."]} className="font-display text-white twc-contact-h1" />
        </Container>
      </section>
      <WaveDivider fill="var(--v-cream)" />

      {/* ============ INTRO ============ */}
      <section className="py-5">
        <Container className="text-center">
          <div className="v-eyebrow mx-auto"><span className="dot" />Get In Touch</div>
          <h2 className="v-h-lg mx-auto" style={{ maxWidth: 640 }}>Wellness begins with a conversation.</h2>
          <p className="v-lede mx-auto mt-3">Request a consultation below, or reach the clinic directly. {site.hours}.</p>
        </Container>
      </section>

      {/* ============ REASONS + FORM ============ */}
      <section className="pb-5">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <Row className="g-4">
                {reasons.map((r) => (
                  <Col sm={6} key={r.title}>
                    <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 40, height: 40, background: "var(--v-ink-tint)", color: "var(--v-ink)" }}>{r.icon}</div>
                    <h4 className="fw-medium" style={{ fontSize: 15.5 }}>{r.title}</h4>
                    <p className="small mt-2" style={{ color: "var(--v-muted)" }}>{r.desc}</p>
                    <p className="fw-medium small mt-2">{r.contact}</p>
                    <div className="v-card-photo mt-3" style={{ aspectRatio: "4/3" }}><Media imgKey={r.image} alt="" /></div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={6}>
              <div className="p-4 p-sm-5" style={{ background: "var(--v-white)", border: "1px solid var(--v-line)", borderRadius: "var(--v-radius-card)" }}>
                <h3 className="v-h-md">Schedule an appointment</h3>
                <p className="mt-3 mb-4" style={{ fontSize: 14.5, color: "var(--v-muted)" }}>Complete the form below and our team will contact you to confirm.</p>
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-5" style={{ background: "var(--v-ink)" }}>
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="v-eyebrow on-ink"><span className="dot" />FAQ</div>
              <h2 className="v-h-lg text-white">Before you reach out.</h2>
            </Col>
            <Col lg={7}>
              <Accordion items={contactFaqs} dark />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
