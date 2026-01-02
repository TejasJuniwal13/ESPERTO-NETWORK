import { prisma } from "@/app/(public)/lib/prisma";


export async function POST(req: Request) {
  const { id } = await req.json();

  const freelancer = await prisma.freelancer.findUnique({
    where: { id },
  });

  if (!freelancer) return Response.json({ error: "Not found" });

  await prisma.freelancer.delete({
    where: { id },
  });

  // TODO: send rejection email

  return Response.json({ success: true });
}