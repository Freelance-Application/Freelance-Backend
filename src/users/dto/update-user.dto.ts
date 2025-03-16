import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  lastname?: string;

  @IsString()
  @MinLength(5, { message: 'Password must be at least 5 characters long' })
  @IsOptional()
  @ApiProperty()
  password?: string;
}
