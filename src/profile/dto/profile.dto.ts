import { ApiProperty } from '@nestjs/swagger';
import { UserSkillDto } from 'src/user-skill/dto/user-skill.dto';

export class ProfileDto {
  @ApiProperty()
  university: string;

  @ApiProperty()
  bio: string;

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
