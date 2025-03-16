import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @Transform(({ value }) => String(value).trim())
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => String(value).trim())
  @ApiProperty()
  lastname?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => String(value).trim())
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  @ApiProperty()
  password?: string;
}
