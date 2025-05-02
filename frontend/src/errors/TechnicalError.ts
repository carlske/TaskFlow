import { BaseError } from './BaseError'

export class ServiceError extends BaseError {
  constructor(message: string, code: string = 'SERVICE_ERROR') {
    super(message, code)
  }
}
