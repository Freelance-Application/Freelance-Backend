import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  @ApiProperty()
  password: string;
}
