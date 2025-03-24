import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateServiceDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  description: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  price: number;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @IsOptional()
  @ApiProperty({ type: [String] })
  categoryIds: string[];
}
