
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
  return await prisma.funko_tabela.findMany({
    orderBy: { name: 'asc' }
  });
};

export const findById = async (id) => {
  return await prisma.funko_tabela.findUnique({
    where: { id: Number(id) },
  });
};