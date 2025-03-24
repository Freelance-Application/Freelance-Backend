import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class SearchServiceDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  title: string;

  @IsString()
  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  @IsOptional()
  description: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  minPrice: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  maxPrice: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  maxRating: number;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  minRating: number;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  @IsOptional()
  categoryIds: string[];
}
