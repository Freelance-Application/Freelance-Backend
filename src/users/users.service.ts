import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto';
import { RoleUser, User } from '@prisma/client';
import { hashString } from '../commons/bcrypt.utils';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  static sanitize(user: User) {
    if (!user) return null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  async create(data: CreateUserDto) {
    const payload = { ...data, role: RoleUser.USER };
    const emailHasTaken = await this.findByEmail(data.email);
    if (emailHasTaken) {
      throw new ForbiddenException('Email already exists');
    }
    const hashedPassword = await hashString(data.password);
    const user = await this.repository.create({
      ...payload,
      password: hashedPassword,
    });

    return UsersService.sanitize(user);
  }

  async findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  async findAll() {
    const users = await this.repository.findAll();
    return users.map((user) => UsersService.sanitize(user));
  }

  async findOne(id: string) {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return UsersService.sanitize(user);
  }

  async update(userId: string, data: UpdateUserDto) {
    const userFound = await this.findOne(userId);
    if (data.password) {
      const password = await hashString(data.password);
      data.password = password;
    }
    const payload = { ...userFound, ...data };
    const newUser = await this.repository.update(userId, payload);
    return UsersService.sanitize(newUser);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.repository.delete(
      id,
      `${user!.email}_deleted_${new Date().toString()}`,
    );
    return 'User deleted successfully';
  }
}
