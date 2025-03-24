import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MessageRepository {
  constructor(private readonly database: DatabaseService) {}
}
