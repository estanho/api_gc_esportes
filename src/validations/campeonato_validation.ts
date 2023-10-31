import { InferType, number, object, string } from 'yup';
import { regex } from '../utils/regex';

const creationCampeonatoSchema = object({
  _id: number(),
  nome: string().required(),
  descricao: string().required(),
  id_esporte: number().required(),
  total_atletas_equipe: number().required(),
  total_equipes: number().required(),
  data_inicio_inscricao: string().matches(regex.data).required(),
  data_final_inscricao: string().matches(regex.data).required(),
  data_horario_inicio: string().matches(regex.data).required(),
  endereco: string().required(),
  bairro: string().required(),
  id_cidade: number().required(),
})
  .strict()
  .noUnknown();

type typeCampeonatoCreation = InferType<typeof creationCampeonatoSchema>;

const optionalCampeonatoSchema = object({
  _id: number(),
  nome: string().notRequired(),
  descricao: string().notRequired(),
  id_esporte: number().notRequired(),
  data_inicio_inscricao: string().matches(regex.data).notRequired(),
  data_final_inscricao: string().matches(regex.data).notRequired(),
  data_horario_inicio: string().matches(regex.data).notRequired(),
  endereco: string().notRequired(),
  id_cidade: number().notRequired(),
  bairro: string().notRequired(),
})
  .strict()
  .noUnknown();

type typeCampeonatoOptional = InferType<typeof optionalCampeonatoSchema>;

export {
  creationCampeonatoSchema,
  typeCampeonatoCreation,
  optionalCampeonatoSchema,
  typeCampeonatoOptional,
};
