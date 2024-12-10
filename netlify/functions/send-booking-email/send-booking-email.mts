import { Context } from "@netlify/functions";
import { sendEmail } from "@netlify/emails";

export default async (request: Request, context: Context) => {
  try {
    let from,
      to,
      subject,
      firstName,
      lastName,
      email,
      phone,
      startDate,
      endDate,
      includeTourGuide,
      totalCost;

    if (request.method === "POST") {
      const body = await request.json();
      from = "info@wildernesswheelsug.com";
      to = "info@wildernesswheelsug.com";
      subject = body.subject;
      firstName = body.firstName || "John";
      lastName = body.lastName || "Doe";
      email = body.email || "john.doe@example.com";
      phone = body.phone || "123-456-7890";
      startDate = body.startDate || "2023-01-01";
      endDate = body.endDate || "2023-01-07";
      includeTourGuide = body.includeTourGuide || "No";
      totalCost = body.totalCost || "$1000";
    } else {
      const url = new URL(request.url);
      from = url.searchParams.get("from") || "default@example.com";
      to = url.searchParams.get("to") || "recipient@example.com";
      subject = url.searchParams.get("subject") || "Booking Confirmation";
      firstName = url.searchParams.get("firstName") || "John";
      lastName = url.searchParams.get("lastName") || "Doe";
      email = url.searchParams.get("email") || "john.doe@example.com";
      phone = url.searchParams.get("phone") || "123-456-7890";
      startDate = url.searchParams.get("startDate") || "2023-01-01";
      endDate = url.searchParams.get("endDate") || "2023-01-07";
      includeTourGuide = url.searchParams.get("includeTourGuide") || "No";
      totalCost = url.searchParams.get("totalCost") || "$1000";
    }

    await sendEmail({
      from,
      to,
      subject,
      template: "bookings",
      parameters: {
        firstName,
        lastName,
        email,
        phone,
        startDate,
        endDate,
        includeTourGuide,
        totalCost,
      },
    });

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    return new Response(error.toString(), { status: 500 });
  }
};
