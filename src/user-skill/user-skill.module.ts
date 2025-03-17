import { Module } from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserSkillRepository } from './user-skill.repository';

@Module({
  providers: [UserSkillService, UserSkillRepository],
  imports: [DatabaseModule],
  exports: [UserSkillService],
})
export class UserSkillModule {}
