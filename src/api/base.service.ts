import { AxiosResponse } from 'axios';
import { http, Response } from '@/utils/http';
import { User } from '@/interfaces/user';

class BaseService {
  async getUser(): Promise<AxiosResponse<Response<User>>> {
    return http.get('/api/user', null, '查询用户信息失败');
  }
}

export const baseService = new BaseService();
