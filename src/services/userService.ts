import { prisma } from '@/libs/prisma'

export async function getAllUsers() {
  return prisma.user.findMany();
}
