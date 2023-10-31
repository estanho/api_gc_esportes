import { Request, Response } from 'express';
import { prismaError } from '../middlewares/errors/prisma_errors';
import { EquipeRepository } from '../repositories/EquipeRepository';

export class EquipeController {
  async filter(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.filterEquipe(request.body);
      response.status(200).send(equipe);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async showMy(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.getMyEquipe(request.body._id);
      response.status(200).send(equipe);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async show(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.getById(Number(request.params.id));

      if ('status' in equipe) {
        response.status(400).send(equipe.message);
      } else {
        response.status(200).send(equipe);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async store(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.createEquipe(request.body);

      if ('status' in equipe) {
        response.status(400).send(equipe.message);
      } else {
        response.status(201).send(equipe);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async storeMembro(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.addMembro(
        Number(request.params.id),
        request.body,
      );

      if ('status' in equipe) {
        response.status(400).send(equipe.message);
      } else {
        response.status(201).send(equipe);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async detroyMembro(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.removeMembro(
        Number(request.params.id),
        request.body,
      );

      if ('status' in equipe) {
        response.status(400).send(equipe.message);
      } else {
        response.status(200).send(equipe);
      }
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async update(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.updateEquipe(
        Number(request.params.id),
        request.body,
      );
      response.status(200).send(equipe);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }

  async destroy(request: Request, response: Response) {
    try {
      const repository = new EquipeRepository();
      const equipe = await repository.deleteEquipe(
        Number(request.params.id),
        request.body._id,
      );
      response.status(200).send(equipe);
    } catch (error) {
      response.status(400).send(prismaError(error));
    }
  }
}
