import jwt from "jsonwebtoken";


const ACCESS_TOKEN_EXPIRY = "15m";
const REFRESH_TOKEN_EXPIRY = "7d";

export async function generateAccessToken(userId: number, role: string , email:string) {
  return jwt.sign(
    { userId, role, email },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
}

export async function generateRefreshToken(userId: number) {
  return jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
}