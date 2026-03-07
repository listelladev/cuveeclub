import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ServiceIntro from "@/components/sections/ServiceIntro";
import BracketButton from "@/components/ui/BracketButton";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sommelier / Maître d'Hôtel at Home",
  description:
    "Bring a professional sommelier experience to your home. Intimate wine tastings and dinner pairings in your own space.",
};

const galleryImages = [
  { src: "/sommelier-1of3.png", alt: "Sommelier at home experience" },
  { src: "/sommelier-2of3.png", alt: "Wine tasting at home" },
  { src: "/sommelier-3of3.png", alt: "Private dinner pairing" },
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

export default function SommelierAtHomePage() {
  return (
    <main>
      <HeroSection
        imageSrc="/sommelier-page-hero.png"
        imageAlt="Sommelier at home"
        title="Sommelier / Maitre d'Hotel At Home"
        subtitle="For hosts who wish to fully enjoy their evening without managing the details."
        ctaText="[ BOOK ]"
        ctaHref="/booking"
        icon={<WineIcon />}
      />

      <ServiceIntro
        heading="Private tasting experiences"
        body={
          <>
            <p>Cuvée Club offers professional, discreet hospitality service in the comfort of your home. Acting as your sommelier and maître d&apos;hôtel, I oversee the flow of the evening; pouring wines, serving each course with precision, clearing seamlessly, and ensuring every guest feels attended to.</p>
            <p>With over seventeen years in hospitality, including fine dining and luxury establishments, I bring warmth and attention to detail to your table. My presence allows you to remain a guest in your own home, confident that service and atmosphere are handled with care.</p>
            <p>This service is ideal for private dinners, celebrations, and intimate gatherings where elevated service makes all the difference.</p>
            <p>Please inquire for availability.</p>
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

      <section className="bg-white text-charcoal py-16 lg:py-20 px-5 lg:px-20 text-center" data-header-theme="dark">
        <h2 className="font-[family-name:var(--font-garamond)] text-[1.8125rem] leading-[44px] mb-12">
          Inquire Now
        </h2>
        <BracketButton href="mailto:host@cuveeclub.com" variant="dark">
          [ EMAIL US ]
        </BracketButton>
      </section>

      <Footer />
    </main>
  );
}
