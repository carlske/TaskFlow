import { AppError } from './AppError';

export class ServiceError extends AppError {
    constructor(message = 'A Service error occurred', status: number = 500, stack?: string) {
        super(message, status, stack);
        this.name = 'ServiceError';
    }
}