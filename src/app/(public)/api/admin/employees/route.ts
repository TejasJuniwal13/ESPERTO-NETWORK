import { prisma } from "@/app/(public)/lib/prisma";

export async function GET(){
    const employees = await prisma.employee.findMany({
        orderBy:{hiredAt: "desc"},
    });

    return Response.json(employees);

}