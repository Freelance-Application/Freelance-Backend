import { ApiProperty } from '@nestjs/swagger';
import { CreateProfileDto } from './create-profile.dto';
import { RoleUser } from '@prisma/client';

export class ProfileDto extends CreateProfileDto {
  @ApiProperty({ description: 'Profile ID' })
  id: string;

  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty()
  role: RoleUser;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
