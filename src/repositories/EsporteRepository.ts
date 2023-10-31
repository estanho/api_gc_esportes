import { prismaClient as prisma } from '../database/prismaClient';

export class EsporteRepository {
  async getAll() {
    const esporte = await prisma.esporte.findMany();
    return { esportes: esporte };
  }
}
