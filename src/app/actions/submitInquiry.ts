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
      to: contactEmail.split(",").map((e) => e.trim()),
      replyTo: email,
      subject: `New Inquiry from ${firstName} ${lastName} — ${source}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f7f5ef;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f5ef;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:2px;">
          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a1a;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:normal;letter-spacing:2px;">Cuvée Club</h1>
            </td>
          </tr>
          <!-- Title -->
          <tr>
            <td style="padding:32px 40px 16px;">
              <h2 style="margin:0;color:#66242e;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:normal;">New Inquiry</h2>
              <p style="margin:8px 0 0;color:#888;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;">${source}</p>
            </td>
          </tr>
          <!-- Details -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ["Name", `${firstName} ${lastName}`],
                  ["Email", email],
                  ["Phone", phone],
                  ["Nature of Event", natureOfEvent],
                  ["Date", date],
                  ["Time", time],
                  ["Event Location", eventLocation],
                  ["Guest Count", guestCount],
                  ["Seating Type", seatingType],
                  ["Food Pairings", foodPairings],
                  ["Additional Comments", additionalComments],
                ]
                  .filter(([, val]) => val)
                  .map(
                    ([label, val]) => `
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;color:#999;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;letter-spacing:1px;text-transform:uppercase;width:160px;vertical-align:top;">${label}</td>
                  <td style="padding:12px 0;border-bottom:1px solid #eee;color:#1a1a1a;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;">${val}</td>
                </tr>`
                  )
                  .join("")}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#faf9f6;text-align:center;border-top:1px solid #eee;">
              <p style="margin:0;color:#999;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;">This inquiry was submitted via cuveeclub.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return { success: true, message: "Thank you! Your inquiry has been submitted successfully." };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, message: "Failed to submit. Please try again or contact us directly." };
  }
}
