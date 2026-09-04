"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Nav, Button, Offcanvas, Container, Row, Col } from "react-bootstrap";
import { X, ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { therapies } from "@/data/therapies";
import { locations } from "@/data/locations";
import { posts } from "@/data/blog";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/therapies" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <div className="position-sticky twc-header-wrap" style={{ top: "0.75rem", zIndex: 1030 }}>
        <Container>
          <header
            className={`bg-white rounded-pill d-flex align-items-center justify-content-between gap-2 gap-sm-3 ps-2 ps-sm-3 pe-2 pe-sm-3 py-2 py-sm-3 ${scrolled ? "shadow" : "shadow-sm"}`}
          >
            <div className="d-flex align-items-center gap-2 gap-sm-3 min-w-0">
              <Link href="/" className="flex-shrink-0 d-inline-flex" aria-label={site.name}>
                {scrolled ? (
                  <Image src="/logo/icon-w.png" alt={site.name} width={40} height={40} className="twc-header-icon" priority />
                ) : (
                  <Image src="/logo/logo-teal.png" alt={site.name} width={150} height={14} style={{ height: 13, width: "auto" }} priority />
                )}
              </Link>
            </div>

            <Nav className="d-none d-lg-flex align-items-center gap-1">
              {NAV.map((item) => {
                const active = pathname === item.href;
                return (
                  <Nav.Link
                    key={item.label}
                    as={Link}
                    href={item.href}
                    className={`px-3 py-2 rounded-pill fw-medium twc-nav-link ${active ? "twc-nav-link-active" : ""}`}
                  >
                    {item.label}
                  </Nav.Link>
                );
              })}
              <Button variant="link" onClick={() => setMenuOpen(true)} className="px-3 py-2 rounded-pill fw-medium text-decoration-none twc-nav-link">
                More
              </Button>
            </Nav>

            <Button
              variant="light"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="d-lg-none rounded-pill fw-medium twc-menu-btn"
            >
              Menu
            </Button>

            <div className="d-flex align-items-center gap-2 flex-shrink-0">
              <a href={site.phoneHref} aria-label="Call us" className="twc-icon-btn twc-icon-btn-outline">
                <Phone size={16} />
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} aria-label="WhatsApp us" target="_blank" rel="noopener" className="twc-icon-btn twc-icon-btn-whatsapp">
                <WhatsAppIcon size={17} />
              </a>
              <Button as={Link} href="/contact" variant="dark" className="rounded-pill d-none d-sm-inline-flex align-items-center gap-2 twc-btn-contact">
                Contact <ArrowUpRight size={14} />
              </Button>
            </div>
          </header>
        </Container>
      </div>

      <Offcanvas show={menuOpen} onHide={() => setMenuOpen(false)} placement="top" className="twc-mega-menu">
        <Container className="py-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <span className="fs-3 fw-medium">Site map</span>
            <Button variant="light" onClick={() => setMenuOpen(false)} aria-label="Close menu" className="rounded-circle twc-close-btn">
              <X size={20} />
            </Button>
          </div>

          <Row className="gy-5 gx-4 pb-5">
            <MenuCol title="Main Pages" items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Programs", href: "/therapies" },
              { label: "Schedule", href: "/schedule" },
              { label: "Locations", href: "/locations" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ]} onClick={() => setMenuOpen(false)} />

            <MenuCol title="Programs" items={therapies.filter((t) => t.featured).slice(0, 6).map((t) => ({ label: t.name, href: `/therapies/${t.slug}` }))} onClick={() => setMenuOpen(false)} />

            <MenuCol title="Locations" items={[...new Set(locations.map((l) => l.city))].slice(0, 6).map((c) => ({ label: c, href: `/locations?city=${encodeURIComponent(c)}` }))} onClick={() => setMenuOpen(false)} />

            <MenuCol title="Resources" items={[
              ...posts.slice(0, 3).map((p) => ({ label: p.title, href: `/blog/${p.slug}` })),
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
            ]} onClick={() => setMenuOpen(false)} />
          </Row>
        </Container>
      </Offcanvas>
    </>
  );
}

function MenuCol({ title, items, onClick }) {
  return (
    <Col xs={12} sm={6} lg={3}>
      <div className="text-uppercase small fw-semibold text-muted mb-3 twc-eyebrow">{title}</div>
      <ul className="list-unstyled d-flex flex-column gap-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link href={item.href} onClick={onClick} className="text-dark text-decoration-none twc-menu-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Col>
  );
}
