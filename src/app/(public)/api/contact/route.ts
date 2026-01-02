import { prisma } from "@/app/(public)/lib/prisma";
import { resend } from "@/app/(public)/lib/resend";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // 1️⃣ Validate
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    // 2️⃣ Store in Neon DB
    await prisma.contact.create({
      data: { name, email, subject, message },
    });

    // 3️⃣ Email to owner
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.OWNER_EMAIL!,
      subject: `New Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    // 4️⃣ Confirmation email to user
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},

Thanks for contacting us.
Our team will contact you soon.

Regards,
Team`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
