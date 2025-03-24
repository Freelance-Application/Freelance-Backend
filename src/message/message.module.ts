import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [MessageService, MessageRepository],
  imports: [DatabaseModule],
})
export class MessageModule {}
