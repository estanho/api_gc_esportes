import { InferType, array, number, object, string } from 'yup';

const posicoesSchema = object().shape({
  id_equipe: number().positive().required(),
  posicao: number().positive().required(),
});

const creationResultadoSchema = object({
  _id: number(),
  id_campeonato: number().required(),
  posicoes: array().of(posicoesSchema).required(),
})
  .strict()
  .noUnknown();

type typeResultadoCreation = InferType<typeof creationResultadoSchema>;

const optionalResultadoSchema = object({
  _id: number(),
  titulo: string().notRequired(),
  id_esporte: number().notRequired(),
  id_cidade: number().notRequired(),
})
  .strict()
  .noUnknown();

type typeResultadoOptional = InferType<typeof optionalResultadoSchema>;

const updateResultadoSchema = object({
  _id: number(),
  posicoes: array()
    .of(
      object().shape({
        id_equipe: number().positive().required(),
        posicao: number().positive().required(),
      }),
    )
    .required(),
})
  .strict()
  .noUnknown();

type typeResultadoUpdate = InferType<typeof updateResultadoSchema>;

export {
  creationResultadoSchema,
  typeResultadoCreation,
  optionalResultadoSchema,
  typeResultadoOptional,
  updateResultadoSchema,
  typeResultadoUpdate,
};
