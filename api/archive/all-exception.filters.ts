import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import * as _ from 'lodash';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(ex: any, host: ArgumentsHost) {
        const VALIDATION_ERROR_NAMES = [
            'SequelizeForeignKeyConstraintError',
            'SequelizeUniqueConstraintError',
            'SequelizeValidationError',
            'SequelizeDatabaseError',
            'ValidationError',
        ];

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        let exceptions = [];
        if (ex['name'] === 'AggregateError') {
            for (const err of Array.from(ex)) {
                exceptions.push(...err['errors'].errors);
            }
        } else if (VALIDATION_ERROR_NAMES.includes(ex.name)) {
            if (_.isEmpty(ex.errors)) {
                exceptions = [ex.original];
            } else {
                exceptions = ex.errors;
            }
        }

        if (!_.isEmpty(exceptions)) {
            const errors = [];

            if (ex && !_.isEmpty(exceptions)) {
                for (const err of Object.values(exceptions)) {
                    let message;

                    if (err.kind === 'user defined') {
                        message = err.message;
                    } else {
                        message = err.kind || err.message;
                    }

                    errors.push({
                        field: err.path || err.constraint,
                        message: _.snakeCase(
                            `err_${message.toLocaleLowerCase()}`,
                        ),
                    });
                }
            }
            const status =
                ex instanceof HttpException
                    ? ex.getStatus()
                    : HttpStatus.UNPROCESSABLE_ENTITY;

            response.status(status).json({
                statusCode: status,
                message: ex.errors || ex.message,
            });
        } else {
            response.status(ex.status || 400).json({
                statusCode: ex.status || 400,
                message: ex.response ? ex.response.message : ex.message,
            });
        }
    }
}
