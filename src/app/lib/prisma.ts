import "dotenv/config"
import { PrismaClient } from "@/generated/client"
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const connectionString = `${process.env.DATABASE_URL}`;



const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({connectionString})

export const prisma =
  globalForPrisma.prisma || new PrismaClient({adapter});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}



// import { PrismaClient } from '@prisma/client'

// import { PrismaPg } from '@prisma/adapter-pg'
// import { Pool } from 'pg'

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// })

// const adapter = new PrismaPg(pool)

// export const prisma =
//   globalThis.prisma ??
//   new PrismaClient({
//     adapter
//   })

// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prisma = prisma
// }
