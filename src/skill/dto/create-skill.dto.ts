import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  @ApiProperty()
  name: string;

  @IsString()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  @ApiProperty()
  description: string;
}
