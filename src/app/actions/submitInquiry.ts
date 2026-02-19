"use server";

interface FormState {
  success: boolean;
  message: string;
}

export async function submitInquiry(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot check
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    return { success: false, message: "Something went wrong. Please try again." };
  }

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const source = formData.get("source") as string;
  const natureOfEvent = formData.get("natureOfEvent") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;
  const eventLocation = formData.get("eventLocation") as string;
  const guestCount = formData.get("guestCount") as string;
  const seatingType = formData.get("seatingType") as string;
  const foodPairings = formData.get("foodPairings") as string;
  const additionalComments = formData.get("additionalComments") as string;

  // Validation
  if (!firstName || !lastName || !email) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Send email via Resend
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variables");
      return { success: false, message: "Configuration error. Please contact us directly." };
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Cuvée Club <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Inquiry from ${firstName} ${lastName} — ${source}`,
      html: `
        <h2>New Inquiry from ${source}</h2>
        <table style="border-collapse:collapse;width:100%;">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Nature of Event</td><td style="padding:8px;border-bottom:1px solid #eee;">${natureOfEvent || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${date || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Time</td><td style="padding:8px;border-bottom:1px solid #eee;">${time || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Event Location</td><td style="padding:8px;border-bottom:1px solid #eee;">${eventLocation || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Guest Count</td><td style="padding:8px;border-bottom:1px solid #eee;">${guestCount || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Seating Type</td><td style="padding:8px;border-bottom:1px solid #eee;">${seatingType || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Food Pairings</td><td style="padding:8px;border-bottom:1px solid #eee;">${foodPairings || "N/A"}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Additional Comments</td><td style="padding:8px;border-bottom:1px solid #eee;">${additionalComments || "N/A"}</td></tr>
        </table>
      `,
    });

    return { success: true, message: "Thank you! Your inquiry has been submitted successfully." };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to submit. Please try again or contact us directly." };
  }
}
