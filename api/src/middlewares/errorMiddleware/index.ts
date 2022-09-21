import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../lib/utils/api-error';
import { BaseError } from '../../lib/utils/base-error';
import { ErrorHandler } from '../../lib/utils/error-handler';
import { logger } from '../../lib/utils/logger';
import { ApiErrorMessage, ApiResult } from '../../types';

const errorHandler = new ErrorHandler(logger);

export const errorMiddleware = async (
  err: APIError | BaseError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!errorHandler.isTrustedAndBaseError(err)) {
    next(err);
  }
  const message = err instanceof APIError ? err.message : 'Initial server Error';
  const response: ApiErrorMessage = {
    result: ApiResult.Error,
    errorCode: err.errorCode,
    message,
    httpCode: err.httpCode,
  };
  res.status((<BaseError>err)?.httpCode || 500).send(response);
  await errorHandler.handleError(err);
};
