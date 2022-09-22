import { api, SuccessCb, FailureCb } from '../services';
import { HttpMethod } from '../types';
import { useAppDispatch } from './redux';

export const useApi = () => {
  const dispatch = useAppDispatch();

  return {
    get: <ResponseData extends unknown = undefined>(
      url: string,
      successCb?: SuccessCb<ResponseData>,
      failureCb?: FailureCb,
    ) => api(dispatch, HttpMethod.Get, url, undefined, successCb, failureCb),
    post: <ResponseData extends unknown = undefined, RequestData extends unknown = undefined>(
      url: string,
      requestData?: RequestData,
      successCb?: SuccessCb<ResponseData>,
      failureCb?: FailureCb,
    ) => api(dispatch, HttpMethod.Post, url, requestData, successCb, failureCb),
    put: <ResponseData extends unknown = undefined, RequestData extends unknown = undefined>(
      url: string,
      requestData?: RequestData,
      successCb?: SuccessCb<ResponseData>,
      failureCb?: FailureCb,
    ) => api(dispatch, HttpMethod.Put, url, requestData, successCb, failureCb),
    patch: <ResponseData extends unknown = undefined, RequestData extends unknown = undefined>(
      url: string,
      requestData?: RequestData,
      successCb?: SuccessCb<ResponseData>,
      failureCb?: FailureCb,
    ) => api(dispatch, HttpMethod.Patch, url, requestData, successCb, failureCb),
    delete: <ResponseData extends unknown = undefined>(
      url: string,
      successCb?: SuccessCb<ResponseData>,
      failureCb?: FailureCb,
    ) => api(dispatch, HttpMethod.Delete, url, undefined, successCb, failureCb),
  };
};
