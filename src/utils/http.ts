import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { errorHandler } from './alert-error';

axios.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    const response = error.response;
    if (response !== undefined) {
      const status = response.status;
      if (status === 401) {
        window.location.href = '/';
      }
      return Promise.reject(response !== undefined ? response.data : error);
    }
  },
);

const getErrorMessage = (errorMessage: string, error: AxiosError, reject): void => {
  const reason = errorHandler(error);
  reject(`${errorMessage}, 原因是:${reason}`);
};

const http = {
  get(
    url: string,
    params: object | null,
    errorMessage: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { ...config, params })
        .then(res => resolve(res))
        .catch(error => getErrorMessage(errorMessage, error, reject));
    });
  },
  post(
    url: string,
    body: object | null,
    errorMessage: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .post(url, body, config)
        .then(res => resolve(res))
        .catch(error => getErrorMessage(errorMessage, error, reject));
    });
  },
  put(
    url: string,
    body: object | null,
    errorMessage: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .put(url, body, config)
        .then(res => resolve(res))
        .catch(error => getErrorMessage(errorMessage, error, reject));
    });
  },
  delete(
    url: string,
    body: object | null,
    errorMessage: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, config)
        .then(res => resolve(res))
        .catch(error => getErrorMessage(errorMessage, error, reject));
    });
  },
};

export interface Response<T> {
  data: T;
  success: boolean;
}

export interface Error extends AxiosError {
  data: {
    errorMessage: string;
    success: boolean;
  };
}

// export { Http };
export { axios, http };
