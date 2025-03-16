import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @Transform(({ value }) =>
    value !== undefined ? String(value).toUpperCase() : undefined,
  )
  @ApiProperty()
  university?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) =>
    value !== undefined ? String(value).toLowerCase().trim() : undefined,
  )
  @ApiProperty()
  bio?: string;
}
