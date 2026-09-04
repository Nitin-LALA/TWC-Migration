import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-v-cream min-h-[80vh] flex items-center">
      <div className="v-shell text-center py-20">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none" className="mx-auto mb-8" aria-hidden="true">
          <ellipse cx="70" cy="88" rx="46" ry="6" fill="var(--v-ink-tint)" />
          <path d="M40 70V40a30 30 0 0160 0v30" stroke="var(--v-ink)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="70" cy="38" r="10" stroke="var(--v-ink)" strokeWidth="2.5" />
          <path d="M65 38a5 5 0 0110 0" stroke="var(--v-accent-deep)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M30 70h80" stroke="var(--v-ink)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="30" cy="70" r="4" fill="var(--v-accent-deep)" />
          <circle cx="110" cy="70" r="4" fill="var(--v-accent-deep)" />
        </svg>
        <div className="font-display text-[80px] sm:text-[120px] leading-none text-v-ink-tint">404</div>
        <h1 className="v-h-md mt-2">This page wandered off its protocol.</h1>
        <p className="v-lede mx-auto mt-4">The page you're looking for doesn't exist — but your nearest clinic and programme still do.</p>
        <Link href="/" className="v-btn v-btn-dark mt-8 inline-flex">Back To Home<span className="chip"><ArrowUpRight size={16} /></span></Link>
      </div>
    </div>
  );
}
