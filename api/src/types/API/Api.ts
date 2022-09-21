import { AnySchema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ApiErrorCode, HTTPMethod } from '../HTTP';

export type APIRoute = {
  method: HTTPMethod;
  url: string;
  schema?: AnySchema;
  controller: (req: Request, res: Response, next: NextFunction) => void;
};

export enum ApiResult {
  Ok,
  Error,
}

export interface ApiOkMessage<ResponseData = undefined> {
  result: ApiResult.Ok;
  payload: ResponseData;
}

export interface ApiErrorMessage {
  result: ApiResult.Error;
  errorCode: ApiErrorCode;
  message: string;
  httpCode: StatusCodes;
}
