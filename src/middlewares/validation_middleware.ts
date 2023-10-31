import { NextFunction, Request, Response } from 'express';
import { yupError } from './errors/yup.errors';
import { paramsSchema } from '../validations/params_validation';

const validationParams = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const params = req.params;
    await paramsSchema.validate(params, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json(yupError(error));
  }
};

const validationBody =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      await schema.validate(body, { abortEarly: false });
      next();
    } catch (error) {
      return res.status(400).json(yupError(error));
    }
  };

export { validationParams, validationBody };
