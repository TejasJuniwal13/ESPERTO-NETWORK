import { prisma } from "@/app/(public)/lib/prisma";


export async function POST(req: Request) {
  const { id } = await req.json();

  const freelancer = await prisma.freelancer.findUnique({
    where: { id },
  });

  if (!freelancer) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  // move to employees
  await prisma.employee.create({
    data: {
      name: freelancer.name,
      email: freelancer.email,
      phone: freelancer.phone,
      skills: freelancer.skills,
      resumeUrl: freelancer.resumeUrl,
    },
  });

  // delete from freelancer table
  await prisma.freelancer.delete({
    where: { id },
  });

  // TODO: send email here (approve email)

  return Response.json({ success: true });
}