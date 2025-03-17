import { ApiProperty } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill.dto';

export class SkillDto extends CreateSkillDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
