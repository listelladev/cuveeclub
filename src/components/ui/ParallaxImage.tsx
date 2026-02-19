"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  parallaxSpeed?: number;
  hoverZoom?: number;
  className?: string;
  containerClassName?: string;
  sizes?: string;
}

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  parallaxSpeed = 0.1,
  hoverZoom = 1.05,
  className = "",
  containerClassName = "",
  sizes,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-30 * parallaxSpeed, 30 * parallaxSpeed]
  );

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${containerClassName}`}
    >
      <motion.div
        style={{ y }}
        className="h-full w-full"
        whileHover={{ scale: hoverZoom }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className={`object-cover ${className}`}
            sizes={sizes || "100vw"}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`object-cover ${className}`}
            sizes={sizes}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
