import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  name: string;

  @IsEmail()
  @ApiProperty()
  @Transform(({ value }) => String(value).toLowerCase())
  email: string;

  @IsString()
  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  lastname: string;

  @IsString()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  @ApiProperty()
  password: string;
}
