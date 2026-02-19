"use client";

import { useActionState } from "react";
import { submitInquiry } from "@/app/actions/submitInquiry";
import FormField from "./FormField";
import BracketButton from "@/components/ui/BracketButton";

interface InquiryFormProps {
  source: string;
  variant?: "light" | "dark";
}

export default function InquiryForm({
  source,
  variant = "dark",
}: InquiryFormProps) {
  const [state, formAction, isPending] = useActionState(submitInquiry, {
    success: false,
    message: "",
  });

  const bgClass = variant === "dark" ? "bg-white text-charcoal" : "bg-off-black text-white";

  return (
    <section
      className={`${bgClass} py-(--spacing-section) px-6`}
      data-header-theme={variant === "dark" ? "dark" : "light"}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-garamond)] text-[clamp(1.5rem,2.5vw,1.8125rem)] mb-12">
          Inquire Now
        </h2>

        <form action={formAction}>
          <input type="hidden" name="source" value={source} />
          {/* Honeypot for spam */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <FormField label="First name" name="firstName" required variant={variant} />
            <FormField label="Last name" name="lastName" required variant={variant} />
            <FormField label="Email address" name="email" type="email" required variant={variant} />
            <FormField label="Phone number" name="phone" type="tel" variant={variant} />
          </div>

          <FormField
            label="Nature of the event"
            name="natureOfEvent"
            type="select"
            variant={variant}
            options={[
              { value: "business", label: "Business" },
              { value: "client-appreciation", label: "Client appreciation event" },
              { value: "staff-party", label: "Staff party" },
              { value: "friends-activity", label: "Friends activity" },
              { value: "other", label: "Other" },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <FormField label="Date" name="date" type="date" variant={variant} />
            <FormField label="Time of event" name="time" type="time" variant={variant} />
            <FormField label="Event location" name="eventLocation" variant={variant} />
            <FormField label="How many guests total" name="guestCount" type="number" variant={variant} />
            <FormField
              label="Is it a standing or sit down event"
              name="seatingType"
              type="select"
              variant={variant}
              options={[
                { value: "standing", label: "Standing" },
                { value: "sit-down", label: "Sit-down" },
              ]}
            />
            <FormField
              label="Interested in food pairings"
              name="foodPairings"
              type="select"
              variant={variant}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "maybe", label: "Maybe" },
              ]}
            />
          </div>

          <FormField label="Additional comments" name="additionalComments" type="textarea" variant={variant} />

          <div className="mt-8 flex justify-center">
            <BracketButton type="submit" disabled={isPending} variant={variant === "dark" ? "dark" : "light"}>
              {isPending ? "[ SENDING... ]" : "[ SUBMIT FORM ]"}
            </BracketButton>
          </div>

          {state.message && (
            <p
              className={`mt-6 text-center font-[family-name:var(--font-roboto-mono)] text-[0.8125rem] ${
                state.success ? "text-green-600" : "text-red-500"
              }`}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
