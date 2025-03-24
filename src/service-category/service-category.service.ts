import { Injectable } from '@nestjs/common';
import { ServiceCategoryRepository } from './service-category.repository';

@Injectable()
export class ServiceCategoryService {
  constructor(private readonly repository: ServiceCategoryRepository) {}

  async createMany(ids: string[], serviceId: string) {
    return this.repository.createMany(ids, serviceId);
  }

  async findByServiceId(serviceId: string) {
    return this.repository.findByServiceId(serviceId);
  }

  async deleteMany(ids: string[]) {
    return this.repository.deleteMany(ids);
  }

  async updateServiceCategories(categoryIds: string[], serviceId: string) {
    const serviceCategories = await this.findByServiceId(serviceId);
    const serviceCategoryIds = serviceCategories.map((sc) => sc.categoryId);
    const toDelete = serviceCategoryIds.filter(
      (id) => !categoryIds.includes(id),
    );
    if (toDelete.length > 0) {
      await this.repository.deleteMany(toDelete);
    }

    const toCreate = categoryIds.filter(
      (id) => !serviceCategoryIds.includes(id),
    );
    if (toCreate.length > 0) {
      await this.createMany(toCreate, serviceId);
    }
  }
}
