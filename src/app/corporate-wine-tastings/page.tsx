import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ServiceIntro from "@/components/sections/ServiceIntro";
import PackagesSection from "@/components/sections/PackagesSection";
import InquiryForm from "@/components/forms/InquiryForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Corporate and Personal Wine Tastings Events",
  description:
    "Elevate your corporate or personal event with bespoke wine tasting experiences. Curated tastings for all occasions.",
};

const packages = [
  {
    name: "Village Package",
    duration: "90 min",
    description: [
      "4 wines: 2 whites, 2 reds.",
      "",
      "The How's? Wine 101. Light versus full-bodied.",
      "How to taste. How to drink, how to open a bottle, how to hold a glass. How to swirl. How to smell, how to taste.",
    ],
  },
  {
    name: "Premier Cru",
    duration: "90 min",
    description: [
      "5 wines. 1 Sparkling wine, 2 whites 2 reds.",
      "",
      "Discover your tastes. A more in depth tasting designed for you to understand your palate better.",
      "",
      "Know about the classic grape varieties. Understand comparative tastings. Structure of a wine. What to ask at the restaurant/liquor store. Verbiage.",
    ],
  },
  {
    name: "Grand Cru Package",
    duration: "90 min",
    description: [
      "4 red wines",
      "",
      "Deep-dive into the classics. Those wines you need to know about. Think Burgundy, Bordeaux, Barolo, Brunello.",
      "",
      "Optional custom package designed specifically for your group depending on your preferences.",
      "",
      "Option of adding food pairings. Whether you're looking for a quick lunch option, canapés, or dinner. I can contact local chef options for your group.",
      "",
      "Want a tasting focused solely on Italy, or curious about Champagne, French wines, or BC vintages? Interested in blind tastings or a longer, 2-hour experience? Reach out to me directly to customize your tasting.",
    ],
  },
];

const galleryImages = [
  { src: "/corporate-personal-1of3.png", alt: "Wine tasting event setup" },
  { src: "/corporate-personal-2of3.png", alt: "Corporate wine tasting" },
  { src: "/corporate-personal-3of3.png", alt: "Personal wine experience" },
];

const WineIcon = () => (
  <Image
    src="/Wine-glass-icon.svg"
    alt=""
    width={40}
    height={56}
    className="w-8 h-auto lg:w-10 opacity-90"
  />
);

export default function CorporateWineTastingsPage() {
  return (
    <main>
      <HeroSection
        imageSrc="/corporate-wine-page-hero.png"
        imageAlt="Corporate wine tasting event"
        title="Corporate and Personal Wine Tastings Events"
        subtitle="I organize luxury yet approachable wine experiences for corporate teams, private groups and clubs."
        ctaText="[ BOOK HOST ]"
        ctaHref="/booking"
        icon={<WineIcon />}
        iconPosition="bottom-left"
      />

      <ServiceIntro
        heading="Private tasting experiences"
        body="I come to my clients. They don't have to drive anywhere and pay mark-ups. I am an independent business owner, meaning I won't be biased by brands or sales goals. You can stay in the comfort of your home or offices and have me come to you. Wines, glassware, water bottles and note pads are included. I bring 8+ years of experience as a professional sommelier. I deliver customized experiences that are elevated yet approachable."
        ctaText="[ BOOK HOST ]"
        ctaHref="/booking"
        variant="light"
      />

      {/* Gallery — edge-to-edge, 20px gaps, hover zoom within frame */}
      <section className="bg-white" data-header-theme="dark">
        <div className="flex gap-5">
          {galleryImages.map((img, i) => (
            <div key={i} className="flex-1 relative aspect-[2/3] overflow-hidden group">
              <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <PackagesSection
        packages={packages}
        illustrationSrc="/corporate-private-package-table.svg"
        illustrationAlt="Wine tasting table illustration"
      />

      <InquiryForm source="Corporate & Personal Wine Tastings" variant="dark" />

      <Footer />
    </main>
  );
}
