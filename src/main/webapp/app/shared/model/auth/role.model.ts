import { ISimpleAuthority } from '@/shared/model/auth/permission.model';

export interface IRole {
  id?: number;
  name?: string;
  dsc?: string | null;
  auths?: string[];
}

export class Role implements IRole {
  constructor(public id?: number, public name?: string, public dsc?: string | null, public auths: string[] = []) {}
}
