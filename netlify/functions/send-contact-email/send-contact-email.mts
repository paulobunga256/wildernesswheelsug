import { Context } from "@netlify/functions";
import { sendEmail } from "@netlify/emails";

// Interface for email payload
interface EmailPayload {
  subject: string;
  template: string;
  parameters: {
    fullName: string;
    email: string;
    message: string;
  };
}

export default async (request: Request, context: Context) => {
  // Only allow POST requests
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: "POST",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  try {
    // Parse JSON payload
    const emailPayload: EmailPayload = await request.json();

    // Validate required fields
    const requiredFields: (keyof EmailPayload)[] = [
      "subject",
      "template",
      "parameters",
    ];

    const missingFields = requiredFields.filter(
      (field) =>
        !emailPayload[field] ||
        (field === "parameters" &&
          Object.keys(emailPayload[field]).length === 0)
    );

    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields",
          missingFields: missingFields,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Send email using Netlify Emails
    try {
      await sendEmail({
        from: "info@wildernesswheelsug.com",
        to: "info@wildernesswheelsug.com",
        subject: emailPayload.subject,
        template: emailPayload.template,
        parameters: emailPayload.parameters,
      });
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return new Response(
        JSON.stringify({
          error: "Failed to send email",
          details:
            emailError instanceof Error
              ? emailError.message
              : "Unknown email error",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Email submission error:", error);

    // Generic error response
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};

// Handle CORS preflight requests
export async function options(request: Request, context: Context) {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export const config = {
  method: ["POST", "OPTIONS"],
};
