"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-[820px]">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="border-b border-[var(--line)]">
            <button
              className="w-full flex justify-between items-center gap-4 py-6 text-left"
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span className="text-[16.5px] font-medium text-ink font-display">{item.q}</span>
              <Plus size={16} className={cn("shrink-0 transition-transform text-forest", open && "rotate-45")} />
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: open ? "300px" : "0px" }}
            >
              <p className="pb-6 text-[14.5px] text-text-soft max-w-[640px]">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
