import { ApiProperty } from '@nestjs/swagger';
import { UserSkillDto } from 'src/user-skill/dto/user-skill.dto';
import { InitialProfileDto } from './initial-profile.dto';

export class ProfileDto extends InitialProfileDto {
  @ApiProperty({ description: 'Profile ID' })
  id: string;

  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;

  @ApiProperty({ type: [UserSkillDto] })
  skills: UserSkillDto[];
}
