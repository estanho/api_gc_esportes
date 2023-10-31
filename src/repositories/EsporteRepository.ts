import { prismaClient as prisma } from '../database/prismaClient';

export class EsporteRepository {
  async getAll() {
    const esporte = await prisma.esporte.findMany({
      orderBy: {
        nome: 'desc',
      },
    });
    return { esportes: esporte };
  }
}
