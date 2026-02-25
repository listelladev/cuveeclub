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
            src="/about-image.webp"
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

          <div className="font-[family-name:var(--font-roboto-mono)] text-[clamp(0.75rem,1vw,0.875rem)] leading-relaxed tracking-wide text-charcoal mb-10 space-y-5">
            <p>Cuvée Club is the result of over seventeen years in hospitality, shaped by curiosity and a deep respect for service.</p>
            <p>Originally from rural Quebec, I moved to Montreal to begin my career in fine dining. As one of the youngest members among seasoned professionals, I keep learning and refine my craft while continuing my formal studies.</p>
            <p>My passion for hospitality grew, along with an increasing interest to better understand wine. I chose to leave university to study at the Institut de Tourisme et d&apos;Hôtellerie du Québec, one of Montreal&apos;s most respected hospitality institutions. This decision led me to places such as Fogo Island Inn in Newfoundland (3 Michelin Keys, Relais &amp; Châteaux) and l&apos;Hostellerie Le Cèdre in Beaune, France (1 Michelin Star). In Burgundy, I immersed myself fully in the art of sommellerie, tasting and studying some of the world&apos;s most iconic wines.</p>
            <p>Returning to Montreal, I joined Pullman, the city&apos;s pioneering wine bar, before contributing to the opening of Vinvinvin, a low-intervention wine bar that quickly became a reference point for the city&apos;s evolving wine culture. Vinvinvin was later recognized by Eric Asimov of The New York Times as a destination for wine lovers visiting Montreal.</p>
            <p>In 2021, I relocated to Vancouver, where I led the wine programs at Di Beppe and Tutto. There, I curated extensive Italian-focused wine lists and designed experience-driven tastings that elevated both guest engagement and team expertise.</p>
            <p>Alongside my professional experience, I have continued my formal training through the WSET and the Court of Master Sommeliers.</p>
            <p>Today, with Cuvée Club, I share my passion for wine and storytelling with like-minded individuals who value connection and thoughtful experiences.</p>
          </div>

          <BracketButton href="/booking" variant="dark" className="self-start">
            [ BOOK ]
          </BracketButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
