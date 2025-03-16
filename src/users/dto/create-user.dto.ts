import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  lastname: string;

  @IsString()
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  @ApiProperty()
  password: string;
}
