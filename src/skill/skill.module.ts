import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { SkillsRepository } from './skill.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [SkillController],
  providers: [SkillService, SkillsRepository],
  imports: [DatabaseModule],
  exports: [SkillService],
})
export class SkillModule {}
