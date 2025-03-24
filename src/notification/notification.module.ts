import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { DatabaseModule } from 'src/database/database.module';
import { NotificationRepository } from './notification.repository';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService, NotificationRepository],
  imports: [DatabaseModule],
})
export class NotificationModule {}
