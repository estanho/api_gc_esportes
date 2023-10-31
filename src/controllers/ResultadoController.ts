import { Request, Response } from 'express';
import { prismaError } from '../middlewares/errors/prisma_errors';
import { ResultadoRepository } from '../repositories/ResultadoRepository';

export class ResultadoController {
  async filter(request: Request, response: Response) {
    try {
      const repository = new ResultadoRepository();
      const resultado = await repository.filterResultado(request.body);
      response.status(200).send(resultado);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async store(request: Request, response: Response) {
    try {
      const repository = new ResultadoRepository();
      const resultado = await repository.createResultado(request.body);

      if ('status' in resultado) {
        response.status(400).send(resultado.message);
      } else {
        response.status(201).send(resultado);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async update(request: Request, response: Response) {
    try {
      const repository = new ResultadoRepository();
      const resultado = await repository.updateResultado(
        Number(request.params.id),
        request.body,
      );
      if ('status' in resultado) {
        response.status(400).send(resultado.message);
      } else {
        response.status(200).send(resultado);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      const repository = new ResultadoRepository();
      const resultado = await repository.deleteResultado(
        Number(request.params.id),
        request.body._id,
      );
      response.status(200).send(resultado);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }
}
