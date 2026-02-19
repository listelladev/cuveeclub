import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import ServiceIntro from "@/components/sections/ServiceIntro";
import InquiryForm from "@/components/forms/InquiryForm";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Restaurant Consulting",
  description:
    "Expert restaurant consulting services including wine staff training, wine list curation, and inventory management.",
};

const topImages = [
  { src: "/restaurant-consulting-1of2.png", alt: "Wine consulting session" },
  { src: "/restaurant-consulting-2of2.png", alt: "Wine inventory management" },
];

const bottomImages = [
  { src: "/restaurant-consulting-1of3.png", alt: "Restaurant wine service" },
  { src: "/restaurant-consulting-2of3.png", alt: "Wine list curation" },
  { src: "/restaurant-consulting-3of3.png", alt: "Staff wine training" },
];

const WineIcon = () => (
  <Image
    src="/Wine-glass-icon.svg"
    alt=""
    width={40}
    height={56}
    className="w-16 h-auto lg:w-20 opacity-90"
  />
);

export default function RestaurantConsultingPage() {
  return (
    <main>
      <HeroSection
        imageSrc="/restaurant-consulting-hero.png"
        imageAlt="Restaurant consulting"
        title="Restaurant Consulting"
        subtitle="I create wine lists, train staff, do costing and inventory management. Includes user-friendly manuals for staff, weekly pre-shifts, and monthly seminars."
        ctaText="[ BOOK HOST ]"
        ctaHref="/booking"
        icon={<WineIcon />}
        iconPosition="bottom-left"
      />

      <ServiceIntro
        heading="Industry Experience"
        body="I bring 8+ years of experience as a Wine Director and sommelier. I also have over 15 years of experience in the restaurant industry. I have worked with wine lists with over 400 labels to wine lists around 50 labels. From fine-dining restaurants, bars, casual restaurants and wine bars. I have consistently elevated staff's overall wine knowledge by hosting seminars and tastings. I have won prizes for my wine list at the last restaurant I was the Wine Director at. If you are looking to elevate your wine program, build wine education for your staff, or shorten your wine inventory, get in contact with me."
        ctaText="[ BOOK HOST ]"
        ctaHref="/booking"
        variant="light"
      />

      {/* Two-column images — edge-to-edge, 20px gap, hover zoom */}
      <section className="bg-white" data-header-theme="dark">
        <div className="flex gap-5">
          {topImages.map((img, i) => (
            <div key={i} className="flex-1 relative h-[45vw] lg:h-[601px] overflow-hidden group">
              <div className="absolute inset-0 scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Three-column images — 80px padding, hover zoom */}
      <section className="bg-white px-5 lg:px-20 py-5 lg:py-20" data-header-theme="dark">
        <div className="flex gap-5">
          {bottomImages.map((img, i) => (
            <div key={i} className="flex-1 relative h-[35vw] lg:h-[601px] overflow-hidden group">
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

      <InquiryForm source="Restaurant Consulting" variant="dark" />

      <Footer />
    </main>
  );
}
