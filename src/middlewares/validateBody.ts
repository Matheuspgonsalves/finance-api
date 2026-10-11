import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { ValidationError } from "../errors/AppError";

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate( req.body, {abortEarly: false});

    if(error) {
      throw new ValidationError(error.details.map(d => d.message));
    }

    req.body = value;
    next();
  };
}