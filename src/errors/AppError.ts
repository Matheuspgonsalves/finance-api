export class AppError extends Error{
  statusCode: number;

  constructor(
      message: string = "Internal server error",
      statusCode: number = 500,
  ) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);   
  }
}

export class ValidationError extends AppError {
  details: string[];

  constructor(details: string[]) {
    super("Validation error", 400);
    this.details = details;
  }
}

export class NotFoundError extends AppError {
  constructor(resource = "Resource") {
    super(`${resource} not found`, 404);
  }
}