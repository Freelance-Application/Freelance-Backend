import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRepository } from './service.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { CategoryService } from 'src/category/category.service';
import { ServiceCategoryService } from 'src/service-category/service-category.service';

@Injectable()
export class ServiceService {
  constructor(
    private readonly repository: ServiceRepository,
    private readonly categoryService: CategoryService,
    private readonly serviceCategoryService: ServiceCategoryService,
  ) {}

  async list() {
    return this.repository.findAll();
  }

  async create(createServiceDto: CreateServiceDto, userId: string) {
    const { categoryIds, ...payload } = createServiceDto;
    const categories = await this.categoryService.findByIds(categoryIds);
    if (categories.length !== categoryIds.length) {
      throw new NotFoundException("One or more category ids doesn't exist");
    }
    const service = await this.repository.create(payload, userId);
    await this.serviceCategoryService.createMany(categoryIds, service.id);
    return this.repository.findById(service.id, userId);
  }

  async findById(id: string, userId: string) {
    const service = await this.repository.findById(id, userId);
    if (!service) {
      throw new NotFoundException('Service not found');
    }
    return service;
  }

  async delete(id: string, userId: string) {
    await this.findById(id, userId);
    await this.repository.delete(id);
    return {
      msg: 'Service deleted successfully',
    };
  }
}
