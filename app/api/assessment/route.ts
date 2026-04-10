import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, yesCount, answers } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: wire up email delivery (Resend or similar) when ready
    console.log("Assessment submission:", { name, email, yesCount, answers });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Assessment form error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
