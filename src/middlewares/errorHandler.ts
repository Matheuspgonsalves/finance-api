import { NextFunction, Request, Response } from "express";
import { AppError, ValidationError } from "../errors/AppError";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (!(err instanceof AppError)) {
    console.error(err);
    err = new AppError();
  }

  const appError = err as AppError;
  const body: Record<string, unknown> = { message: appError.message };
  if (appError instanceof ValidationError) body.details = appError.details;

  return res.status(appError.statusCode).json(body);
}