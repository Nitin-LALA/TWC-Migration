"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function Accordion({ items, dark = false }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={dark ? "v-divider-dark" : "v-divider"}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center gap-6 py-6 text-left"
            >
              <span className={`text-[13px] font-semibold ${dark ? "text-v-white/40" : "text-v-muted"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`flex-1 text-[17px] font-medium ${dark ? "text-v-white" : "text-v-text"}`}>{item.q}</span>
              <span
                className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""} ${dark ? "border-[var(--v-line-on-dark)] text-v-white" : "border-[var(--v-line)] text-v-text"}`}
              >
                <Plus size={16} />
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: isOpen ? 300 : 0 }}
            >
              <p className={`pb-6 pl-[46px] text-[14.5px] max-w-[640px] leading-relaxed ${dark ? "text-v-white/60" : "text-v-muted"}`}>
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
