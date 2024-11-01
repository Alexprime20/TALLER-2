import { Role } from '../../common/enums/roles.enum';
import { Gender } from '../../common/enums/gender.enum';

export interface IUser {
  id: number;
  name: string;
  age: number;
  photo: string;
  email: string;
  password: string;
  role: Role;
  gender: Gender;
  isActive: boolean;
}
