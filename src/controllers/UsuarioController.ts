import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { prismaError } from '../middlewares/errors/prisma_errors';
import { UsuarioRepository } from '../repositories/UsuarioRepository';

export class UsuarioController {
  async login(req: Request, res: Response) {
    try {
      const repository = new UsuarioRepository();
      const { id_google, nome, avatar, email } = req.body;
      const user = await repository.findEmail(email);

      if (!user) {
        // User não existe.
        const user = { id_google, nome, avatar, email };
        const userCreated = await repository.createUser(user);

        const token = jwt.sign(
          { id: userCreated.id },
          process.env.JWT_SECRET_TOKEN as string,
          {
            expiresIn: '7d',
          },
        );

        res.status(201).send({
          id_usuario: userCreated.id,
          token: token,
        });
      } else {
        // User existe.
        const userUpdated = { id_google, nome, avatar, email };
        await repository.updateUser(userUpdated);

        const token = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET_TOKEN as string,
          {
            expiresIn: '7d',
          },
        );

        res.status(200).send({
          id_usuario: user.id,
          token: token,
        });
      }
    } catch (error) {
      res.status(400).send(prismaError(error));
    }
  }

  async test(req: Request, res: Response) {
    try {
      res.status(200).send({ autenticado: 'ok' });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async show(request: Request, response: Response) {
    try {
      const repository = new UsuarioRepository();
      const usuario = await repository.findUsuario(request.body.email);

      if ('status' in usuario) {
        response.status(400).send(usuario.message);
      } else {
        response.status(200).send(usuario);
      }
    } catch (error) {
      response.status(400).send(error);
    }
  }
}
