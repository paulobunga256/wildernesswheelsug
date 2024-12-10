import axios from "axios";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

export const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  try {
    const response = await axios.post(
      SENDGRID_API_URL,
      {
        personalizations: [
          {
            to: [{ email: to }],
            subject: subject,
          },
        ],
        from: { email: "info@wildernesswheelsug.com" },
        content: [{ type: "text/html", value: htmlContent }],
      },
      {
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error sending email via SendGrid:", error);
    throw error;
  }
};
