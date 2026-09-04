"use client";

import { motion } from "framer-motion";

export default function RevealText({ text, as: Tag = "h1", className, dim = 0.28, stagger = 0.045 }) {
  const words = text.split(" ");
  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: stagger }}
        style={{ display: "inline" }}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: dim, filter: "blur(4px)" },
              show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.2, 0.7, 0.3, 1] } },
            }}
            style={{ display: "inline-block" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
