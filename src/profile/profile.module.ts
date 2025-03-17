import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileRepository } from './profile.repository';
import { UserSkillModule } from 'src/user-skill/user-skill.module';
import { SkillModule } from 'src/skill/skill.module';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
  imports: [DatabaseModule, UserSkillModule, SkillModule],
})
export class ProfileModule {}
