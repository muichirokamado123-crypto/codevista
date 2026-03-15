import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.privateemail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export function buildContactEmail(data: ContactEmailData) {
  const contactEmail = process.env.CONTACT_EMAIL || "info@codevista.com";

  return {
    from: `"CodeVista Website" <${process.env.SMTP_USER || contactEmail}>`,
    to: contactEmail,
    replyTo: data.email,
    subject: `New Inquiry: ${data.service} — from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #e2e8f0;" />
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Name:</td>
            <td style="padding: 8px 0; color: #475569;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Email:</td>
            <td style="padding: 8px 0; color: #475569;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Phone:</td><td style="padding: 8px 0; color: #475569;">${data.phone}</td></tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Service:</td>
            <td style="padding: 8px 0; color: #475569;">${data.service}</td>
          </tr>
        </table>
        <h3 style="color: #1e293b; margin-top: 20px;">Message:</h3>
        <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        <hr style="border: 1px solid #e2e8f0; margin-top: 24px;" />
        <p style="color: #94a3b8; font-size: 12px;">This message was sent from the CodeVista website contact form.</p>
      </div>
    `,
  };
}
