import type { Metadata } from "next";
import Image from "next/image";
import InquiryForm from "@/components/forms/InquiryForm";
import { blurPlaceholders } from "@/lib/blur-placeholders";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cuvée Club. Inquire about wine tastings, consulting services, or private sommelier experiences.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row">
        {/* Left: Image — fills full height of the form content */}
        <div
          className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto lg:self-stretch overflow-hidden"
          data-header-theme="light"
        >
          <Image
            src="/contact-image.webp"
            alt="Contact Cuvée Club"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL={blurPlaceholders["/contact-image.webp"]}
          />
        </div>

        {/* Right: Form */}
        <div
          className="relative w-full lg:w-1/2 bg-white text-charcoal"
          data-header-theme="dark"
        >
          <InquiryForm source="Contact Page" variant="dark" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
