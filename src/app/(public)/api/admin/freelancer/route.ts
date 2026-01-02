import { prisma } from "@/app/(public)/lib/prisma";

export async function GET() {
  const freelancers = await prisma.freelancer.findMany({
    orderBy: { createdAt: "desc" },
  });

  return Response.json(freelancers);
}