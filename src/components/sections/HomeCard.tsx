"use client";

import Link from "next/link";
import Image from "next/image";

interface HomeCardProps {
  title: string;
  imageSrc: string;
  href: string;
}

export default function HomeCard({ title, imageSrc, href }: HomeCardProps) {
  return (
    <Link href={href} className="relative flex-1 group block overflow-hidden">
      {/* Image zooms within the frame on hover */}
      <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* 35% dark overlay per Figma */}
      <div className="absolute inset-0 bg-black/[0.35] group-hover:bg-black/[0.28] transition-colors duration-700" />

      {/* Title — positioned at ~70% from top, centered with bottom border */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[70%] w-full flex justify-center px-4">
        <div className="border-b border-white/80 py-2 text-center max-w-[235px]">
          <h2 className="font-[family-name:var(--font-garamond)] text-white text-[1.8125rem] leading-8 whitespace-pre-line">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
