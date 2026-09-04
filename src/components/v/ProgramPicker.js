"use client";

import { useState } from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Media from "@/components/Media";

export default function ProgramPicker({ items }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <Row className="align-items-center g-5">
      <Col lg={6}>
        {items.map((item, i) => {
          const isOpen = active === i;
          return (
            <div key={item.name} className="v-divider">
              <button
                onClick={() => setActive(i)}
                className="w-100 text-start bg-transparent border-0 py-4"
                style={{ cursor: "pointer" }}
              >
                <span className="fw-medium d-block" style={{ fontSize: 22, color: isOpen ? "var(--v-text)" : "var(--v-muted-2)", transition: "color 0.2s" }}>
                  {item.name}
                </span>
                <div className="overflow-hidden" style={{ maxHeight: isOpen ? 140 : 0, transition: "max-height 0.3s" }}>
                  <p className="mt-3 small" style={{ color: "var(--v-muted)", maxWidth: 440 }}>{item.oneLiner}</p>
                  <Link href={item.href} className="v-btn-text mt-3 d-inline-flex" style={{ color: "var(--v-text)" }}>
                    Explore therapy →
                  </Link>
                </div>
              </button>
            </div>
          );
        })}
      </Col>
      <Col lg={6}>
        <div className="position-relative v-card-photo overflow-hidden w-100" style={{ aspectRatio: "1/1" }}>
          <Media imgKey={current.image} alt={current.name} />
        </div>
      </Col>
    </Row>
  );
}
