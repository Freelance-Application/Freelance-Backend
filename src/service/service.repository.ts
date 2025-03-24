import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { InitialServiceDto } from './dto/initial-service.dto';

@Injectable()
export class ServiceRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll() {
    return this.database.service.findMany({
      where: {
        deletedAt: null,
      },
    });
  }

  async create(data: InitialServiceDto) {
    return this.database.service.create({ data });
  }

  async findById(id: string) {
    return this.database.service.findUnique({
      where: { id },
      include: { serviceCategories: { include: { category: true } } },
    });
  }
}
