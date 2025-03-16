import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from 'src/users/dto/user-response.dto';

export class AuthResponseDto extends UserResponseDto {
  @ApiProperty()
  access_token: string;
}
