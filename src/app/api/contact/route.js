import { Resend } from "resend";
import { site } from "@/data/site";

// Wire this up by setting RESEND_API_KEY in .env.local (get a free key at
// https://resend.com — no card required for the free tier) and, once your
// sending domain is verified there, updating CONTACT_TO_EMAIL /
// CONTACT_FROM_EMAIL below or via env vars. Until RESEND_API_KEY is set,
// enquiries are still captured in the server log so nothing is lost.
const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
const fromEmail = process.env.CONTACT_FROM_EMAIL || "The Wellness Co. Website <onboarding@resend.dev>";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, city, interest, message } = body || {};

  if (!name || !phone || !city) {
    return Response.json({ ok: false, error: "Name, phone and city are required." }, { status: 400 });
  }

  const summary = [
    `New consultation enquiry from thewellnessco.in`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "—"}`,
    `City: ${city}`,
    `Interested in: ${interest || "—"}`,
    `Message: ${message || "—"}`,
  ].join("\n");

  if (!resendApiKey) {
    console.log("[contact] RESEND_API_KEY not set — logging enquiry instead of emailing:\n" + summary);
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email || undefined,
      subject: `New consultation enquiry — ${name} (${city})`,
      text: summary,
    });
    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return Response.json({ ok: false, error: "Could not send your enquiry right now." }, { status: 502 });
  }
}
