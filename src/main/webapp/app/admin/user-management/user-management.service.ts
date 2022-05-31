import axios from 'axios';
import buildPaginationQueryOpts from '@/shared/sort/sorts';
import { IUser } from '@/shared/model/user.model';

export default class UserManagementService {
  public get(userId: number): Promise<any> {
    return axios.get(`services/auth/api/admin/users/${userId}`);
  }

  public create(user: IUser): Promise<any> {
    return axios.post('services/auth/api/admin/users', user);
  }

  public update(user: IUser): Promise<any> {
    return axios.put('services/auth/api/admin/users', user);
  }

  public remove(userId: number): Promise<any> {
    return axios.delete(`services/auth/api/admin/users/${userId}`);
  }

  public retrieve(req?: any): Promise<any> {
    return axios.get(`services/auth/api/admin/users?${buildPaginationQueryOpts(req)}`);
  }

  public retrieveAuthorities(): Promise<any> {
    return axios.get('services/auth/api/authorities');
  }
}
