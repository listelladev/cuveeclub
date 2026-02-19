"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/animations";

interface PackageData {
  name: string;
  duration: string;
  description: string[];
}

interface PackagesSectionProps {
  heading?: string;
  packages: PackageData[];
  illustrationSrc?: string;
  illustrationAlt?: string;
}

export default function PackagesSection({
  heading = "Packages",
  packages,
  illustrationSrc,
  illustrationAlt = "Package illustration",
}: PackagesSectionProps) {
  return (
    <section className="bg-white text-charcoal" data-header-theme="dark">
      {/* Section header: "Packages" heading left, illustration top-right */}
      <div className="flex items-start justify-between px-5 lg:px-20 pt-16 lg:pt-[100px] pb-0">
        <motion.h2
          className="font-[family-name:var(--font-garamond)] text-[1.8125rem] leading-[44px] text-charcoal"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {heading}
        </motion.h2>

        {illustrationSrc && (
          <motion.div
            className="hidden lg:block flex-shrink-0 w-[450px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Image
              src={illustrationSrc}
              alt={illustrationAlt}
              width={450}
              height={391}
              className="w-full h-auto"
            />
          </motion.div>
        )}
      </div>

      {/* Package list — each row has its own padding; divider is INSIDE the padding */}
      {packages.map((pkg, index) => {
        const alignRight = index % 2 === 1;
        return (
          <motion.div
            key={index}
            className="px-5 lg:px-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div
              className={`py-10 lg:py-[66px] flex ${
                alignRight ? "justify-end" : "justify-start"
              }`}
            >
              <div className="w-full lg:w-1/2">
                <h3 className="font-[family-name:var(--font-roboto-mono)] font-bold text-[1rem] uppercase tracking-[0.06em] mb-4">
                  [ {pkg.name} ]
                </h3>
                <p className="font-[family-name:var(--font-roboto-mono)] text-[0.875rem] mb-4 leading-[20px]">
                  {pkg.duration}
                </p>
                <div>
                  {pkg.description.map((line, i) =>
                    line === "" ? (
                      <div key={i} className="h-3" />
                    ) : (
                      <p
                        key={i}
                        className="font-[family-name:var(--font-roboto-mono)] text-[0.875rem] leading-[20px]"
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* Divider — inside the section padding, so it won't go edge-to-edge */}
            <div className="border-t border-charcoal/10" />
          </motion.div>
        );
      })}

      <div className="pb-16 lg:pb-24" />
    </section>
  );
}
