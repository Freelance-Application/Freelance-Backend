import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSkillDto {
  @IsString()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
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
