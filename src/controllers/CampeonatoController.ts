import { Request, Response } from 'express';
import { prismaError } from '../middlewares/errors/prisma_errors';
import { CampeonatoRepository } from '../repositories/CampeonatoRepository';

export class CampeonatoController {
  async filter(request: Request, response: Response) {
    try {
      const repository = new CampeonatoRepository();
      const campeonato = await repository.filterCampeonato(request.body);
      response.status(200).send(campeonato);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async showMy(request: Request, response: Response) {
    try {
      const repository = new CampeonatoRepository();
      const campeonato = await repository.getMyCampeonato(request.body._id);
      response.status(200).send(campeonato);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async show(request: Request, response: Response) {
    try {
      const repository = new CampeonatoRepository();
      const campeonato = await repository.getById(Number(request.params.id));

      if ('status' in campeonato) {
        response.status(400).send(campeonato.message);
      } else {
        response.status(200).send(campeonato);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async store(request: Request, response: Response) {
    try {
      const repository = new CampeonatoRepository();
      const campeonato = await repository.createCampeonato(request.body);
      response.status(201).send(campeonato);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async update(request: Request, response: Response) {
    try {
      const repository = new CampeonatoRepository();
      const campeonato = await repository.updateCampeonato(
        Number(request.params.id),
        request.body,
      );
      response.status(200).send(campeonato);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      const repository = new CampeonatoRepository();
      const campeonato = await repository.deleteCampeonato(
        Number(request.params.id),
        request.body._id,
      );
      response.status(200).send(campeonato);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }
}
