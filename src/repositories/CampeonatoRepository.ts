import { prismaClient as prisma } from '../database/prismaClient';
import { stringToDate, dateToString, recoverName } from '../utils/convertData';
import {
  typeCampeonatoCreation,
  typeCampeonatoOptional,
} from '../validations/campeonato_validation';

export class CampeonatoRepository {
  async filterCampeonato(data: typeCampeonatoOptional) {
    data = stringToDate(data);

    let whereCondition = {};

    if (Object.keys(data).length > 1) {
      whereCondition = {
        ativo: true,
        OR: [
          { descricao: data.descricao },
          { nome: data.nome },
          { id_esporte: data.id_esporte },
          { data_inicio_inscricao: data.data_inicio_inscricao },
          { data_final_inscricao: data.data_final_inscricao },
          { data_horario_inicio: data.data_horario_inicio },
          { endereco: { contains: data.endereco } },
          { id_cidade: { contains: data.id_cidade } },
          { bairro: { contains: data.bairro } },
        ],
      };
    } else {
      whereCondition = {
        ativo: true,
      };
    }

    const campeonato = await prisma.campeonato.findMany({
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
        total_atletas_equipe: true,
        total_equipes: true,
        data_inicio_inscricao: true,
        data_final_inscricao: true,
        data_horario_inicio: true,
        endereco: true,
        bairro: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    let newCampeonato = dateToString(campeonato, 'many');

    newCampeonato = recoverName(newCampeonato, 'many');

    return { campeonatos: newCampeonato };
  }

  async getById(id: number) {
    const campeonato = await prisma.campeonato.findFirst({
      where: {
        id,
        ativo: true,
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
        total_atletas_equipe: true,
        total_equipes: true,
        data_inicio_inscricao: true,
        data_final_inscricao: true,
        data_horario_inicio: true,
        endereco: true,
        bairro: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    if (campeonato === null) {
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

    let newCampeonato = dateToString(campeonato, 'one');

    newCampeonato = recoverName(newCampeonato, 'one');

    return newCampeonato;
  }

  async getMyCampeonato(_id: number) {
    const campeonato = await prisma.campeonato.findMany({
      where: {
        id_usuario: _id,
        ativo: true,
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
        total_atletas_equipe: true,
        total_equipes: true,
        data_inicio_inscricao: true,
        data_final_inscricao: true,
        data_horario_inicio: true,
        endereco: true,
        bairro: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    let newCampeonato = dateToString(campeonato, 'many');

    newCampeonato = recoverName(newCampeonato, 'many');

    return { campeonatos: newCampeonato };
  }

  async createCampeonato(data: typeCampeonatoCreation) {
    data = stringToDate(data);

    const { _id, ...newData } = data;

    const campeonato = await prisma.campeonato.create({
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
        total_atletas_equipe: true,
        total_equipes: true,
        data_inicio_inscricao: true,
        data_final_inscricao: true,
        data_horario_inicio: true,
        endereco: true,
        bairro: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    let newCampeonato = dateToString(campeonato, 'one');

    newCampeonato = recoverName(newCampeonato, 'one');

    return newCampeonato;
  }

  async updateCampeonato(id: number, data: typeCampeonatoOptional) {
    data = stringToDate(data);

    const { _id, ...newData } = data;

    const campeonato = await prisma.campeonato.update({
      where: {
        id: id,
        ativo: true,
        id_usuario: _id,
      },
      data: newData as typeCampeonatoCreation,
      select: {
        id: true,
        nome: true,
        descricao: true,
        esporte: {
          select: {
            nome: true,
          },
        },
        total_atletas_equipe: true,
        total_equipes: true,
        data_inicio_inscricao: true,
        data_final_inscricao: true,
        data_horario_inicio: true,
        endereco: true,
        bairro: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    let newCampeonato = dateToString(campeonato, 'one');

    newCampeonato = recoverName(newCampeonato, 'one');

    return newCampeonato;
  }

  async deleteCampeonato(id: number, _id: number) {
    const campeonato = await prisma.campeonato.update({
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
        total_atletas_equipe: true,
        total_equipes: true,
        data_inicio_inscricao: true,
        data_final_inscricao: true,
        data_horario_inicio: true,
        endereco: true,
        bairro: true,
        cidade: {
          select: {
            nome: true,
          },
        },
      },
    });

    let newCampeonato = dateToString(campeonato, 'one');

    newCampeonato = recoverName(newCampeonato, 'one');

    return newCampeonato;
  }
}
