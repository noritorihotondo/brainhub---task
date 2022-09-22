import { Dispatch } from '@reduxjs/toolkit';
import { ApiErrorCode, HttpMethod, ApiErrorMessage, ApiOkMessage, ApiResult } from '../types';
import { errorNotification } from '../slices';

export type SuccessCb<Data> = (data: Data) => void;
export type FailureCb = (error: ApiErrorMessage) => void;

export async function api<
  ResponseData extends unknown = undefined,
  RequestData extends unknown = undefined,
>(
  dispatch: Dispatch,
  method: HttpMethod,
  url: string,
  requestData?: RequestData,
  successCb?: SuccessCb<ResponseData>,
  failureCb?: FailureCb,
): Promise<ResponseData | {}> {
  const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
  const headers = { 'Content-Type': 'application/json' };

  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers,
      // credentials: 'include',
      body: JSON.stringify(requestData),
    });

    const data: ApiErrorMessage | ApiOkMessage<ResponseData> = await response.json();

    switch (data.result) {
      case ApiResult.Ok:
        if (successCb) successCb((data as ApiOkMessage<ResponseData>).payload);
        return (data as ApiOkMessage<ResponseData>).payload;
      case ApiResult.Error:
        if (failureCb) failureCb(data as ApiErrorMessage);
        dispatch(errorNotification((data as ApiErrorMessage).errorCode));
        break;
      default:
        dispatch(errorNotification((data as ApiErrorMessage).errorCode));
    }
  } catch (error) {
    dispatch(errorNotification(ApiErrorCode.OtherError));
  }
  return {};
}
