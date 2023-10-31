import { Request, Response } from 'express';
import { prismaError } from '../middlewares/errors/prisma_errors';
import { EsporteRepository } from '../repositories/EsporteRepository';

export class EsporteController {
  async index(request: Request, response: Response) {
    try {
      const repository = new EsporteRepository();
      const esporte = await repository.getAll();
      response.status(200).send(esporte);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }
}
