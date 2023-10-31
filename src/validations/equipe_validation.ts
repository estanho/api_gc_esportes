import { InferType, number, object, string } from 'yup';

const creationEquipeSchema = object({
  _id: number(),
  nome: string().required(),
  descricao: string().required(),
  id_esporte: number().required(),
  id_campeonato: number().required(),
})
  .strict()
  .noUnknown();

type typeEquipeCreation = InferType<typeof creationEquipeSchema>;

const optionalEquipeSchema = object({
  _id: number(),
  nome: string().notRequired(),
  descricao: string().notRequired(),
  id_esporte: number().notRequired(),
  id_campeonato: number().notRequired(),
})
  .strict()
  .noUnknown();

type typeEquipeOptional = InferType<typeof optionalEquipeSchema>;

export {
  creationEquipeSchema,
  typeEquipeCreation,
  optionalEquipeSchema,
  typeEquipeOptional,
};
