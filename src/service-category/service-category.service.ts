import { Injectable } from '@nestjs/common';
import { ServiceCategoryRepository } from './service-category.repository';

@Injectable()
export class ServiceCategoryService {
  constructor(private readonly repository: ServiceCategoryRepository) {}
}
