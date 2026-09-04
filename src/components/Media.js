import { media } from "@/data/media";
import { cn } from "@/lib/utils";

const GRADIENTS = [
  "linear-gradient(135deg, #24402F 0%, #4C6B54 60%, #B5652E 130%)",
  "linear-gradient(135deg, #16281C 0%, #24402F 55%, #8C4A1E 130%)",
  "linear-gradient(140deg, #4C6B54 0%, #24402F 65%, #16281C 130%)",
];

function hashKey(key = "") {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = (h * 31 + key.charCodeAt(i)) >>> 0;
  return h;
}

export default function Media({ imgKey, alt = "", className, priority }) {
  const url = media[imgKey];

  if (url) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={url} alt={alt} className={cn("h-full w-full object-cover", className)} loading={priority ? "eager" : "lazy"} />;
  }

  const gradient = GRADIENTS[hashKey(imgKey) % GRADIENTS.length];
  return (
    <div
      className={cn("h-full w-full flex items-end p-4", className)}
      style={{ backgroundImage: gradient }}
      role="img"
      aria-label={alt}
    >
      <span className="text-[10px] tracking-wider uppercase text-cream/50">{alt || imgKey}</span>
    </div>
  );
}
