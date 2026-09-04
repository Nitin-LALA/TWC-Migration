import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Media from "@/components/Media";
import Accordion from "@/components/v/Accordion";
import CtaBand from "@/components/v/CtaBand";
import Avatar from "@/components/Avatar";
import { posts, getPost } from "@/data/blog";
import { getTherapy } from "@/data/therapies";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: `${p.title} | The Wellness Co.`, description: p.excerpt };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const related = getTherapy(p.relatedTherapy);
  const otherPosts = posts.filter((o) => o.slug !== p.slug).slice(0, 2);

  return (
    <div className="bg-v-cream">

      {/* cover hero */}
      <section className="relative min-h-[56vh] flex items-end overflow-hidden">
        <Media imgKey={p.image} alt={p.title} className="absolute inset-0" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-v-charcoal/80 via-v-charcoal/20 to-transparent" />
        <div className="relative v-shell pb-14 pt-28 text-center w-full">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-v-accent">{p.category}</span>
          <h1 className="font-display text-[28px] sm:text-[42px] lg:text-[50px] leading-[1.06] text-v-white max-w-[820px] mx-auto mt-3">{p.title}</h1>
          <div className="flex gap-3 items-center justify-center mt-6 text-[13px]" style={{ color: "rgba(255,255,255,0.7)" }}>
            <span>The Wellness Co. Medical Team</span>
            <span>·</span>
            <span>Updated {new Date(p.updated).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
        </div>
      </section>

      <div className="v-shell">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[13.5px] text-v-muted hover:text-v-ink mt-8">
          <ArrowLeft size={14} /> All Insights
        </Link>
      </div>

      <section className="v-section-tight">
        <div className="v-shell max-w-[720px]">
          <div className="bg-v-white border border-[var(--v-line)] rounded-[var(--v-radius-card)] p-7 mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-v-muted-2">Direct Answer</span>
            <p className="mt-2.5 text-[15.5px] leading-relaxed">{p.directAnswer}</p>
          </div>

          {p.body.map((block) => (
            <div key={block.h} className="mb-9">
              <h2 className="v-h-md mb-3">{block.h}</h2>
              <p className="text-v-muted leading-relaxed">{block.p}</p>
            </div>
          ))}

          {p.keyTakeaways && (
            <div className="mb-10">
              <h3 className="font-display text-[19px] mb-4">Key Takeaways</h3>
              <ul className="space-y-2.5">
                {p.keyTakeaways.map((k) => (
                  <li key={k} className="text-[14.5px] text-v-muted flex gap-2.5"><span className="text-v-ink">→</span>{k}</li>
                ))}
              </ul>
            </div>
          )}

          {related && (
            <Link href={`/therapies/${related.slug}`} className="flex items-center justify-between bg-v-ink rounded-[var(--v-radius-card)] p-6 mb-10 text-v-white hover:opacity-90 transition-opacity">
              <div>
                <span className="text-[10.5px] font-semibold uppercase tracking-wide text-v-accent">Related Programme</span>
                <h4 className="font-display text-[18px] mt-1">{related.name}</h4>
              </div>
              <ArrowUpRight size={18} />
            </Link>
          )}

          <div className="v-name-chip">
            <Avatar initials="WC" name="The Wellness Co." size={30} />
            <span className="text-[13px] font-medium">The Wellness Co. Medical Team</span>
          </div>
        </div>
      </section>

      <section className="v-section-tight pt-0">
        <div className="v-shell max-w-[720px]">
          <div className="v-eyebrow"><span className="dot" />FAQ</div>
          <Accordion items={p.faqs} />
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className="v-section bg-v-cream">
          <div className="v-shell">
            <h2 className="v-h-lg mb-10">More insights</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {otherPosts.map((o) => (
                <Link key={o.slug} href={`/blog/${o.slug}`} className="block bg-v-white border border-[var(--v-line)] rounded-[var(--v-radius-card)] p-6 hover:shadow-[var(--v-shadow-card)] transition-shadow">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-v-muted">{o.category}</span>
                  <h4 className="font-display text-[18px] mt-2">{o.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </div>
  );
}
