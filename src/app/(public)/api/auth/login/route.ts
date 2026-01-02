import { prisma } from "@/app/(public)/lib/prisma";
import { cookies } from "next/headers";


export async function POST(req: Request) {
  const { email, password } = await req.json();

  // find user by email
  const user = await prisma.user.findUnique({
    where : {email},
  })

  if (!user) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // plain text password comparison
  if (user.password !== password) {
    return Response.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // save role in cookie
  (await cookies()).set("role", user.role, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });


  // success
  return Response.json({
    message: "login success",
    role: user.role, // ADMIN or USER
  });
}
