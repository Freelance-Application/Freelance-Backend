import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { RoleUser } from '@prisma/client';

export class UserDto extends OmitType(CreateUserDto, ['password'] as const) {
  @ApiProperty()
  id: string;

  @ApiProperty()
  role: RoleUser;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
