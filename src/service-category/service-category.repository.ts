import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ServiceCategoryRepository {
  constructor(private readonly database: DatabaseService) {}
}
