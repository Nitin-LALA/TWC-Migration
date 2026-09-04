import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CtaBand({
  eyebrow = "Ready When You Are",
  title = "Your body has been telling you something.",
  primaryLabel = "Book Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}) {
  return (
    <section className="bg-v-ink v-section-tight text-center">
      <div className="v-shell">
        <div className="v-eyebrow on-ink mx-auto"><span className="dot" />{eyebrow}</div>
        <h2 className="v-h-lg text-v-white max-w-[640px] mx-auto">{title}</h2>
        <div className="flex justify-center gap-3 mt-9 flex-wrap">
          <Link href={primaryHref} className="v-btn v-btn-accent">{primaryLabel}<span className="chip"><ArrowUpRight size={16} /></span></Link>
          {secondaryLabel && (
            <Link href={secondaryHref} className="v-btn v-btn-white">{secondaryLabel}<span className="chip"><ArrowUpRight size={16} /></span></Link>
          )}
        </div>
      </div>
    </section>
  );
}
