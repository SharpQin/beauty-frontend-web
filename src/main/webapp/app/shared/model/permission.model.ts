import { IRole } from '@/shared/model/role.model';

export interface IPermission {
  id?: number;
  authKey?: string;
  roles?: IRole[] | null;
}

export class Permission implements IPermission {
  constructor(public id?: number, public authKey?: string, public roles?: IRole[] | null) {}
}
