import { ApiProperty } from '@nestjs/swagger';
import { CreateUserSkillDto } from './create-user-skill.dto';
import { SkillDto } from 'src/skill/dto';

export class UserSkillDto extends CreateUserSkillDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  profileId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;

  @ApiProperty({ type: SkillDto })
  skill: SkillDto;
}
