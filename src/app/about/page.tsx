import type { Metadata } from "next";
import Image from "next/image";
import BracketButton from "@/components/ui/BracketButton";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the sommelier behind Cuvée Club. 8+ years of experience delivering elevated yet approachable wine experiences.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Image — fills full height, shows face/top of image */}
        <div
          className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto lg:self-stretch overflow-hidden"
          data-header-theme="light"
        >
          <Image
            src="/about-image.png"
            alt="Cuvée Club sommelier"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right: Content */}
        <div
          className="relative w-full lg:w-1/2 bg-white text-charcoal flex flex-col justify-center px-10 lg:px-16 py-16 lg:py-24"
          data-header-theme="dark"
        >
          <h1 className="font-[family-name:var(--font-garamond)] text-[clamp(1.6rem,3vw,1.8125rem)] mb-8">
            About Me
          </h1>

          <p className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1vw,0.875rem)] leading-relaxed tracking-wide text-charcoal mb-10">
            I come to my clients. They don&apos;t have to drive anywhere and pay
            mark-ups. I am an independent business owner, meaning I won&apos;t
            be biased by brands or sales goals. You can stay in the comfort of
            your home or offices and have me come to you. Wines, glassware,
            water bottles and note pads are included. I bring 8+ years of
            experience as a professional sommelier. I deliver customized
            experiences that are elevated yet approachable.
          </p>

          <BracketButton href="/booking" variant="dark" className="self-start">
            [ BOOK HOST ]
          </BracketButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
