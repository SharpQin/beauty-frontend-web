import axios from 'axios';

export default class RegisterService {
  public processRegistration(account: any): Promise<any> {
    return axios.post('services/auth/api/register', account);
  }
}
