import Avatar from "./Avatar";

function initials(name) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

export default function TestimonialCard({ testimonial, dark = false }) {
  return (
    <div style={{ color: dark ? "#fff" : "var(--v-text)" }}>
      <p className="font-display fst-italic" style={{ fontSize: 18, lineHeight: 1.6 }}>&quot;{testimonial.quote}&quot;</p>
      <div className="mt-4 d-flex align-items-center gap-3">
        <Avatar initials={initials(testimonial.name)} name={testimonial.name} size={38} />
        <div>
          <div className="fw-medium" style={{ fontSize: 13.5 }}>{testimonial.name}</div>
          {testimonial.context && (
            <div style={{ fontSize: 12, color: dark ? "rgba(255,255,255,0.5)" : "var(--v-muted)" }}>{testimonial.context}</div>
          )}
        </div>
      </div>
    </div>
  );
}
