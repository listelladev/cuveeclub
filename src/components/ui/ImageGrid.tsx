"use client";

import { motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";
import { staggerContainer, imageReveal } from "@/lib/animations";

interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3;
  aspectRatio?: string;
  className?: string;
}

export default function ImageGrid({
  images,
  columns = 3,
  aspectRatio = "aspect-[3/4]",
  className = "",
}: ImageGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <motion.div
      className={`grid grid-cols-1 ${gridCols} gap-4 ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`relative ${aspectRatio}`}
          variants={imageReveal}
        >
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            fill
            containerClassName="relative w-full h-full"
            sizes={columns === 2 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
