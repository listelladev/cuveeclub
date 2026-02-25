import Link from "next/link";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main>
      <section className="bg-white text-charcoal pt-32 pb-(--spacing-section) px-6" data-header-theme="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-garamond)] text-[clamp(2rem,4vw,3rem)] mb-6">
            404
          </h1>
          <p className="font-[family-name:var(--font-roboto-mono)] text-[0.875rem] leading-relaxed tracking-wide text-charcoal/80 mb-10">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block font-[family-name:var(--font-roboto-mono)] text-[0.75rem] uppercase tracking-[0.12em] border border-charcoal text-charcoal px-4 py-[14px] transition-all duration-300 hover:bg-charcoal hover:text-white"
          >
            [ Back to Home ]
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
