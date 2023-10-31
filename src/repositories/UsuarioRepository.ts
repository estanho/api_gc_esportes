import { prismaClient as prisma } from '../database/prismaClient';
import { typeUsuarioCreation } from '../validations/usuario_validation';

export class UsuarioRepository {
  async createUser(data: typeUsuarioCreation) {
    const user = await prisma.usuario.create({
      data,
      select: {
        id: true,
      },
    });

    return user;
  }

  async findId(id: number) {
    const user = await prisma.usuario.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    return user;
  }

  async findEmail(email: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        nome: true,
        avatar: true,
      },
    });

    return user;
  }

  async findUsuario(email: string) {
    const user = await prisma.usuario.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        nome: true,
        avatar: true,
      },
    });

    if (user === null) {
      return {
        status: 'error',
        message: {
          errors: [
            {
              field: '',
              type: 'prisma',
              message: 'Record not found.',
            },
          ],
        },
      };
    }

    return user;
  }

  async updateUser(data: typeUsuarioCreation) {
    const { email, ...newData } = data;
    await prisma.usuario.update({ where: { email }, data: newData });
  }
}
