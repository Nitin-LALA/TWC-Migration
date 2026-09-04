const ITEMS = [
  "14 CLINICS NATIONWIDE",
  "USFDA · CE · MFDS CERTIFIED",
  "4.8★ GOOGLE RATING",
  "DOCTOR-LED PROTOCOLS",
  "30+ INTEGRATIVE THERAPIES",
  "8 CITIES ACROSS INDIA",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-charcoal text-cream overflow-hidden py-2.5 select-none">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center text-[11px] font-medium tracking-[0.08em] px-6 whitespace-nowrap">
            {item}
            <span className="ml-6 text-gold-soft">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
