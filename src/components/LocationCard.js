import Link from "next/link";
import { MapPin } from "lucide-react";
import Media from "./Media";

export default function LocationCard({ location }) {
  return (
    <Link href={`/locations/${location.slug}`} className="d-block text-decoration-none twc-cat-tile">
      <div className="v-card-photo overflow-hidden" style={{ aspectRatio: "4/3", background: "var(--v-ink)" }}>
        <Media imgKey={location.image} alt={location.name} />
      </div>
      <div className="pt-4">
        <div className="d-flex align-items-start justify-content-between gap-3">
          <h4 className="font-display" style={{ fontSize: 18 }}>{location.name}</h4>
          <MapPin size={15} className="flex-shrink-0 mt-1" style={{ color: "var(--v-ink)" }} />
        </div>
        <span className="text-uppercase small d-block" style={{ color: "var(--v-muted)", fontSize: 11 }}>{location.city}</span>
        <p className="small mt-2" style={{ color: "var(--v-muted)", lineHeight: 1.5 }}>{location.address}</p>
      </div>
    </Link>
  );
}
