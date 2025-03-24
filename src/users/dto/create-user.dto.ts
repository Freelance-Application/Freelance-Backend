import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).trim())
  name: string;

  @IsEmail()
  @ApiProperty()
  @Transform(({ value }) => String(value).toLowerCase().toLowerCase())
  email: string;

  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).trim())
  lastname: string;

  @IsString()
  @Transform(({ value }) => String(value).trim())
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  @ApiProperty()
  password: string;
}
