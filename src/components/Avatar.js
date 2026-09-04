const PALETTE = ["#1E3A2A", "#4C6B54", "#A9824F", "#6E6656"];

function hash(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export default function Avatar({ initials, name, size = 44, className = "" }) {
  const bg = PALETTE[hash(name || initials) % PALETTE.length];
  return (
    <div
      className={`rounded-full flex items-center justify-center text-cream font-display shrink-0 ${className}`}
      style={{ width: size, height: size, background: bg, fontSize: size * 0.38 }}
    >
      {initials}
    </div>
  );
}
