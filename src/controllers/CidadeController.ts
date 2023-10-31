import { Request, Response } from 'express';
import { prismaError } from '../middlewares/errors/prisma_errors';
import { CidadeRepository } from '../repositories/CidadeRepository';

export class CidadeController {
  async index(request: Request, response: Response) {
    try {
      const repository = new CidadeRepository();
      const cidade = await repository.getAll();
      response.status(200).send(cidade);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }
}
