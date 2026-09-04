import Link from "next/link";
import { site } from "@/data/site";

export const metadata = { title: "Terms & Conditions | The Wellness Co." };

const sections = [
  {
    h: "1. Acceptance of Terms",
    p: [
      "These Terms & Conditions (\"Terms\") govern your use of the thewellnessco.in website and your engagement with any therapy, consultation, program or service offered by The Wellness Co. at its clinics or the Retreat (together, \"Services\"). By browsing this website, booking a consultation, or receiving a Service, you agree to be bound by these Terms.",
      "If you do not agree with any part of these Terms, please do not use this website or book a Service.",
    ],
  },
  {
    h: "2. Nature of Our Services",
    p: [
      "The Wellness Co. offers integrative wellness, recovery, diagnostic, aesthetic and longevity-focused therapies delivered under the supervision of our Medical Advisory Board and certified clinical staff. Our Services are wellness and preventive-care oriented and are not a substitute for emergency medical care.",
      "If you are experiencing a medical emergency, please contact a hospital or emergency service immediately rather than a The Wellness Co. clinic.",
    ],
  },
  {
    h: "3. Medical Disclaimer",
    p: [
      "All therapies are administered by trained professionals under protocols reviewed by our clinical team. However, individual results vary, and no specific outcome is guaranteed for any therapy, program or diagnostic service described on this website.",
      "You are responsible for disclosing your complete and accurate medical history, current medications and any relevant health conditions during your consultation. The Wellness Co. reserves the right to decline or modify a Service where a health condition, disclosed or discovered, makes it unsafe to proceed.",
      "Content on this website — including therapy descriptions, blog articles and FAQs — is provided for general informational purposes only and does not constitute individual medical advice. Always consult your consultation doctor before beginning or changing any wellness protocol.",
    ],
  },
  {
    h: "4. Appointments, Cancellations & Rescheduling",
    p: [
      "Appointments can be booked through this website, by phone, or via WhatsApp. We recommend booking in advance to guarantee therapist and equipment availability.",
      "We request at least 4 hours' notice for cancellations or rescheduling. Repeated late cancellations or no-shows may affect future booking priority at a given clinic.",
      "Walk-ins are accommodated where the day's schedule allows, but appointments take priority.",
    ],
  },
  {
    h: "5. Payments & Pricing",
    p: [
      "Pricing for individual therapies, packages and programs is confirmed at the time of consultation or booking and may vary by clinic, city and formulation (for example, IV therapy blends). Prices displayed on this website, where shown, are indicative and subject to change without prior notice.",
      "Payment is due at the time of service unless a package or program has been pre-purchased. Package and program refund eligibility will be communicated in writing at the time of purchase.",
    ],
  },
  {
    h: "6. Client Eligibility & Conduct",
    p: [
      "Certain therapies carry age, pregnancy, or health-condition restrictions, which will be discussed during your consultation. The Wellness Co. reserves the right to refuse service where a therapy is contraindicated for a client's disclosed health status.",
      "Clients are expected to treat clinic staff and other clients respectfully. The Wellness Co. reserves the right to refuse or discontinue service in cases of abusive or unsafe conduct.",
    ],
  },
  {
    h: "7. Intellectual Property",
    p: [
      "All content on this website — including text, therapy descriptions, images, logos and the \"The Wellness Co.\" name and mark — is the property of The Wellness Co. or its licensors and may not be reproduced, distributed or used commercially without prior written consent.",
    ],
  },
  {
    h: "8. Limitation of Liability",
    p: [
      "To the maximum extent permitted by applicable Indian law, The Wellness Co. shall not be liable for indirect, incidental or consequential damages arising from your use of this website or receipt of a Service, except where such liability arises from our negligence or wilful misconduct.",
      "Nothing in these Terms limits any liability that cannot be excluded or limited under applicable Indian consumer protection or healthcare law.",
    ],
  },
  {
    h: "9. Governing Law",
    p: [
      "These Terms are governed by the laws of India. Any disputes arising out of these Terms or your use of our Services shall be subject to the exclusive jurisdiction of the courts at New Delhi, India.",
    ],
  },
  {
    h: "10. Changes to These Terms",
    p: [
      "We may update these Terms from time to time to reflect changes in our Services or applicable law. The updated Terms will be posted on this page with a revised effective date.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-v-cream">
    <section className="v-section-tight">
      <div className="v-shell max-w-[760px]">
        <div className="v-eyebrow"><span className="dot" />Legal</div>
        <h1 className="v-h-lg">Terms &amp; Conditions</h1>
        <p className="text-v-muted mt-4 text-[13.5px]">Effective date: 1 September 2026</p>

        <div className="bg-v-white border border-[var(--v-line)] rounded-[var(--v-radius-card)] p-6 mt-8">
          <p className="text-[13.5px] text-v-muted">
            <b className="text-v-text">Draft for legal review.</b> This is a working draft covering the
            standard terms a multi-location wellness clinic needs — service scope, medical
            disclaimers, cancellation policy, liability and governing law. Please have it reviewed
            by qualified Indian legal counsel before publishing, particularly the medical disclaimer
            and liability clauses, which should reflect your specific clinical protocols and insurance
            coverage.
          </p>
        </div>

        <div className="mt-10 space-y-9">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="v-h-md">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="text-v-muted mt-3 leading-relaxed">{para}</p>
              ))}
            </div>
          ))}

          <div>
            <h2 className="v-h-md">11. Contact</h2>
            <p className="text-v-muted mt-3 leading-relaxed">
              Questions about these Terms can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-v-ink underline">{site.email}</a> or{" "}
              {site.phone}. See also our <Link href="/privacy" className="text-v-ink underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
