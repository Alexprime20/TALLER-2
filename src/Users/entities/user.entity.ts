import { Exclude } from 'class-transformer';
import { Role } from '../../common/enums/roles.enum';
import { Gender } from '../../common/enums/gender.enum';
import { IUser } from '../interfaces/response-users.interface';

export class UserEntity implements IUser {
  id: number;
  name: string;
  age: number;
  photo: string;
  email: string;

  @Exclude()
  password: string;

  role: Role;
  gender: Gender;
  isActive: boolean;
}
