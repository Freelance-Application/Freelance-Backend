import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileRepository } from './profile.repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
  imports: [DatabaseModule],
})
export class ProfileModule {}
