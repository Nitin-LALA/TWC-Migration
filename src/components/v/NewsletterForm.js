"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ArrowUpRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="d-flex align-items-center gap-2 text-white">
        <Check size={18} style={{ color: "var(--v-accent)" }} />
        <span style={{ fontSize: 14.5 }}>You&apos;re on the list — thank you.</span>
      </div>
    );
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex align-items-center gap-2 w-100" style={{ maxWidth: 420 }}>
      <Form.Control
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="twc-newsletter-input"
      />
      <Button type="submit" disabled={status === "sending"} className="v-btn v-btn-accent v-btn-sm border-0" style={{ opacity: status === "sending" ? 0.6 : 1 }}>
        Subscribe
        <span className="chip"><ArrowUpRight size={14} /></span>
      </Button>
    </Form>
  );
}
