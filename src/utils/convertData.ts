import moment from 'moment';

export function stringToDate(data: any) {
  if ('data_inicio_inscricao' in data) {
    data.data_inicio_inscricao = moment(
      data.data_inicio_inscricao,
      'DD/MM/YYYY HH:mm:ss',
    ).toDate();
  }

  if ('data_final_inscricao' in data) {
    data.data_final_inscricao = moment(
      data.data_final_inscricao,
      'DD/MM/YYYY HH:mm:ss',
    ).toDate();
  }

  if ('data_horario_inicio' in data) {
    data.data_horario_inicio = moment(
      data.data_horario_inicio,
      'DD/MM/YYYY HH:mm:ss',
    ).toDate();
  }

  return data;
}

export function dateToString(data: any, type: string) {
  if (type === 'one') {
    const {
      data_inicio_inscricao,
      data_final_inscricao,
      data_horario_inicio,
      ...newData
    } = data;

    const new_data_inicio_inscricao = moment(data_inicio_inscricao).format(
      'DD/MM/YYYY',
    );
    const new_data_final_inscricao =
      moment(data_final_inscricao).format('DD/MM/YYYY');
    const new_data_horario_inicio = moment(data_horario_inicio).format(
      'DD/MM/YYYY HH:mm:ss',
    );

    return {
      data_inicio_inscricao: new_data_inicio_inscricao,
      data_final_inscricao: new_data_final_inscricao,
      data_horario_inicio: new_data_horario_inicio,
      ...newData,
    };
  } else if (type === 'many') {
    const convertData = [];

    for (let i = 0; i < data.length; i++) {
      const {
        data_inicio_inscricao,
        data_final_inscricao,
        data_horario_inicio,
        ...newData
      } = data[i];
      const new_data_inicio_inscricao = moment(data_inicio_inscricao).format(
        'DD/MM/YYYY',
      );
      const new_data_final_inscricao =
        moment(data_final_inscricao).format('DD/MM/YYYY');
      const new_data_horario_inicio = moment(data_horario_inicio).format(
        'DD/MM/YYYY HH:mm:ss',
      );

      convertData.push({
        data_inicio_inscricao: new_data_inicio_inscricao,
        data_final_inscricao: new_data_final_inscricao,
        data_horario_inicio: new_data_horario_inicio,
        ...newData,
      });
    }

    return convertData;
  }
}

export function recoverName(data: any, type: string) {
  if (type === 'one') {
    data.esporte = data.esporte.nome;

    if ('cidade' in data) {
      data.cidade = data.cidade.nome;
    }

    return data;
  }
  if (type === 'many') {
    for (let i = 0; i < data.length; i++) {
      data[i].esporte = data[i].esporte.nome;

      if ('cidade' in data[i]) {
        data[i].cidade = data[i].cidade.nome;
      }
    }
    return data;
  }
  if (type === 'result') {
    const resultados = [];

    for (let x = 0; x < data.length; x++) {
      const newData = {
        id: data[x].id,
        nome: data[x].nome,
        descricao: data[x].descricao,
        data_horario_inicio: '',
        posicoes: [],
      };

      newData.data_horario_inicio = moment(data[x].data_horario_inicio).format(
        'DD/MM/YYYY HH:mm:ss',
      );

      for (let i = 0; i < data[x].resultado.length; i++) {
        const { resultado, ...newResultado } = data[x].resultado[i].equipes;
        newResultado.posicao = resultado[0].posicao;
        newData.posicoes.push(newResultado as never);
      }

      if (newData.posicoes.length > 0) {
        resultados.push(newData);
      }
    }

    return resultados;
  }
}
