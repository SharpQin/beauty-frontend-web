import { IRole } from '@/shared/model/auth/role.model';

export interface ISimpleAuthority {
  id?: number;
  name?: string;
  authKey?: string;
}

export class SimpleAuthority implements ISimpleAuthority {
  constructor(public id?: number, public name?: string, public authKey?: string) {}
}
