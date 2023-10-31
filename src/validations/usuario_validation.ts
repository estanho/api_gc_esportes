import { InferType, number, object, string } from 'yup';

const creationUsuarioSchema = object({
  id_google: string().required(),
  nome: string().required(),
  email: string().email().required(),
  avatar: string().required(),
})
  .strict()
  .noUnknown();

type typeUsuarioCreation = InferType<typeof creationUsuarioSchema>;

const findUsuarioSchema = object({
  _id: number(),
  email: string().email().required(),
})
  .strict()
  .noUnknown();

type typeUsuarioFind = InferType<typeof findUsuarioSchema>;

export {
  creationUsuarioSchema,
  typeUsuarioCreation,
  findUsuarioSchema,
  typeUsuarioFind,
};
