import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { DatabaseModule } from 'src/database/database.module';
import { ChatRepository } from './chat.repository';

@Module({
  controllers: [ChatController],
  providers: [ChatService, ChatRepository],
  imports: [DatabaseModule],
})
export class ChatModule {}
