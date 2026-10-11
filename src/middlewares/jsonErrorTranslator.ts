import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function jsonErrorTranslator(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof SyntaxError && "body" in err) {
    return next(new AppError("Malformed JSON", 400));
  }
  next(err);
}