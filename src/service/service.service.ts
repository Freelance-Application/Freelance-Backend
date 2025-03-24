import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiceRepository } from './service.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { CategoryService } from 'src/category/category.service';
import { ServiceCategoryService } from 'src/service-category/service-category.service';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InitialServiceDto } from './dto/initial-service.dto';
import { SearchServiceDto } from './dto/search-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    private readonly repository: ServiceRepository,
    private readonly categoryService: CategoryService,
    private readonly serviceCategoryService: ServiceCategoryService,
  ) {}

  async list(searchServiceDto: SearchServiceDto) {
    return this.repository.findAll(searchServiceDto);
  }

  async getCategories(categoryIds: string[]) {
    const categories = await this.categoryService.findByIds(categoryIds);
    if (categories.length !== categoryIds.length) {
      throw new NotFoundException("One or more category ids doesn't exist");
    }
    return categories;
  }

  async create(createServiceDto: CreateServiceDto, userId: string) {
    const { categoryIds, ...payload } = createServiceDto;
    await this.getCategories(categoryIds);
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

  async findOne(id: string) {
    return this.repository.findOne(id);
  }

  async update(id: string, updateServiceDto: UpdateServiceDto, userId: string) {
    const service = await this.findById(id, userId);
    const payload: InitialServiceDto = {
      title: updateServiceDto.title ?? service.title,
      description: updateServiceDto.description ?? service.description,
      price: updateServiceDto.price ?? service.price,
    };
    if (updateServiceDto.categoryIds) {
      await this.getCategories(updateServiceDto.categoryIds);
    }
    const newService = await this.repository.update(id, payload);
    if (updateServiceDto.categoryIds) {
      await this.serviceCategoryService.updateServiceCategories(
        updateServiceDto.categoryIds,
        id,
      );

      const categories = await this.serviceCategoryService.findByServiceId(id);
      newService.serviceCategories = categories;
    }
    return newService;
  }
}
