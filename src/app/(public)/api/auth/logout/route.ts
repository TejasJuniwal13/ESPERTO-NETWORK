import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "logged out" });

  res.cookies.set("role", "", {
    maxAge: 0,
    name:" ",
    value:" ",
    path: "/",          // MUST match original cookie path
  });

  return res;
}

