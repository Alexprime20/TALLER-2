import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  private users: UserEntity[] = [];

  findAll(): UserEntity[] {
    return this.users.map(user => plainToInstance(UserEntity, user));
  }

  findOne(id: number): UserEntity {
    const user = this.users.find(user => user.id === id);
    return user ? plainToInstance(UserEntity, user) : null;
  }

  create(createUserDto: CreateUserDto): UserEntity {
    const newUser: UserEntity = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return plainToInstance(UserEntity, newUser);
  }

  update(id: number, updateUserDto: UpdateUserDto): UserEntity {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      const updatedUser = { ...this.users[userIndex], ...updateUserDto };
      this.users[userIndex] = updatedUser;
      return plainToInstance(UserEntity, updatedUser);
    }
    return null;
  }

  remove(id: number): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      return true;
    }
    return false;
  }
}
