import { generateAccessToken, generateRefreshToken } from "@/app/(public)/lib/hash";
import { prisma } from "@/app/(public)/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {

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
  
  const accessToken = await generateAccessToken(user.id , user.role , user.email);
  const refreshToken = await generateRefreshToken(user.id);
  
  const response  = NextResponse.json(
    {
      accessToken:accessToken,
      refreshToken:refreshToken,
      role:user.role
    },
    {status:200}
  );
  
  // save role in cookie
  response.cookies.set("role", user.role, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
  
  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 15 * 60, // 15 minutes
  });
  
  
  // set refresh token in HTTP-only cookies 
  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 // 7 days,
  });
  
  
  
  // success
  return response;

} catch (error) {
  console.log(error);
}
  
}
