"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import BracketButton from "@/components/ui/BracketButton";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceLinks = [
  {
    label: "Corporate & Personal Wine Tastings",
    href: "/corporate-wine-tastings",
  },
  { label: "Restaurant Consulting", href: "/restaurant-consulting" },
  { label: "Sommelier / Maître d'Hôtel at Home", href: "/sommelier-at-home" },
];

const navLinks = [
  { label: "HOME", href: "/", hasSubmenu: false },
  { label: "SERVICES", href: "/#services", hasSubmenu: true },
  { label: "ABOUT", href: "/about", hasSubmenu: false },
  { label: "CONTACT", href: "/contact", hasSubmenu: false },
  { label: "BOOKING", href: "/booking", hasSubmenu: false },
];

const footerLinks = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/cuvee.clubyvr/",
    external: true,
  },
  { label: "PRIVACY", href: "/privacy-policy" },
  { label: "TERMS", href: "/terms" },
];

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onAnimationComplete={(def) => {
            if (def === "exit") setServicesOpen(false);
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 lg:px-10 py-6">
            <button
              onClick={onClose}
              className="flex items-center gap-2 cursor-pointer text-charcoal"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="2" y1="2" x2="18" y2="18" />
                <line x1="18" y1="2" x2="2" y2="18" />
              </svg>
              <span className="hidden lg:inline font-[family-name:var(--font-roboto-mono)] text-[0.75rem] tracking-[0.12em] uppercase">
                Menu
              </span>
            </button>

            <Link
              href="/"
              onClick={onClose}
              className="absolute left-1/2 -translate-x-1/2"
            >
              <Image
                src="/Black Logo.svg"
                alt="Cuvée Club"
                width={150}
                height={40}
                className="h-8 lg:h-10 w-auto"
              />
            </Link>

            <div className="hidden lg:block">
              <BracketButton href="/booking" variant="dark" onClick={onClose}>
                [ BOOK ]
              </BracketButton>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col items-start px-6 lg:px-16 mt-16 lg:mt-24">
            {navLinks.map((link, index) =>
              link.hasSubmenu ? (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Services row with arrow */}
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className="flex items-center gap-2 font-[family-name:var(--font-roboto-mono)] text-charcoal text-[0.875rem] tracking-[0.12em] uppercase py-3 hover:text-wine transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                    <motion.svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      animate={{ rotate: servicesOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <polyline points="3,1 7,5 3,9" />
                    </motion.svg>
                  </button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        className="flex flex-col pl-4 lg:pl-6 gap-1 overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {serviceLinks.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            onClick={onClose}
                            className="font-[family-name:var(--font-roboto-mono)] text-charcoal/70 text-[0.75rem] tracking-[0.08em] uppercase py-1.5 hover:text-wine transition-colors duration-300"
                          >
                            {svc.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-[family-name:var(--font-roboto-mono)] text-charcoal text-[0.875rem] tracking-[0.12em] uppercase py-3 block hover:text-wine transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </nav>

          {/* Footer Links */}
          <div className="absolute bottom-6 left-5 right-5 lg:left-auto lg:right-10 flex flex-wrap items-center justify-end gap-x-3 gap-y-1">
            {footerLinks.map((link, index) => (
              <span key={link.href} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="text-charcoal/30 font-[family-name:var(--font-roboto-mono)] text-[0.5rem] lg:text-[0.625rem]">
                    |
                  </span>
                )}
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-roboto-mono)] text-charcoal text-[0.5rem] lg:text-[0.625rem] tracking-[0.12em] uppercase hover:text-wine transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="font-[family-name:var(--font-roboto-mono)] text-charcoal text-[0.5rem] lg:text-[0.625rem] tracking-[0.12em] uppercase hover:text-wine transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )}
              </span>
            ))}
            <span className="text-charcoal/30 font-[family-name:var(--font-roboto-mono)] text-[0.5rem] lg:text-[0.625rem]">
              |
            </span>
            <span className="font-[family-name:var(--font-roboto-mono)] text-charcoal text-[0.5rem] lg:text-[0.625rem] tracking-[0.12em] uppercase whitespace-nowrap">
              2026 CUVÉE CLUB
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
