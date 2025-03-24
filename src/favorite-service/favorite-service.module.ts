import { Module } from '@nestjs/common';
import { FavoriteServiceController } from './favorite-service.controller';
import { FavoriteServiceService } from './favorite-service.service';
import { FavoriteRepository } from './favorite.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FavoriteServiceController],
  providers: [FavoriteServiceService, FavoriteRepository],
  imports: [DatabaseModule],
})
export class FavoriteServiceModule {}
