import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cuvée Club privacy policy regarding the collection and use of personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-white text-charcoal pt-32 pb-(--spacing-section) px-6" data-header-theme="dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-garamond)] text-[clamp(2rem,4vw,3rem)] mb-10">
            Privacy Policy
          </h1>

          <div className="font-[family-name:var(--font-roboto-mono)] text-[0.8125rem] leading-relaxed tracking-wide text-charcoal/80 space-y-6">
            <p>
              <strong>Effective Date:</strong> January 1, 2026
            </p>

            <p>
              Cuvée Club (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you interact with our website and services.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following personal information when you submit an inquiry form or book a service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Event details including date, location, and guest count</li>
              <li>Any additional information you provide in your inquiry</li>
            </ul>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">How We Use Your Information</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and booking requests</li>
              <li>Provide our wine tasting, consulting, and sommelier services</li>
              <li>Communicate with you about your event or booking</li>
              <li>Improve our services and website experience</li>
            </ul>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Data Sharing</h2>
            <p>
              We do not sell, trade, or share your personal information with third parties except as required to provide our services (such as email delivery providers) or as required by law.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of electronic transmission or storage is completely secure.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Cookies</h2>
            <p>
              Our website may use cookies to improve your browsing experience. You can disable cookies through your browser settings.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Contact</h2>
            <p>
              For questions about this privacy policy, please contact us through our website contact form.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
