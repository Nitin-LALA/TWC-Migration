"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Carousel({ children, dark = false }) {
  const trackRef = useRef(null);

  function scrollBy(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > *");
    const amount = (card?.offsetWidth || 320) + 20;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  const arrowCls = dark
    ? "w-11 h-11 rounded-full border border-[var(--v-line-on-dark)] flex items-center justify-center text-v-white hover:bg-white/10 transition-colors"
    : "w-11 h-11 rounded-full border border-[var(--v-line)] flex items-center justify-center text-v-text hover:bg-black/5 transition-colors";

  return (
    <div>
      <div className="flex justify-end gap-2.5 mb-6">
        <button aria-label="Previous" onClick={() => scrollBy(-1)} className={arrowCls}><ArrowLeft size={16} /></button>
        <button aria-label="Next" onClick={() => scrollBy(1)} className={arrowCls}><ArrowRight size={16} /></button>
      </div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
