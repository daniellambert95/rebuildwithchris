import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CHRIS_EMAIL ?? "chris@rebuildwithchris.com";

const questions = [
  "Do you use cocaine more often or in larger amounts than you intend to?",
  "Do you feel a strong urge or craving to use cocaine?",
  "Do you use cocaine to cope with stress, pressure, or emotions?",
  "Have you tried to cut down or stop using cocaine but couldn't?",
  "Do you feel anxious, low, irritable, or exhausted after using?",
  "Do you need more cocaine than before to get the same effect?",
  "Have you hidden, minimised, or lied about your cocaine use?",
  "Has cocaine affected your sleep, appetite, or mental health?",
  "Have relationships, work, or responsibilities suffered because of your use?",
  "Do you keep using even though you know it's harming you?",
  "Do you feel flat, unmotivated, or disconnected when you're not using?",
  "Do you worry about where your cocaine use is heading?",
];

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, yesCount, answers } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const answersHtml = questions
      .map((q, i) => {
        const ans = answers?.[i];
        const label = ans === true ? "YES" : ans === false ? "NO" : "—";
        const color = ans === true ? "#8b1a1a" : "#c9a84c";
        return `
          <tr>
            <td style="padding: 6px 0; color: #a09080; font-size: 13px; vertical-align: top; padding-right: 12px; width: 30px;">
              <span style="color: ${color}; font-weight: bold;">${label}</span>
            </td>
            <td style="padding: 6px 0; color: #c4b49a; font-size: 13px;">${q}</td>
          </tr>`;
      })
      .join("");

    await resend.emails.send({
      from: "RebuildWithChris Assessment <noreply@rebuildwithchris.com>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Assessment Results — ${name} (${yesCount}/12 YES)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0b; color: #f0e6d3; padding: 32px;">
          <h2 style="color: #c9a84c; font-size: 24px; margin-bottom: 8px;">Assessment Submission — RebuildWithChris</h2>
          <p style="color: #8b1a1a; font-size: 20px; font-weight: bold; margin-bottom: 24px;">${yesCount}/12 YES answers</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #a09080; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #f0e6d3;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #a09080;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
            </tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #a09080;">Phone</td><td style="padding: 8px 0; color: #f0e6d3;">${phone}</td></tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #8b1a1a30; margin: 24px 0;" />

          <h3 style="color: #c9a84c; font-size: 16px; margin-bottom: 16px;">Assessment Answers</h3>
          <table style="width: 100%; border-collapse: collapse;">
            ${answersHtml}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Assessment email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
