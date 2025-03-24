import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ServiceRepository } from './service.repository';
import { CategoryModule } from 'src/category/category.module';
import { ServiceCategoryModule } from 'src/service-category/service-category.module';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, ServiceRepository],
  imports: [DatabaseModule, CategoryModule, ServiceCategoryModule],
})
export class ServiceModule {}
