import { recoverName } from '../utils/convertData';
import { prismaClient as prisma } from '../database/prismaClient';
import {
  typeResultadoCreation,
  typeResultadoOptional,
  typeResultadoUpdate,
} from '../validations/resultado_validation';

export class ResultadoRepository {
  async filterResultado(data: typeResultadoOptional) {
    let whereCondition = {};

    if (Object.keys(data).length > 1) {
      whereCondition = {
        ativo: true,
        OR: [
          { id_esporte: data.id_esporte },
          { id_cidade: data.id_cidade },
          { nome: data.nome },
        ],
      };
    } else {
      whereCondition = {
        ativo: true,
      };
    }

    const resultado = await prisma.campeonato.findMany({
      where: whereCondition,
      select: {
        id: true,
        nome: true,
        descricao: true,
        data_horario_inicio: true,
        resultado: {
          select: {
            equipes: {
              select: {
                id: true,
                nome: true,
                descricao: true,
                resultado: {
                  select: {
                    posicao: true,
                  },
                },
              },
            },
            posicao: true,
          },
        },
      },
    });

    const newResultado = recoverName(resultado, 'result');

    return { resultados: newResultado };
  }

  async createResultado(data: typeResultadoCreation) {
    const { _id, ...newData } = data;

    const ativo = await prisma.campeonato.findFirst({
      where: {
        id_usuario: _id,
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

    const posicoes = [];

    for (let i = 0; newData.posicoes.length > i; i++) {
      posicoes.push({
        id_equipe: newData.posicoes[i].id_equipe,
        posicao: newData.posicoes[i].posicao,
        id_campeonato: newData.id_campeonato,
      });
    }

    await prisma.resultado.createMany({
      data: posicoes,
    });

    const resultado = await prisma.resultado.findMany({
      where: {
        id_campeonato: newData.id_campeonato,
      },
      select: {
        equipes: {
          select: {
            nome: true,
            descricao: true,
            id_esporte: true,
          },
        },
      },
    });

    return resultado;
  }

  async updateResultado(id: number, data: typeResultadoUpdate) {
    const { _id, ...newData } = data;

    const ativo = await prisma.campeonato.findFirst({
      where: {
        id,
        id_usuario: _id,
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

    await prisma.resultado.deleteMany({
      where: {
        id_campeonato: id,
      },
    });

    const posicoes = [];

    for (let i = 0; newData.posicoes.length > i; i++) {
      posicoes.push({
        id_equipe: newData.posicoes[i].id_equipe,
        posicao: newData.posicoes[i].posicao,
        id_campeonato: id,
      });
    }

    await prisma.resultado.createMany({
      data: posicoes,
    });

    const resultado = await prisma.resultado.findMany({
      where: {
        id_campeonato: id,
      },
      select: {
        equipes: {
          select: {
            nome: true,
            descricao: true,
            id_esporte: true,
          },
        },
      },
    });

    return resultado;
  }

  async deleteResultado(id: number, _id: number) {
    const ativo = await prisma.campeonato.findFirst({
      where: {
        id,
        id_usuario: _id,
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

    const resultado = await prisma.resultado.findMany({
      where: {
        id_campeonato: id,
      },
      select: {
        equipes: {
          select: {
            nome: true,
            descricao: true,
            id_esporte: true,
          },
        },
      },
    });

    await prisma.resultado.deleteMany({
      where: {
        id_campeonato: id,
      },
    });

    return resultado;
  }
}
