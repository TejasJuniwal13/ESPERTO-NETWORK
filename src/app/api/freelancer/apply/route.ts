// export const runtime = "nodejs";

// import cloudinary from "@/app/lib/cloudinary";
// import { prisma } from "@/app/lib/prisma";
// import { resend } from "@/app/lib/resend";
// import { error } from "console";
// import { NextResponse } from "next/server";


// export async function POST(req: Request) {
//   try {
//     const data = await req.formData();

//     const name = data.get("name") as string;
//     const email = data.get("email") as string;
//     const phone = data.get("phone") as string;
//     const skills = data.get("skills") as string;
//     const state = data.get("state") as string;
//     const city = data.get("city") as string;
//     const resume = data.get("resume") as File | null;

//     // ----------- Validation -----------
//     if (!name || !email || !phone || !skills || !state || !city || !resume) {
//       return NextResponse.json(
//         { message: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     if (resume.type !== "application/pdf") {
//       return NextResponse.json(
//         { message: "Resume must be a PDF file" },
//         { status: 400 }
//       );
//     }

//      // -------- Upload resume to Cloudinary --------
//     const buffer = Buffer.from(await resume.arrayBuffer());

//     const resumeUrl: string = await new Promise((resolve, reject) => {
//       const upload = cloudinary.uploader.upload_stream(
//         {
//           folder: "freelancer-resumes",
//           resource_type: "raw"
//         },
//         (err, result) => {
//           if (err) reject(err);
//           else resolve(result?.secure_url as string);
//         }
//       );
//       upload.end(buffer);
//     });


//     // ----------- Save to database -----------
//     await prisma.freelancer.create({
//       data: {
//         name,
//         email,
//         phone,
//         skills,
//         state,
//         city,
//         resumeUrl,
//         status: "PENDING",
//       },
//     });

//     // ----------- Send thank you email -----------
//     await resend.emails.send({
//       from: process.env.FROM_EMAIL!,
//       to: email,
//       subject: "Thanks for contacting us",
//       html: `
//         <h2>Hello ${name},</h2>
//         <p>Thanks for submitting your freelancer application.</p>
//         <p>Our team will review your profile and reach out to you shortly.</p>
//         <br/>
//         <p>Best Regards,</p>
//         <p><strong>Support Team</strong></p>
//       `,
//     });

//     return NextResponse.json(
//       { message: "Application submitted & email sent" },
//       { status: 201 }
//     );
//   } catch (err:any) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Server error" , error:err.message },
//       { status: 500 }
//     );
//   }
// }



export const runtime = "nodejs";

import cloudinary from "@/app/lib/cloudinary";
import {prisma} from "@/app/lib/prisma";
import { resend } from "@/app/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const skills = data.get("skills") as string;
    const state = data.get("state") as string;
    const city = data.get("city") as string;
    const resume = data.get("resume") as File | null;

    if (!name || !email || !phone || !skills || !state || !city || !resume) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (resume.type !== "application/pdf") {
      return NextResponse.json({ message: "Resume must be a PDF" }, { status: 400 });
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const resumeUrl: string = await new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        { folder: "freelancer-resumes", resource_type: "raw" },
        (err, result) => err ? reject(err) : resolve(result!.secure_url)
      );
      upload.end(buffer);
    });

    await prisma.freelancer.create({
      data: {
        name,
        email,
        phone,
        skills,
        state,
        city,
        resumeUrl,
        status: "PENDING"
      }
    });

    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: "Thanks for contacting us",
      html: `<h2>Hello ${name}</h2><p>We received your application.</p>`
    });

    return NextResponse.json({ message: "Application submitted" }, { status: 201 });

  } catch (err: any) {
    console.error("BACKEND ERROR >>>", err);
    return NextResponse.json(
      { message: "Server error", error: err?.message ?? err },
      { status: 500 }
    );
  }
}
