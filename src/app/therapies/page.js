import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from "lucide-react";
import Media from "@/components/Media";
import TherapyCard from "@/components/TherapyCard";
import TestimonialCard from "@/components/TestimonialCard";
import Carousel from "@/components/v/Carousel";
import Accordion from "@/components/v/Accordion";
import WaveDivider from "@/components/v/WaveDivider";
import ScrollLines from "@/components/v/ScrollLines";
import CtaBand from "@/components/v/CtaBand";
import { therapies, featuredTherapies } from "@/data/therapies";
import { categories, getCategory } from "@/data/categories";
import { concernMap } from "@/data/concerns";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Our Programs | 30+ Integrative Wellness Treatments — The Wellness Co.",
  description: "Explore 30+ USFDA, CE and MFDS-certified wellness therapies across six categories — from IV drip therapy and cryotherapy to genetic diagnostics and face wellness.",
};

const steps = [
  ["Consult", "A doctor reviews your goals, history and, where relevant, your diagnostics before any therapy begins."],
  ["Protocol", "A written plan you leave with — therapies, frequency and expected outcomes, in plain language."],
  ["Follow Through", "Scheduled check-ins with the same team, so nothing about your progress is left hanging."],
];

const gallery = [
  { image: "therapy-cryo", title: "Doctor-Reviewed, Always", caption: "Every protocol is signed off by our Medical Advisory Board before it reaches you." },
  { image: "clinic-interior-treatment-room", title: "One Clinical Standard", caption: "The same equipment and training at every one of our 14 clinics." },
  { image: "therapy-iv", title: "Built Around You", caption: "Personalised pacing — not a fixed, one-size-fits-all program." },
];

const hubFaqs = [
  { q: "How do I choose between similar therapies?", a: "Start with a category above, or book a consultation — our doctors will recommend a protocol from your goals and, where relevant, your diagnostics." },
  { q: "Are these therapies available at every clinic?", a: "Most core therapies are available at all 14 clinics. Specialised equipment is concentrated in select locations — each therapy page lists exactly where it's offered." },
  { q: "Can therapies be combined into a program?", a: "Yes — many clients combine therapies across categories, for example IV therapy with cryotherapy, into a single sequenced plan." },
];

export default async function TherapiesHub({ searchParams }) {
  const sp = (await searchParams) || {};
  const activeCategory = sp.category;
  const activeConcern = sp.concern;
  const filtering = Boolean(activeCategory || activeConcern);

  let list = [];
  let heading = "";
  if (activeCategory) {
    const cat = getCategory(activeCategory);
    list = therapies.filter((t) => t.categories.includes(activeCategory));
    heading = cat?.name || "";
  } else if (activeConcern && concernMap[activeConcern]) {
    list = therapies.filter((t) => concernMap[activeConcern].includes(t.slug));
    heading = `For ${activeConcern}`;
  }

  const featured = featuredTherapies.slice(0, 3);

  return (
    <div style={{ background: "var(--v-cream)" }}>

      {/* ============ HERO — full-bleed photo, wave bottom ============ */}
      <section className="position-relative d-flex align-items-center overflow-hidden" style={{ minHeight: "74vh" }}>
        <Media imgKey="category-recovery-performance" alt="" className="position-absolute top-0 start-0 w-100 h-100" priority />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.7)" }} />
        <Container className="position-relative text-center py-5">
          <ScrollLines
            as="h1"
            lines={filtering ? [heading] : ["Programs built for", "real transformation."]}
            className="font-display twc-therapies-h1 text-white mx-auto"
          />
          <p className="mt-4 mx-auto" style={{ fontSize: 16, maxWidth: 560, color: "rgba(255,255,255,0.75)" }}>
            {filtering
              ? `${list.length} therapies matched — filter by another category, or book a consultation to narrow it down.`
              : "Six clinical categories under one roof, delivered by teams who share your records and your protocol — so nothing has to be explained twice."}
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <Link href="/contact" className="v-btn v-btn-accent">Book Consultation<span className="chip"><ArrowUpRight size={16} /></span></Link>
            {filtering && (
              <Link href="/therapies" className="v-btn v-btn-white">View All Categories<span className="chip"><ArrowUpRight size={16} /></span></Link>
            )}
          </div>
        </Container>
      </section>
      <WaveDivider fill="var(--v-cream)" />

      {filtering ? (
        <section className="py-5">
          <Container>
            <Row className="g-4">
              {list.map((t) => <Col key={t.slug} sm={6} lg={4}><TherapyCard therapy={t} /></Col>)}
            </Row>
          </Container>
        </section>
      ) : (
        <>
          {/* ============ CATEGORIES ============ */}
          <section className="py-5">
            <Container>
              <div className="v-eyebrow"><span className="dot" />What We Treat</div>
              <h2 className="v-h-lg" style={{ maxWidth: 560 }}>Six categories, one connected team.</h2>
              <div className="v-bento on-cream row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-0 mt-4">
                {categories.map((c, i) => (
                  <Link key={c.slug} href={`/therapies?category=${c.slug}`} className="d-block text-decoration-none text-reset twc-cat-link">
                    <div className="d-flex justify-content-between align-items-start">
                      <h4 className="fw-medium" style={{ fontSize: 17, maxWidth: 180 }}>{c.name}</h4>
                      <span className="font-display" style={{ fontSize: 15, color: "var(--v-muted-2)" }}>0{i + 1}</span>
                    </div>
                    <p className="small mt-4" style={{ color: "var(--v-muted)" }}>{c.description}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>

          {/* ============ WHY IT WORKS — staggered photo gallery ============ */}
          <section className="py-4">
            <Container>
              <div className="v-eyebrow"><span className="dot" />Why It Works</div>
              <h2 className="v-h-lg" style={{ maxWidth: 560 }}>Built like medicine, not a menu.</h2>
              <p className="v-lede mt-3" style={{ maxWidth: 520 }}>Every program sits on the same three principles, whichever category you start from.</p>
              <Row className="g-4 mt-4">
                <Col sm={6} className="d-flex flex-column gap-4">
                  <GalleryTile item={gallery[0]} />
                  <GalleryTile item={gallery[2]} className="mt-sm-4" />
                </Col>
                <Col sm={6} className="mt-sm-5 pt-sm-3">
                  <GalleryTile item={gallery[1]} />
                </Col>
              </Row>
            </Container>
          </section>

          {/* ============ FEATURED PROGRAMS ============ */}
          <section className="py-5">
            <Container>
              <div className="v-eyebrow"><span className="dot" />Featured Programs</div>
              <h2 className="v-h-lg" style={{ maxWidth: 560 }}>Start with what people ask for most.</h2>
              <Row className="g-4 mt-4">
                {featured.map((t) => (
                  <Col sm={6} lg={4} key={t.slug}>
                    <Link href={`/therapies/${t.slug}`} className="d-block text-decoration-none text-reset twc-cat-tile rounded overflow-hidden" style={{ borderRadius: "var(--v-radius-card)", background: "var(--v-white)" }}>
                      <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                        <Media imgKey={t.image} alt={t.name} />
                      </div>
                      <div className="p-4">
                        <h4 className="font-display" style={{ fontSize: 20 }}>{t.name}</h4>
                        <p className="small mt-2" style={{ color: "var(--v-muted)" }}>{t.oneLiner}</p>
                        <div className="v-btn v-btn-dark w-100 justify-content-center mt-4">
                          View Details<span className="chip"><ArrowUpRight size={14} /></span>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </>
      )}

      {/* ============ HOW CARE WORKS ============ */}
      <section className="py-5" style={{ background: "var(--v-cream)" }}>
        <Container>
          <div className="v-eyebrow mx-auto" style={{ width: "fit-content" }}><span className="dot" />How Care Works</div>
          <h2 className="v-h-lg text-center mx-auto" style={{ maxWidth: 560 }}>The same three steps, whichever therapy you need.</h2>
          <Row className="g-4 mt-4">
            {steps.map(([t, d], i) => (
              <Col sm={4} key={t} className="text-center px-3">
                <div className="font-display" style={{ fontSize: 15, color: "var(--v-muted-2)" }}>0{i + 1}</div>
                <div className="mx-auto my-3" style={{ width: 28, height: 1, background: "var(--v-accent-deep)" }} />
                <h4 className="fw-medium" style={{ fontSize: 17 }}>{t}</h4>
                <p className="small mt-2" style={{ color: "var(--v-muted)" }}>{d}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ============ TESTIMONIALS — carousel ============ */}
      <section className="py-5" style={{ background: "var(--v-ink)" }}>
        <Container>
          <div className="v-eyebrow on-ink"><span className="dot" />What Clients Say</div>
          <h2 className="v-h-lg text-white mb-4" style={{ maxWidth: 560 }}>Real results, in their words.</h2>
          <Carousel dark>
            {testimonials.slice(0, 6).map((t, i) => (
              <div key={i} className="flex-shrink-0 p-4" style={{ width: 320, background: "#000", borderRadius: "var(--v-radius-card)", scrollSnapAlign: "start" }}>
                <TestimonialCard testimonial={t} dark />
              </div>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col lg={5}>
              <div className="v-eyebrow"><span className="dot" />FAQ</div>
              <h2 className="v-h-lg">Choosing the right programme.</h2>
            </Col>
            <Col lg={7}>
              <Accordion items={hubFaqs} />
            </Col>
          </Row>
        </Container>
      </section>

      <CtaBand />
    </div>
  );
}

function GalleryTile({ item, className = "" }) {
  return (
    <div className={className}>
      <div className="v-card-photo overflow-hidden" style={{ aspectRatio: "4/5" }}><Media imgKey={item.image} alt={item.title} /></div>
      <h4 className="fw-medium mt-3" style={{ fontSize: 16 }}>{item.title}</h4>
      <p className="small mt-2" style={{ color: "var(--v-muted)", maxWidth: 280 }}>{item.caption}</p>
    </div>
  );
}
