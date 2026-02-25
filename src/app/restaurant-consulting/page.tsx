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
    width={76}
    height={144}
    className="w-10 h-auto lg:w-20 opacity-90"
  />
);

export default function RestaurantConsultingPage() {
  return (
    <main>
      <HeroSection
        imageSrc="/restaurant-consulting-hero.png"
        imageAlt="Restaurant consulting"
        title="Restaurant Consulting"
        subtitle="For restaurants who want to elevate their wine programs, make it an integral part of their profitability and their guest experience."
        ctaText="[ BOOK ]"
        ctaHref="/booking"
        icon={<WineIcon />}
      />

      <ServiceIntro
        heading="Industry Experience"
        body={
          <>
            <p>With eight years of experience as a Wine Director and sommelier, and over seventeen years in the restaurant industry, I bring operational expertise and understand the challenges restaurants face. I have managed wine lists ranging from 50 to over 500 labels across fine-dining restaurants, hotels, casual establishments, and wine bars.</p>
            <p>My approach is both creative and results-driven. I consistently increase wine sales, deliver precise inventory management, and strengthen overall program performance. Through guided tastings and staff seminars, I elevate team confidence and wine literacy, translating directly to improved guest engagement and higher check averages.</p>
            <p>If you are looking to refine your wine program, develop staff education, optimize or restructure your inventory, or reposition your list with intention, I would be pleased to connect.</p>
          </>
        }
        ctaText="[ BOOK ]"
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
