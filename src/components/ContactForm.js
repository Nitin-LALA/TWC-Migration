"use client";

import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
import { cities } from "@/data/locations";
import { categories } from "@/data/categories";
import { site } from "@/data/site";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [values, setValues] = useState({ name: "", phone: "", email: "", city: "", interest: "", message: "" });

  function update(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-4">
        <CheckCircle2 className="mx-auto" size={36} style={{ color: "var(--v-ink)" }} />
        <h3 className="font-display mt-3" style={{ fontSize: 22 }}>Thank you — we&apos;ve got your details.</h3>
        <p className="mt-2" style={{ fontSize: 14.5, color: "var(--v-text-soft)" }}>Our wellness experts will reach out shortly to confirm your consultation.</p>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
      <Row className="g-4">
        <Col sm={6}><Field label="Full Name" required value={values.name} onChange={update("name")} /></Col>
        <Col sm={6}><Field label="Phone Number" required type="tel" value={values.phone} onChange={update("phone")} /></Col>
      </Row>
      <Field label="Email" type="email" value={values.email} onChange={update("email")} />
      <Row className="g-4">
        <Col sm={6}><SelectField label="Preferred City" value={values.city} onChange={update("city")} options={cities} required /></Col>
        <Col sm={6}><SelectField label="What Are You Interested In?" value={values.interest} onChange={update("interest")} options={categories.map((c) => c.name)} /></Col>
      </Row>
      <TextArea label="Anything else we should know?" value={values.message} onChange={update("message")} />

      {status === "error" && (
        <div className="d-flex align-items-start gap-2 px-3 py-3 rounded" style={{ fontSize: 13, color: "var(--v-ink-deep)", background: "var(--v-ink-tint)" }}>
          <AlertCircle size={16} className="flex-shrink-0 mt-1" />
          <span>
            Something went wrong sending that. Please try again, or reach us directly on{" "}
            <a href={`https://wa.me/${site.whatsapp}`} className="fw-medium" style={{ color: "inherit", textDecoration: "underline" }}>WhatsApp</a> or {site.phone}.
          </span>
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="v-btn v-btn-dark w-100 justify-content-center border-0" style={{ opacity: status === "sending" ? 0.6 : 1 }}>
        {status === "sending" ? "Sending…" : "Schedule Your Consultation"}
        <span className="chip"><ArrowUpRight size={16} /></span>
      </button>
      <p className="text-center mb-0" style={{ fontSize: 12, color: "var(--v-muted)" }}>
        Prefer to message directly? <a href={`https://wa.me/${site.whatsapp}`} style={{ color: "inherit", textDecoration: "underline" }}>WhatsApp us</a> instead.
      </p>
    </Form>
  );
}

function Field({ label, required, type = "text", value, onChange }) {
  return (
    <Form.Group>
      <Form.Label className="fw-medium mb-2" style={{ fontSize: 12.5, color: "var(--v-text-soft)" }}>{label}{required && " *"}</Form.Label>
      <Form.Control type={type} required={required} value={value} onChange={onChange} className="twc-form-input" />
    </Form.Group>
  );
}

function SelectField({ label, options, value, onChange, required }) {
  return (
    <Form.Group>
      <Form.Label className="fw-medium mb-2" style={{ fontSize: 12.5, color: "var(--v-text-soft)" }}>{label}{required && " *"}</Form.Label>
      <Form.Select required={required} value={value} onChange={onChange} className="twc-form-input">
        <option value="">— Choose an option —</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}

function TextArea({ label, value, onChange }) {
  return (
    <Form.Group>
      <Form.Label className="fw-medium mb-2" style={{ fontSize: 12.5, color: "var(--v-text-soft)" }}>{label}</Form.Label>
      <Form.Control as="textarea" rows={3} value={value} onChange={onChange} className="twc-form-input" style={{ resize: "none" }} />
    </Form.Group>
  );
}
