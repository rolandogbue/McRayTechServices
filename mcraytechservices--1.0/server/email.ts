import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmails({
  clientEmail,
  clientName,
  details,
}: {
  clientEmail: string;
  clientName: string;
  details: string;
}) {
  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: process.env.BUSINESS_EMAIL!,
    subject: "New Booking Received",
    html: `<p>${details}</p>`,
  });

  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: clientEmail,
    subject: "Your Booking is Confirmed",
    html: `<p>Hi ${clientName},<br/>Your booking is confirmed.</p>`,
  });
}
