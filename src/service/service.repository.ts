import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ServiceRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll() {
    return this.database.service.findMany();
  }
}
