import { prismaClient as prisma } from '../database/prismaClient';

export class CidadeRepository {
  async getAll() {
    const cidade = await prisma.cidade.findMany({
      orderBy: {
        nome: 'asc',
      },
    });
    return { cidades: cidade };
  }
}
