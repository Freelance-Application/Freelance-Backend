import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateUserDto } from 'src/users/dto';

@Injectable()
export class SkillsRepository {
  constructor(private readonly database: DatabaseService) {}

  async create(data: CreateSkillDto) {
    return this.database.skill.create({ data });
  }

  async findAll() {
    return this.database.skill.findMany({
      where: { deletedAt: null },
    });
  }

  async findById(id: string) {
    return this.database.skill.findUnique({ where: { id, deletedAt: null } });
  }

  async update(id: string, data: UpdateUserDto) {
    return this.database.skill.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  async delete(id: string) {
    return this.database.skill.update({
      where: { id },
      data: { deletedAt: new Date(), updatedAt: new Date() },
    });
  }
}
