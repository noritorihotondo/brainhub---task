export enum ApiErrorCode {
  OtherError,
  CantFindUser,
  NoPermissions,
  BadCredentials,
  UserAlreadyExists,
}

export enum HttpMethod {
  Get = 'get',
  Post = 'post',
  Put = 'put',
  Patch = 'patch',
  Delete = 'delete',
}

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
  httpCode: number;
}
