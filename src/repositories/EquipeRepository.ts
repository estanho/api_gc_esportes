import { recoverName } from '../utils/convertData';
import { prismaClient as prisma } from '../database/prismaClient';
import {
  typeEquipeCreation,
  typeEquipeOptional,
} from '../validations/equipe_validation';
import { typeUsuarioFind } from '../validations/usuario_validation';

export class EquipeRepository {
  async filterEquipe(data: typeEquipeOptional) {
    let whereCondition = {};

    if (Object.keys(data).length > 1) {
      whereCondition = {
        ativo: true,
        campeonato: {
          ativo: true,
        },
        OR: [
          { nome: { contains: data.nome, mode: 'insensitive' } },
          { descricao: { contains: data.descricao, mode: 'insensitive' } },
          { id_esporte: data.id_esporte },
          { id_campeonato: data.id_campeonato },
        ],
      };
    } else {
      whereCondition = {
        ativo: true,
        campeonato: {
          ativo: true,
        },
      };
    }

    const equipe = await prisma.equipe.findMany({
      where: whereCondition,
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        usuarios: {
          select: {
            email: true,
          },
        },
        id_campeonato: true,
      },
    });

    const newEquipe = recoverName(equipe, 'many');

    return { equipes: newEquipe };
  }

  async getById(id: number) {
    const equipe = await prisma.equipe.findFirst({
      where: {
        id,
        ativo: true,
        campeonato: {
          ativo: true,
        },
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        usuarios: {
          select: {
            email: true,
          },
        },
        id_campeonato: true,
      },
    });

    if (equipe === null) {
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

    const newEquipe = recoverName(equipe, 'one');

    return newEquipe;
  }

  async getMyEquipe(_id: number) {
    const equipe = await prisma.equipe.findMany({
      where: {
        OR: [
          {
            ativo: true,
            campeonato: {
              ativo: true,
            },
            id_usuario: _id,
          },
          {
            usuarios: {
              some: {
                id: _id,
              },
            },
          },
        ],
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        usuarios: {
          select: {
            email: true,
          },
        },
        id_campeonato: true,
      },
    });

    const newEquipe = recoverName(equipe, 'many');

    return { equipes: newEquipe };
  }

  async createEquipe(data: typeEquipeCreation) {
    const { _id, ...newData } = data;

    const ativo = await prisma.campeonato.findFirst({
      where: {
        id: data.id_campeonato,
        ativo: true,
      },
    });

    if (ativo === null) {
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

    const equipe = await prisma.equipe.create({
      data: {
        id_usuario: _id as number,
        ...newData,
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        usuarios: {
          select: {
            email: true,
          },
        },
        id_campeonato: true,
      },
    });

    const newEquipe = recoverName(equipe, 'one');

    return newEquipe;
  }

  async addMembro(id: number, data: typeUsuarioFind) {
    const ativo = await prisma.equipe.findFirst({
      where: {
        id: id,
        ativo: true,
        id_usuario: data._id,
      },
    });

    if (ativo === null) {
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

    const user = await prisma.usuario.findFirst({
      where: { email: data.email },
    });

    if (!user) {
      const equipe = await prisma.usuario.create({
        data: {
          nome: '-',
          id_google: '-',
          email: data.email,
          avatar: '-',
          equipes: {
            connect: {
              id: id,
            },
          },
        },
        select: {
          equipes: {
            select: {
              id: true,
              nome: true,
              descricao: true,
            },
          },
        },
      });

      return equipe;
    }

    const equipe = await prisma.usuario.update({
      where: {
        email: data.email,
      },
      data: {
        equipes: {
          connect: {
            id: id,
          },
        },
      },
      select: {
        equipes: {
          select: {
            id: true,
            nome: true,
            descricao: true,
          },
        },
      },
    });

    return equipe;
  }

  async removeMembro(id: number, data: typeUsuarioFind) {
    const ativo = await prisma.equipe.findFirst({
      where: {
        id: id,
        ativo: true,
        id_usuario: data._id,
      },
    });

    if (ativo === null) {
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

    const equipe = await prisma.usuario.update({
      where: {
        email: data.email,
      },
      data: {
        equipes: {
          disconnect: {
            id,
          },
        },
      },
      select: {
        email: true,
      },
    });

    return equipe;
  }

  async updateEquipe(id: number, data: typeEquipeOptional) {
    const { _id, ...newData } = data;

    const equipe = await prisma.equipe.update({
      where: {
        id: id,
        ativo: true,
        id_usuario: _id,
      },
      data: newData as typeEquipeCreation,
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        usuarios: {
          select: {
            email: true,
          },
        },
        id_campeonato: true,
      },
    });

    const newEquipe = recoverName(equipe, 'one');

    return newEquipe;
  }

  async deleteEquipe(id: number, _id: number) {
    const equipe = await prisma.equipe.update({
      where: {
        id: id,
        ativo: true,
        id_usuario: _id,
      },
      data: {
        ativo: false,
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        usuarios: {
          select: {
            email: true,
          },
        },
        id_campeonato: true,
      },
    });

    const newEquipe = recoverName(equipe, 'one');

    return newEquipe;
  }
}
