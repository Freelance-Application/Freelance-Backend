import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class InitialServiceDto {
  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).trim())
  title: string;

  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).trim())
  description: string;

  @IsNumber()
  @ApiProperty()
  price: number;
}
