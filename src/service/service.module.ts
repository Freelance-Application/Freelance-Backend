import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ServiceRepository } from './service.repository';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, ServiceRepository],
  imports: [DatabaseModule],
})
export class ServiceModule {}
