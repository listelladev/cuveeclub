import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ServiceIntro from "@/components/sections/ServiceIntro";
import PackagesSection from "@/components/sections/PackagesSection";
import InquiryForm from "@/components/forms/InquiryForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Corporate and Personal Wine Tasting Events",
  description:
    "Elevate your corporate or personal event with bespoke wine tasting experiences. Curated tastings for all occasions.",
};

const packages = [
  {
    name: "'Village' Package",
    duration: "90 min",
    description: [
      "4 wines; 2 whites & 2 reds",
      "",
      "Wine 101. An introduction to wine etiquette & what to look for when tasting wine?",
      "Light bodied versus full",
    ],
  },
  {
    name: "'Premier Cru' Package",
    duration: "90 min",
    description: [
      "5 wines; 1 sparkling, 2 whites & 2 reds",
      "",
      "A more in depth tasting designed for you to understand your palate better.",
      "",
      "Understanding of comparative tasting. Overview on the classic grape varieties. Reading labels and knowing how to choose a bottle.",
    ],
  },
  {
    name: "'Grand Cru' Package",
    duration: "90 min",
    description: [
      "4 wines, red",
      "",
      "A deep-dive into the classics. Splurge into premium wine regions.",
      "Think Bordeaux, Burgundy, Brunello, Barolo.",
    ],
  },
];

const galleryImages = [
  { src: "/corporate-personal-1of3.webp", alt: "Wine tasting event setup" },
  { src: "/corporate-personal-2of3.png", alt: "Corporate wine tasting" },
  { src: "/corporate-personal-3of3.png", alt: "Personal wine experience" },
];

const WineIcon = () => (
  <Image
    src="/Wine-glass-icon.svg"
    alt=""
    width={76}
    height={144}
    className="w-10 h-auto lg:w-20 opacity-90"
  />
);

export default function CorporateWineTastingsPage() {
  return (
    <main>
      <HeroSection
        imageSrc="/corporate-wine-page-hero.png"
        imageAlt="Corporate wine tasting event"
        title={<>Corporate and Personal<br className="lg:hidden" /> Wine Tasting Events</>}
        subtitle="Tailored wine tastings brought to you by a professional sommelier."
        ctaText="[ BOOK ]"
        ctaHref="/booking"
        icon={<WineIcon />}
      />

      <ServiceIntro
        heading="Private tasting experiences"
        body={
          <>
            <p>Cuvée Club was created to gather, share the joy of wine and the stories behind every bottle. When booking a tasting, you get a thoughtfully curated selection, dive into different wine regions and learn about the winemakers and what makes them unique.</p>
            <p>From an afternoon team-building event, to a soirée between friends, each tasting is tailored to your occasion. Glassware, wines, water bottles and optional note pads are all brought to the location of your event. The option to include canapés, pairings or a full dinner experience is also available.</p>
            <p>Bookings are for a minimum party of 6 people. Please see the different packages below. All packages are 90 minutes in duration.</p>
            <p>Custom themes may be designed upon request. Please inquire for further details.</p>
          </>
        }
        ctaText="[ BOOK ]"
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
