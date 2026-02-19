import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Cuvée Club terms and conditions for wine tasting events, consulting services, and bookings.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="bg-white text-charcoal pt-32 pb-(--spacing-section) px-6" data-header-theme="dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-garamond)] text-[clamp(2rem,4vw,3rem)] mb-10">
            Terms &amp; Conditions
          </h1>

          <div className="font-[family-name:var(--font-roboto-mono)] text-[0.8125rem] leading-relaxed tracking-wide text-charcoal/80 space-y-6">
            <p>
              <strong>Effective Date:</strong> January 1, 2026
            </p>

            <p>
              By using the Cuvée Club website and services, you agree to the following terms and conditions.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Services</h2>
            <p>
              Cuvée Club provides wine tasting experiences, restaurant consulting, and private sommelier services. All services are subject to availability and confirmation.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Bookings &amp; Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bookings are confirmed upon mutual agreement of date, time, and service details.</li>
              <li>Cancellations made less than 48 hours before the scheduled event may be subject to a cancellation fee.</li>
              <li>We reserve the right to cancel or reschedule events due to unforeseen circumstances.</li>
            </ul>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Alcohol Responsibility</h2>
            <p>
              All guests must be of legal drinking age. Cuvée Club promotes responsible consumption. We reserve the right to refuse service to anyone who appears intoxicated.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Liability</h2>
            <p>
              Cuvée Club is not liable for any personal injury, property damage, or loss incurred during events. Clients are responsible for providing a safe and accessible venue for services.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and logos, is the property of Cuvée Club and may not be reproduced without permission.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of our website and services constitutes acceptance of any changes.
            </p>

            <h2 className="font-[family-name:var(--font-garamond)] text-xl mt-8 mb-4">Contact</h2>
            <p>
              For questions about these terms, please contact us through our website contact form.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
