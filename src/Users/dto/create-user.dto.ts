// src/users/dto/create-user.dto.ts
import { IsString, IsEmail, IsEnum, IsBoolean, IsNumber } from 'class-validator';
import { Role } from '../../common/enums/roles.enum';
import { Gender } from '../../common/enums/gender.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsString()
  photo: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Role, { message: 'role must be one of the following values: Admin, User' })
  role: Role;

  @IsEnum(Gender, { message: 'gender must be one of the following values: Male, Female, Other' })
  gender: Gender;

  @IsBoolean({ message: 'isActive must be a boolean value' })
  isActive: boolean;
}
