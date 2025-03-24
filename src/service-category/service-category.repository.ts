import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ServiceCategoryRepository {
  constructor(private readonly database: DatabaseService) {}

  async createMany(ids: string[], serviceId: string) {
    return this.database.serviceCategory.createMany({
      data: ids.map((id) => ({
        serviceId,
        categoryId: id,
      })),
    });
  }
}
