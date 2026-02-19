import Link from "next/link";

const leftLinks = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/#services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
  { label: "BOOKING", href: "/booking" },
];

const rightLinks = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/cuvee.clubyvr/",
    external: true,
  },
  { label: "PRIVACY", href: "/privacy-policy" },
  { label: "TERMS", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="relative bg-wine-dark overflow-hidden min-h-[280px] lg:min-h-[360px] flex flex-col justify-end">
      {/* Background logo SVG — full width, anchored to top-[41px] */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/footer-logo.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-[41px] left-0 w-full pointer-events-none"
      />

      {/* Footer links — anchored to bottom */}
      <div className="relative z-10 px-5 py-5 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
        <nav className="flex flex-wrap gap-2">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-roboto-mono)] text-[0.625rem] tracking-[0.12em] uppercase text-[#f0e6c3] hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          {rightLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-3">
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-roboto-mono)] text-[0.625rem] tracking-[0.12em] uppercase text-[#f0e6c3] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="font-[family-name:var(--font-roboto-mono)] text-[0.625rem] tracking-[0.12em] uppercase text-[#f0e6c3] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )}
              {index < rightLinks.length - 1 && (
                <span className="text-[#f0e6c3]/40 font-[family-name:var(--font-roboto-mono)] text-[0.625rem]">
                  |
                </span>
              )}
            </span>
          ))}
          <span className="text-[#f0e6c3]/40 font-[family-name:var(--font-roboto-mono)] text-[0.625rem]">
            |
          </span>
          <span className="font-[family-name:var(--font-roboto-mono)] text-[0.625rem] tracking-[0.12em] uppercase text-[#f0e6c3]">
            2026 CUVÉE CLUB
          </span>
        </div>
      </div>
    </footer>
  );
}
