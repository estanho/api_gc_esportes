import { number, object } from 'yup';

const paramsSchema = object({
  id: number(),
});

export { paramsSchema };
