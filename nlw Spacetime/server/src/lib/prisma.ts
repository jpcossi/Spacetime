import { PrismaClient } from "@prisma/client"


// conection with database
export const prisma = new PrismaClient({
  log: ['query'],
})