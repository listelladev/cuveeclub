"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blurPlaceholders } from "@/lib/blur-placeholders";
import Footer from "@/components/layout/Footer";
import { fadeUp } from "@/lib/animations";

export default function BookingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main>
      {/* Hero — Figma shows ~575px height, image fills frame */}
      <section
        className="relative h-[50vh] lg:h-[575px] w-full flex items-center justify-center overflow-hidden"
        data-header-theme="light"
      >
        <Image
          src="/booking-hero.png"
          alt="Book a wine tasting experience"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurPlaceholders["/booking-hero.png"]}
        />
        <div className="absolute inset-0 bg-black/[0.35]" />
        <motion.div
          className="relative z-10 text-center text-white px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="font-[family-name:var(--font-garamond)] text-[clamp(1.6rem,3vw,1.8125rem)] leading-snug">
            Book
          </h1>
        </motion.div>
      </section>

      <section
        id="calendly"
        className="bg-white py-(--spacing-section) px-6"
        data-header-theme="dark"
      >
        <div className="w-full">
          <div
            className="calendly-inline-widget h-[750px] lg:h-[1000px]"
            data-url="https://calendly.com/host-cuveeclub?text_color=000000&primary_color=66242e"
            style={{ minWidth: "320px" }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
