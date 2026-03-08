import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export function middleware(request: NextRequest) {
  console.log("\nmiddleware3 trigerred \n")
  // const role = request.cookies.get("role")?.value;
  const token = request.cookies.get("accessToken")?.value;

  if(!token){
    return NextResponse.redirect(new URL("/login" , request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET);
    const {payload} =  jwtVerify(token,secret);
    const path = request.nextUrl.pathname;
    
      // protect admin routes
      if (path.startsWith("/admin")) {
        if (payload.role !== "ADMIN") {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
    
      // protect user portal
      if (path.startsWith("/portal")) {
        if (!payload.role) {
          return NextResponse.redirect(new URL("/login", request.url));
        }
      }
  } catch (error) {
    
  }


  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/portal/:path*"],
};
