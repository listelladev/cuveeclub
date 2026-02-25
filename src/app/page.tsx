"use client";

import { useState } from "react";
import HomeCard from "@/components/sections/HomeCard";

const services = [
  {
    title: "Corporate and Personal\nWine Tasting Events",
    imageSrc: "/corporate-personal-home.webp",
    href: "/corporate-wine-tastings",
  },
  {
    title: "Restaurant Consulting",
    imageSrc: "/restraurant-consulting-home.png",
    href: "/restaurant-consulting",
  },
  {
    title: "Sommelier / Maitre\nd'Hotel At Home",
    imageSrc: "/sommelier-home.png",
    href: "/sommelier-at-home",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(services.length - 1, c + 1));

  return (
    <main className="h-dvh flex flex-col lg:flex-row" data-header-theme="light">
      {/* Desktop: 3 equal columns */}
      <div className="hidden lg:flex flex-row h-full w-full">
        {services.map((service) => (
          <HomeCard key={service.href} {...service} />
        ))}
      </div>

      {/* Mobile: single-card slider */}
      <div className="lg:hidden relative h-full w-full overflow-hidden">
        {/* Cards — translate based on active index */}
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {services.map((service) => (
            <div key={service.href} className="h-full w-full flex-shrink-0">
              <HomeCard {...service} />
            </div>
          ))}
        </div>

        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center transition-opacity duration-300 ${
            current === 0 ? "opacity-0 pointer-events-none" : "opacity-80"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
            <polyline points="13,3 7,10 13,17" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center transition-opacity duration-300 ${
            current === services.length - 1 ? "opacity-0 pointer-events-none" : "opacity-80"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
            <polyline points="7,3 13,10 7,17" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
