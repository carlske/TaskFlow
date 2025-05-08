export class AppError extends Error {
  public  name: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 500,stack?: string) {
    super(message);
    this.name = 'AppError';
    this.stack= stack
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
