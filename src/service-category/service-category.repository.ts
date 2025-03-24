import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ServiceCategoryRepository {
  constructor(private readonly database: DatabaseService) {}

  async createMany(ids: string[], serviceId: string) {
    return this.database.serviceCategory.createManyAndReturn({
      data: ids.map((id) => ({
        serviceId,
        categoryId: id,
      })),
      include: {
        category: true,
      },
    });
  }

  async findByServiceId(serviceId: string) {
    return this.database.serviceCategory.findMany({
      where: {
        serviceId,
      },
      include: {
        category: true,
      },
    });
  }

  async deleteMany(ids: string[]) {
    return this.database.serviceCategory.deleteMany({
      where: {
        categoryId: {
          in: ids,
        },
      },
    });
  }
}
