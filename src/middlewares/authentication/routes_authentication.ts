import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { UsuarioRepository } from '../../repositories/UsuarioRepository';

interface JwtPayload {
  id: number;
}

export class routesAuthentication {
  async auth(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        console.log('Erro Autenticação: Não foi encontrado token');
        throw new Error();
      } else {
        if (process.env.API_AUTH_DEBUG === 'TRUE') {
          req.body._id = 1;
          next();
        } else {
          const token = authorization.split(' ')[1];

          const { id } = jwt.verify(
            token,
            process.env.JWT_SECRET_TOKEN as string,
          ) as JwtPayload;

          const user = await new UsuarioRepository().findId(id);
          req.body._id = id;

          if (!user) {
            console.log('Erro Autenticação: Não foi encontrado usuario');
            throw new Error();
          } else {
            next();
          }
        }
      }
    } catch (error) {
      return res.status(401).json({
        errors: [
          {
            field: '',
            type: 'authentication',
            message: 'Unauthorized action!',
          },
        ],
      });
    }
  }
}
