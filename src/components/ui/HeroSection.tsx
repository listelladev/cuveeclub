"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BracketButton from "./BracketButton";
import { fadeUp } from "@/lib/animations";

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ReactNode;
  iconPosition?: "bottom-left" | "bottom-right";
}

export default function HeroSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaText,
  ctaHref,
  icon,
  iconPosition,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[60vh] lg:h-[850px] w-full flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
      data-header-theme="light"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      {/* 35% overlay */}
      <div className="absolute inset-0 bg-black/[0.35]" />

      {/* Icon — absolute bottom-left or bottom-right */}
      {icon && iconPosition && (
        <div
          className={`absolute z-10 bottom-8 lg:bottom-12 ${
            iconPosition === "bottom-left"
              ? "left-8 lg:left-12"
              : "right-8 lg:right-12"
          }`}
        >
          {icon}
        </div>
      )}

      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 className="font-[family-name:var(--font-garamond)] text-[clamp(1.6rem,3vw,1.8125rem)] leading-snug mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1.1vw,1rem)] tracking-[0.04em] leading-relaxed mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <BracketButton href={ctaHref} variant="light">
            {ctaText}
          </BracketButton>
        )}
      </motion.div>
    </section>
  );
}
