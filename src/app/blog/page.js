import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Media from "@/components/Media";
import ScrollLines from "@/components/v/ScrollLines";
import CtaBand from "@/components/v/CtaBand";
import { posts, blogCategories } from "@/data/blog";

export const metadata = {
  title: "Wellness Journal | Insights on Longevity, Recovery & Performance — The Wellness Co.",
  description: "Evidence-informed guides on longevity, recovery, sleep, performance and skin — from The Wellness Co.'s medical and wellness team.",
};

export default function BlogHub() {
  const [featured, ...rest] = posts;

  return (
    <div className="bg-v-cream">

      <section className="v-section-tight text-center">
        <div className="v-shell">
          <div className="v-eyebrow mx-auto"><span className="dot" />Blog &amp; Insights</div>
          <ScrollLines as="h1" lines={["Evidence-informed guides", "for a longer, healthier life."]} className="font-display text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.04] max-w-[780px] mx-auto" />
          <div className="flex flex-wrap gap-2.5 justify-center mt-8">
            {blogCategories.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-v-white border border-[var(--v-line)] text-[13px]">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="v-section-tight pt-0">
          <div className="v-shell">
            <Link href={`/blog/${featured.slug}`} className="relative block aspect-[16/8] v-card-photo group overflow-hidden">
              <Media imgKey={featured.image} alt={featured.title} className="transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-v-charcoal/85 via-v-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-v-accent">{featured.category} · Featured</span>
                <h2 className="v-h-lg text-v-white mt-2 max-w-[600px]">{featured.title}</h2>
                <div className="v-btn-text text-v-white mt-4">Read article <ArrowUpRight size={15} /></div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="v-section">
        <div className="v-shell">
          <h2 className="v-h-lg mb-10">More from the journal</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                <div className="aspect-[4/3] v-card-photo overflow-hidden mb-4">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <Media imgKey={p.image} alt={p.title} />
                  </div>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-v-muted">{p.category}</span>
                <h4 className="font-display text-[18px] mt-1.5 leading-snug">{p.title}</h4>
                <p className="text-[13.5px] text-v-muted mt-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
