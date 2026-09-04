import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Media from "./Media";
import { getCategory } from "@/data/categories";

export default function TherapyCard({ therapy }) {
  const cat = getCategory(therapy.category);
  return (
    <Link href={`/therapies/${therapy.slug}`} className="d-block text-decoration-none twc-cat-tile">
      <div className="v-card-photo overflow-hidden" style={{ aspectRatio: "4/3", background: "var(--v-ink)" }}>
        <Media imgKey={therapy.image} alt={therapy.name} />
      </div>
      <div className="pt-4">
        <span className="text-uppercase small fw-semibold" style={{ color: "var(--v-muted)", fontSize: 11 }}>{cat?.short}</span>
        <h4 className="font-display mt-2" style={{ fontSize: 19 }}>{therapy.name}</h4>
        <p className="small mt-2" style={{ color: "var(--v-muted)" }}>{therapy.oneLiner}</p>
        <div className="v-btn-text mt-2" style={{ color: "var(--v-ink)" }}>
          Explore Therapy <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  );
}
