import { site } from "@/data/site";

export const metadata = { title: "Privacy Policy | The Wellness Co." };

const sections = [
  {
    h: "1. What This Policy Covers",
    p: [
      "This Privacy Policy explains how The Wellness Co. (\"we\", \"us\") collects, uses, stores and protects your personal information when you visit thewellnessco.in, book a consultation, or receive a Service at one of our clinics or the Retreat.",
    ],
  },
  {
    h: "2. Information We Collect",
    p: [
      "Contact details: name, phone number, email address and preferred city, collected when you submit our contact form, book a consultation, or message us via WhatsApp or phone.",
      "Health-related information: medical history, current medications, allergies and health goals shared during a consultation, used solely to design and deliver a safe, appropriate protocol for you.",
      "Website usage data: standard analytics such as pages visited and general location (city/country level), collected to understand how visitors use this website and to improve it.",
    ],
  },
  {
    h: "3. How We Use Your Information",
    p: [
      "To schedule and confirm consultations and appointments.",
      "To design and deliver your wellness protocol, and to have our clinical team review your health information before a therapy is administered.",
      "To respond to enquiries submitted through this website, WhatsApp or phone.",
      "To send appointment reminders and, where you've opted in, occasional updates about new therapies, locations or offers.",
      "To improve this website and our Services.",
    ],
  },
  {
    h: "4. How Your Information Is Shared",
    p: [
      "Health and contact information is shared internally only with the clinical and administrative staff directly involved in your care.",
      "We do not sell your personal information to third parties.",
      "We may share limited information with service providers who help us operate — for example, the email or messaging providers used to route enquiries, and website analytics providers — under confidentiality obligations.",
      "We may disclose information where required by Indian law or a valid legal request.",
    ],
  },
  {
    h: "5. Data Retention",
    p: [
      "We retain consultation and health-related records for as long as necessary to provide ongoing care, meet our clinical record-keeping obligations under Indian law, and resolve any disputes. Contact-form enquiries that do not convert to a booking are retained only as long as needed to respond to your enquiry.",
    ],
  },
  {
    h: "6. Cookies",
    p: [
      "This website may use essential cookies required for basic functionality, and analytics cookies to understand aggregate visitor behaviour. You can control cookies through your browser settings; disabling them may affect some website features.",
    ],
  },
  {
    h: "7. Data Security",
    p: [
      "We use reasonable administrative and technical safeguards to protect your personal and health information from unauthorised access, consistent with the sensitivity of health-related data. No method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    h: "8. Your Rights",
    p: [
      "Under India's Digital Personal Data Protection Act, 2023 and applicable rules, you have the right to access, correct, or request deletion of your personal data held by us, and to withdraw consent for optional communications at any time.",
      `To exercise these rights, contact us at ${site.email} or ${site.phone}.`,
    ],
  },
  {
    h: "9. Children's Privacy",
    p: [
      "Our Services are intended for adults. Where a minor requires a Service, this is arranged through and consented to by a parent or legal guardian, whose contact details are used for booking and communication.",
    ],
  },
  {
    h: "10. Changes to This Policy",
    p: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated policy will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-v-cream">
    <section className="v-section-tight">
      <div className="v-shell max-w-[760px]">
        <div className="v-eyebrow"><span className="dot" />Legal</div>
        <h1 className="v-h-lg">Privacy Policy</h1>
        <p className="text-v-muted mt-4 text-[13.5px]">Effective date: 1 September 2026</p>

        <div className="bg-v-white border border-[var(--v-line)] rounded-[var(--v-radius-card)] p-6 mt-8">
          <p className="text-[13.5px] text-v-muted">
            <b className="text-v-text">Draft for legal review.</b> This draft covers the standard
            disclosures expected under India's Digital Personal Data Protection Act, 2023 for a
            business handling health-related data. Please have it reviewed by qualified counsel —
            in particular, appoint and name a Grievance Officer / Data Protection Officer contact
            below before publishing, as required under the Act.
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
            <h2 className="v-h-md">11. Grievance Officer</h2>
            <p className="text-v-muted mt-3 leading-relaxed">
              [Name to be appointed], The Wellness Co. — reachable at{" "}
              <a href={`mailto:${site.email}`} className="text-v-ink underline">{site.email}</a> or {site.phone}, for any
              privacy-related complaints or requests.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
