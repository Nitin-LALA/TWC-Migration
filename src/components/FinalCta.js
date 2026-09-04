import Link from "next/link";
import { site } from "@/data/site";

export default function FinalCta({
  eyebrow = "Ready When You Are",
  title = "Your body has been telling you something.",
  emphasis = "Let's actually listen.",
  primaryLabel = "Book Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Find a Clinic",
  secondaryHref = "/locations",
}) {
  return (
    <div className="panel panel-forest panel-pad text-center">
      <div className="eyebrow on-dark mx-auto"><span className="dot" />{eyebrow}</div>
      <h2 className="h-lg max-w-[640px] mx-auto text-cream">
        {title} <span className="it text-cream/80">{emphasis}</span>
      </h2>
      <div className="flex justify-center gap-3 mt-9 flex-wrap">
        <Link href={primaryHref} className="btn btn-invert">{primaryLabel}</Link>
        <Link href={secondaryHref} className="btn btn-outline-dark">{secondaryLabel}</Link>
      </div>
    </div>
  );
}
