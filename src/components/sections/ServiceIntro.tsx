"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface ServiceIntroProps {
  heading: string;
  body: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "light" | "dark";
}

export default function ServiceIntro({
  heading,
  body,
  ctaText,
  ctaHref,
  variant = "light",
}: ServiceIntroProps) {
  const bgClass =
    variant === "dark" ? "bg-off-black text-white" : "bg-white text-charcoal";
  const dividerColor =
    variant === "dark" ? "bg-white/20" : "bg-charcoal/20";
  const btnClass =
    variant === "dark"
      ? "border-white text-white hover:bg-white hover:text-off-black"
      : "border-charcoal text-charcoal hover:bg-charcoal hover:text-white";

  return (
    <section
      className={`${bgClass} pl-5 lg:pl-20 py-16 lg:py-[100px]`}
      data-header-theme={variant === "dark" ? "light" : "dark"}
    >
      <motion.div
        className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        {/* Left: heading + body text */}
        <div className="flex flex-col gap-8 lg:gap-[45px] lg:w-[689px] lg:flex-shrink-0 pr-5 lg:pr-0">
          <h2 className="font-[family-name:var(--font-garamond)] text-[1.8125rem] leading-[44px]">
            {heading}
          </h2>
          <p className="font-[family-name:var(--font-roboto-mono)] text-[0.875rem] leading-[20px] tracking-wide">
            {body}
          </p>
        </div>

        {/* Center: vertical divider — desktop only */}
        <div
          className={`hidden lg:block w-px h-[218px] flex-shrink-0 mx-16 ${dividerColor}`}
        />

        {/* Right: CTA button */}
        {ctaText && ctaHref && (
          <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center lg:pr-[60px]">
            <Link
              href={ctaHref}
              className={`inline-block font-[family-name:var(--font-roboto-mono)] text-[0.75rem] uppercase tracking-[0.12em] border px-4 py-[14px] transition-all duration-300 cursor-pointer ${btnClass}`}
            >
              {ctaText}
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}
