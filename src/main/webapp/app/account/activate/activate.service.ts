import axios, { AxiosInstance } from 'axios';

export default class ActivateService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios;
  }

  public activateAccount(key: string): Promise<any> {
    return this.axios.get(`services/auth/api/activate?key=${key}`);
  }
}
