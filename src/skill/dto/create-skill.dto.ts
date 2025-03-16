import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @Transform(({ value }) => String(value).trim())
  @ApiProperty()
  name: string;

  @IsString()
  @Transform(({ value }) => String(value).trim())
  @ApiProperty()
  description: string;
}
