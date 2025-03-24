import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/users/dto/user.dto';

export class AuthResponseDto extends UserDto {
  @ApiProperty()
  access_token: string;
}
