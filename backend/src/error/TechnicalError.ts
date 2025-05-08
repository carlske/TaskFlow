import { AppError } from './AppError';

export class TechnicalError extends AppError {
  constructor(message = 'A technical error occurred', status: number = 500, stack?: string) {
    super(message, status, stack);
    this.name = 'TechnicalError';
  }
}
