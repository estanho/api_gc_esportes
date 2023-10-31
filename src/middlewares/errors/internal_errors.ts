import { NextFunction, Request, Response } from 'express';

export class internalErrors {
  async syntaxError(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error instanceof SyntaxError && 'body' in error) {
      res.status(400).json({
        errors: [
          {
            field: 'JSON',
            type: 'SyntaxError',
            message: 'Syntax error in JSON',
          },
        ],
      });
      //console.error("🛑 Syntax error in JSON:", error.message);
    } else {
      next(error);
    }
  }
}
