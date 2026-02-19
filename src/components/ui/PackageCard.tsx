"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface PackageCardProps {
  name: string;
  price: string;
  duration: string;
  includes: string;
  description: string[];
  className?: string;
}

export default function PackageCard({
  name,
  price,
  duration,
  includes,
  description,
  className = "",
}: PackageCardProps) {
  return (
    <motion.div
      className={`${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="font-[family-name:var(--font-roboto-mono)] text-[0.75rem] tracking-[0.12em] uppercase mb-4">
        [ {name} ]
      </h3>
      <p className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1vw,0.875rem)] mb-2">
        {price}
      </p>
      <p className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1vw,0.875rem)] text-white/60 mb-4">
        {duration}
      </p>
      <p className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1vw,0.875rem)] text-white/60 mb-4">
        {includes}
      </p>
      {description.map((line, i) => (
        <p
          key={i}
          className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1vw,0.875rem)] leading-relaxed text-white/80"
        >
          {line}
        </p>
      ))}
    </motion.div>
  );
}
