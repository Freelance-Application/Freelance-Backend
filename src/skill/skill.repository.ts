import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateSkillDto, UpdateSkillDto } from './dto';

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

  async update(id: string, data: UpdateSkillDto) {
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

  async findManyByIds(ids: string[]) {
    return this.database.skill.findMany({
      where: { id: { in: ids }, deletedAt: null },
    });
  }
}
