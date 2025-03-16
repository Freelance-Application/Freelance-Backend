import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly database: DatabaseService) {}

  async create(data: CreateUserDto) {
    return this.database.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.database.user.findUnique({ where: { email } });
  }

  async findAll() {
    return this.database.user.findMany({
      where: { deletedAt: null },
    });
  }

  async findById(id: string) {
    return this.database.user.findUnique({ where: { id, deletedAt: null } });
  }

  async update(id: string, data: UpdateUserDto) {
    return this.database.user.update({ where: { id }, data });
  }

  async delete(id: string, email: string) {
    return this.database.user.update({
      where: { id },
      data: { deletedAt: new Date(), email },
    });
  }
}
