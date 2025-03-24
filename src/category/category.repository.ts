import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryRepository {
  constructor(private readonly database: DatabaseService) {}

  async create(data: CreateCategoryDto) {
    return this.database.category.create({ data });
  }

  async findAll() {
    return this.database.category.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    return this.database.category.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateCategoryDto) {
    return this.database.category.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async remove(id: string) {
    return this.database.category.update({
      where: { id },
      data: { deletedAt: new Date(), updatedAt: new Date() },
    });
  }

  async findByIds(ids: string[]) {
    return this.database.category.findMany({ where: { id: { in: ids } } });
  }
}
