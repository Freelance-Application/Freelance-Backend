import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { InitialServiceDto } from './dto/initial-service.dto';
import { userSelectFields } from 'src/commons/select-fields';

@Injectable()
export class ServiceRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll() {
    return this.database.service.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        serviceCategories: { include: { category: true } },
        user: {
          select: userSelectFields,
        },
      },
    });
  }

  async create(data: InitialServiceDto, userId: string) {
    return this.database.service.create({ data: { ...data, userId } });
  }

  async findById(id: string, userId: string) {
    const service = await this.database.service.findUnique({
      where: { id, userId },
      include: {
        serviceCategories: { include: { category: true } },
        user: { select: userSelectFields },
      },
    });
    return service;
  }

  async delete(id: string) {
    return this.database.service.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
