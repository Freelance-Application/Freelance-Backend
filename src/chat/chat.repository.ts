import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ChatRepository {
  constructor(private readonly database: DatabaseService) {}
}
