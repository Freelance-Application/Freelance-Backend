import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Transform(({ value }) => String(value).toUpperCase().trim())
  @ApiProperty()
  name: string;

  @IsString()
  @Transform(({ value }) => String(value).trim())
  @ApiProperty()
  description: string;
}
