"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import BracketButton from "@/components/ui/BracketButton";
import Navigation from "./Navigation";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [navOpen, setNavOpen] = useState(false);

  const updateTheme = useCallback(() => {
    const headerHeight = 80;
    const sections = document.querySelectorAll("[data-header-theme]");
    let currentTheme: "light" | "dark" = "light";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= headerHeight && rect.bottom > headerHeight) {
        currentTheme = section.getAttribute("data-header-theme") as "light" | "dark";
      }
    });

    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);
    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, [updateTheme]);

  const textColor = theme === "light" ? "text-white" : "text-charcoal";
  const logoSrc = theme === "light" ? "/White Logo.svg" : "/Black Logo.svg";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${textColor}`}>
        <div className={`flex items-center justify-between px-6 lg:px-10 py-6 border-b transition-colors duration-500 ${theme === "light" ? "border-white/30" : "border-charcoal/15"}`}>
          <button
            onClick={() => setNavOpen(true)}
            className="flex items-center gap-2 cursor-pointer"
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-5 h-px ${theme === "light" ? "bg-white" : "bg-charcoal"} transition-colors duration-500`} />
              <span className={`block w-5 h-px ${theme === "light" ? "bg-white" : "bg-charcoal"} transition-colors duration-500`} />
              <span className={`block w-5 h-px ${theme === "light" ? "bg-white" : "bg-charcoal"} transition-colors duration-500`} />
            </div>
            <span className="hidden lg:inline font-[family-name:var(--font-roboto-mono)] text-[0.75rem] tracking-[0.12em] uppercase">
              Menu
            </span>
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src={logoSrc}
              alt="Cuvée Club"
              width={150}
              height={40}
              priority
              className="h-8 lg:h-10 w-auto transition-opacity duration-500"
            />
          </Link>

          <div className="hidden lg:block">
            <BracketButton href="/booking" variant={theme === "light" ? "light" : "dark"}>
              [ BOOK ]
            </BracketButton>
          </div>
        </div>
      </header>

      <Navigation isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
