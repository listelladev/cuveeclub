"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blurPlaceholders } from "@/lib/blur-placeholders";
import Footer from "@/components/layout/Footer";
import { fadeUp } from "@/lib/animations";

export default function BookingPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

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
        className="bg-[#f3f1e8] py-(--spacing-section) px-6"
        data-header-theme="dark"
      >
        <div className="max-w-4xl mx-auto">
          {calendlyUrl ? (
            <div
              className="calendly-inline-widget"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "700px" }}
            />
          ) : (
            <div className="text-center py-20">
              <p className="font-[family-name:var(--font-garamond)] text-[clamp(1.5rem,3vw,1.8125rem)] text-charcoal mb-4">
                This is where the booking form will go
              </p>
              <p className="font-[family-name:var(--font-roboto-mono)] text-[0.8125rem] text-charcoal/60 tracking-wide">
                Our online booking system is being set up. In the meantime, please reach out via our contact page.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
