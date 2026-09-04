import Link from "next/link";
import { ArrowUpRight, Clock, Video, Building2 } from "lucide-react";
import Media from "@/components/Media";
import Carousel from "@/components/v/Carousel";
import CtaBand from "@/components/v/CtaBand";
import { featuredTherapies } from "@/data/therapies";
import { cities, locations } from "@/data/locations";
import { site } from "@/data/site";

export const metadata = {
  title: "Book A Consultation | Same-Day Availability — The Wellness Co.",
  description: "Check appointment availability across The Wellness Co.'s 14 clinics — same-day slots for most consultations and therapies.",
};

const sessionTypes = featuredTherapies.slice(0, 6);

export default function SchedulePage() {
  return (
    <div className="bg-v-cream">

      {/* ============ HERO — photo right, dark panel left ============ */}
      <section className="v-shell pt-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch bg-v-ink rounded-[var(--v-radius-card)] overflow-hidden">
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="v-eyebrow on-ink"><span className="dot" />Book A Consultation</div>
            <h1 className="v-h-xl text-v-white">Availability that fits your week.</h1>
            <p className="mt-5 text-[16px] max-w-[440px]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Most clinics can see you the same day. Choose a session type below, or head straight to your nearest clinic to check today's slots.
            </p>
            <Link href="/contact" className="v-btn v-btn-accent mt-8 w-fit">Book Now<span className="chip"><ArrowUpRight size={16} /></span></Link>
          </div>
          <div className="relative min-h-[280px] lg:min-h-0">
            <Media imgKey="clinic-interior-reception" alt="" className="absolute inset-0" />
          </div>
        </div>
      </section>

      {/* ============ SESSION TYPES ============ */}
      <section className="v-section">
        <div className="v-shell">
          <div className="v-eyebrow"><span className="dot" />Consultation Types</div>
          <h2 className="v-h-lg max-w-[560px]">What you can book.</h2>
          <p className="v-lede mt-4">Every session begins with a review of your goals — in person, at any of our 14 clinics.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-12">
            {sessionTypes.map((t) => (
              <Link key={t.slug} href={`/therapies/${t.slug}`} className="block group">
                <div className="aspect-[4/3] v-card-photo overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <Media imgKey={t.image} alt={t.name} />
                  </div>
                </div>
                <h4 className="font-display text-[18px] mt-4">{t.name}</h4>
                <div className="flex items-center gap-4 mt-2 text-[12.5px] text-v-muted">
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {t.quick.duration}</span>
                  <span className="flex items-center gap-1.5"><Building2 size={13} /> In-clinic</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ THIS WEEK'S AVAILABILITY (dark carousel) ============ */}
      <section className="bg-v-ink v-section-tight">
        <div className="v-shell">
          <div className="v-eyebrow on-ink"><span className="dot" />This Week</div>
          <h2 className="v-h-lg text-v-white max-w-[560px]">Same-day slots, city by city.</h2>
          <div className="mt-10">
            <Carousel dark>
              {cities.map((city) => {
                const loc = locations.find((l) => l.city === city);
                return (
                  <Link key={city} href={`/locations?city=${encodeURIComponent(city)}`} className="snap-start shrink-0 w-[240px] v-card-panel relative aspect-[3/4] group">
                    <Media imgKey={loc?.image || "clinic-interior-reception"} alt={city} className="transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-v-charcoal/75 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-v-accent text-v-ink-deep text-[11px] font-semibold px-3 py-1.5 rounded-full">Same-day</span>
                    <span className="absolute bottom-5 left-5 text-v-white text-[18px] font-medium">{city}</span>
                  </Link>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>

      {/* ============ HOW TO REACH US ============ */}
      <section className="v-section-tight">
        <div className="v-shell grid sm:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-v-ink-tint text-v-ink flex items-center justify-center shrink-0"><Video size={18} /></div>
            <div>
              <h4 className="text-[16px] font-medium">Not sure what to book?</h4>
              <p className="text-[13.5px] text-v-muted mt-1.5">Call {site.tollFree} and our team will match you to the right session.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-full bg-v-ink-tint text-v-ink flex items-center justify-center shrink-0"><Building2 size={18} /></div>
            <div>
              <h4 className="text-[16px] font-medium">Walk-ins welcome</h4>
              <p className="text-[13.5px] text-v-muted mt-1.5">Accommodated where the day's schedule allows — appointments guarantee your slot.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand secondaryLabel="Find A Location" secondaryHref="/locations" />
    </div>
  );
}
