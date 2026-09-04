"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Signature motion moment: each line blurs in + translates up as it crosses
 * ~65% of the viewport, staggered ~70ms apart. Plain IntersectionObserver +
 * CSS transitions per spec (no animation-library dependency for this one).
 * `lines` is an array of strings, one per visual line.
 */
export default function ScrollLines({ lines, as: Tag = "h2", className, stagger = 70 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{
            display: "block",
            filter: inView ? "blur(0px)" : "blur(6px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(14px)",
            transition: `filter 450ms ease-out, opacity 450ms ease-out, transform 450ms ease-out`,
            transitionDelay: `${i * stagger}ms`,
          }}
        >
          {line}
        </span>
      ))}
    </Tag>
  );
}
