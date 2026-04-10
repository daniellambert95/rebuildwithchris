import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CHRIS_EMAIL ?? "chris@rebuildwithchris.com";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "RebuildWithChris Website <noreply@rebuildwithchris.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0b; color: #f0e6d3; padding: 32px;">
          <h2 style="color: #c9a84c; font-size: 24px; margin-bottom: 24px;">New Enquiry — RebuildWithChris</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #a09080; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #f0e6d3;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a09080;">Email</td>
              <td style="padding: 8px 0; color: #f0e6d3;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a09080;">Phone</td>
              <td style="padding: 8px 0; color: #f0e6d3;">${phone}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #8b1a1a30; margin: 24px 0;" />
          <h3 style="color: #c9a84c; font-size: 16px; margin-bottom: 12px;">Message</h3>
          <p style="color: #c4b49a; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
