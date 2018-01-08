import { Message } from 'element-ui';
import { AxiosError } from 'axios';
import HttpCodeTranslator from 'http-code-translator';

const httpCodeTranslator = new HttpCodeTranslator('zh');

function errorHandler(error: AxiosError): string {
  if (error.response === undefined) {
    return '服务端连接失败';
  }
  const response = error.response;
  if (response.status === 401) {
    window.location.href = '/';
  } else if (response.data && typeof response.data === 'object' && response.data.errorMessage) {
    const message = response.data.errorMessage;
    if (typeof message !== 'string') {
      return '未知错误';
    }
    return message;
  } else if (response.status !== undefined) {
    return httpCodeTranslator.translate(response.status);
  }
  return '未知错误';
}

function alertError(error) {
  if (error.alertMessage) {
    const message = errorHandler(error);
    Message({
      type: 'error',
      message: `${error.alertMessage},原因是:${message}`,
      showClose: true,
      duration: 15000,
    });
  } else {
    Message({
      type: 'error',
      message: error.toString(),
      showClose: true,
      duration: 15000,
    });
  }
}

export { errorHandler, alertError };
