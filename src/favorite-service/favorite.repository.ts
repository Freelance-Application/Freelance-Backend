import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class FavoriteRepository {
  constructor(private readonly database: DatabaseService) {}
}
