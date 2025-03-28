import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class InitialProfileDto {
  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).toUpperCase())
  university: string;

  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).trim())
  bio: string;
}
