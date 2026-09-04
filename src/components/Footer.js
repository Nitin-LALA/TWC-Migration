import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { site } from "@/data/site";
import { therapies } from "@/data/therapies";
import NewsletterForm from "@/components/v/NewsletterForm";
import Media from "@/components/Media";
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";

const THUMBS = ["therapy-cryo", "therapy-iv", "therapy-hbot", "clinic-interior-reception", "therapy-redlight"];

export default function Footer() {
  const topTherapies = therapies.filter((t) => t.featured).slice(0, 4);

  return (
    <footer className="text-white" style={{ background: "var(--v-ink)" }}>
      <div>
        {/* newsletter band */}
        <Container className="py-5 border-bottom border-secondary-subtle">
          <Row className="align-items-lg-end justify-content-between gy-4">
            <Col lg={6}>
              <div className="text-uppercase small fw-semibold text-white-50 mb-2 twc-eyebrow">Stay In The Loop</div>
              <h2 className="fw-medium" style={{ maxWidth: 440 }}>Stay connected. Stay well.</h2>
            </Col>
            <Col lg={5}>
              <NewsletterForm />
            </Col>
          </Row>
        </Container>

        {/* link directory band */}
        <Container className="py-5">
          <Row className="g-5">
            <Col lg={5}>
              <Image src="/logo/logo-white.png" alt={site.name} width={150} height={15} style={{ height: 15, width: "auto" }} />
              <p className="mt-4 small text-white-50" style={{ maxWidth: 280 }}>
                Integrative wellness and longevity care, delivered like medicine — 14 clinics, 8 cities, one clinical standard.
              </p>
              <p className="mt-4 small text-white-50" style={{ opacity: 0.7 }}>
                Clinics across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Ludhiana &amp; Ahmedabad
              </p>
            </Col>
            <Col xs={6} lg={2}>
              <FootCol title="Company" items={[
                { label: "About", href: "/about" },
                { label: "Locations", href: "/locations" },
                { label: "Contact", href: "/contact" },
              ]} />
            </Col>
            <Col xs={6} lg={2}>
              <FootCol title="Programs" items={topTherapies.map((t) => ({ label: t.name, href: `/therapies/${t.slug}` })).concat([{ label: "View All", href: "/therapies" }])} />
            </Col>
            <Col xs={6} lg={2}>
              <FootCol title="Resources" items={[
                { label: "Blog", href: "/blog" },
                { label: "Schedule", href: "/schedule" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
              ]} />
            </Col>
          </Row>

          <Row className="g-2 mt-5">
            {THUMBS.map((key) => (
              <Col xs={4} sm={true} key={key}>
                <div className="ratio ratio-1x1 rounded overflow-hidden">
                  <Media imgKey={key} alt="" />
                </div>
              </Col>
            ))}
          </Row>

          <Row className="border-top border-secondary-subtle mt-5 pt-4 align-items-center gy-3">
            <Col sm="auto" className="d-flex gap-3">
              <a href={site.instagram} aria-label="Instagram" className="twc-social-btn"><InstagramIcon size={15} /></a>
              <a href={site.facebook} aria-label="Facebook" className="twc-social-btn"><FacebookIcon size={14} /></a>
              <a href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp" className="twc-social-btn"><WhatsAppIcon size={15} /></a>
            </Col>
            <Col sm="auto" className="ms-sm-auto">
              <p className="small text-white-50 mb-0">© 2026 {site.name}. Precision wellness, delivered like medicine.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

function FootCol({ title, items }) {
  return (
    <div>
      <h5 className="small text-uppercase fw-semibold text-white-50 mb-3 twc-eyebrow">{title}</h5>
      <ul className="list-unstyled d-flex flex-column gap-2 small">
        {items.map((item) => (
          <li key={item.label}><Link href={item.href} className="text-white-50 text-decoration-none twc-footer-link">{item.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
