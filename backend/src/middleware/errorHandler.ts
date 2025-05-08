import { Request, Response, NextFunction, application } from 'express';
import { AppError } from '../error/AppError'; // Ajusta la ruta
import { ServiceError } from '../error/ServiceError';
import { TechnicalError } from '../error/TechnicalError';


export function errorHandler(err: Error,
    req: Request,
    res: Response,
    next: NextFunction) {
    console.error(err.stack);

    const respone = {
        name: 'Internal AppError Error',
        message: "Something went wrong"
    }

    console.log(err)

    let statusCode: number = 500;

    if (err instanceof ServiceError || err instanceof TechnicalError) {
        respone.message = err.message
        respone.name = err.name;
        statusCode = err.statusCode
    }

    if (err instanceof AppError) {
        respone.message = err.message 
    }

    res.status(statusCode).json(respone);

}
