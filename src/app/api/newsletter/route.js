import { Resend } from "resend";
import { site } from "@/data/site";

// Same pattern as /api/contact — set RESEND_API_KEY in .env.local to start
// actually emailing signups; until then they're logged server-side so
// nothing is silently lost.
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

  const { email } = body || {};
  if (!email || !email.includes("@")) {
    return Response.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }

  if (!resendApiKey) {
    console.log(`[newsletter] RESEND_API_KEY not set — logging signup instead of emailing: ${email}`);
    return Response.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "New newsletter signup — thewellnessco.in",
      text: `New newsletter signup: ${email}`,
    });
    return Response.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[newsletter] Failed to send:", err);
    return Response.json({ ok: false, error: "Could not process that right now." }, { status: 502 });
  }
}
