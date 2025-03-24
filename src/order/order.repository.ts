import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrderRepository {
  constructor(private readonly database: DatabaseService) {}
}
