import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly repository: CategoryRepository) {}

  async create(data: CreateCategoryDto) {
    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const category = await this.repository.findOne(id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async update(id: string, data: UpdateCategoryDto) {
    const category = await this.findOne(id);
    return this.repository.update(category.id, data);
  }

  async remove(id: string) {
    const category = await this.findOne(id);
    await this.repository.remove(category.id);
    return {
      msg: 'Category deleted successfully',
    };
  }

  async findByIds(ids: string[]) {
    return this.repository.findByIds(ids);
  }
}
