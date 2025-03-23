import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @Transform(({ value }) =>
    value !== undefined ? String(value).toUpperCase().trim() : undefined,
  )
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  @IsOptional()
  @ApiProperty()
  description: string;
}
