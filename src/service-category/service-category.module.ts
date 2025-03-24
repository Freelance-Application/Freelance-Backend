import { Module } from '@nestjs/common';
import { ServiceCategoryService } from './service-category.service';
import { DatabaseModule } from 'src/database/database.module';
import { ServiceCategoryRepository } from './service-category.repository';

@Module({
  providers: [ServiceCategoryService, ServiceCategoryRepository],
  imports: [DatabaseModule],
  exports: [ServiceCategoryService],
})
export class ServiceCategoryModule {}
