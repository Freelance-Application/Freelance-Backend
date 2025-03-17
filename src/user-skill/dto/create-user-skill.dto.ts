import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateUserSkillDto {
  @IsString()
  @ApiProperty()
  skillId: string;

  @IsNumber()
  @ApiProperty()
  @Min(0)
  @Max(5)
  level: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Transform(({ value }) =>
    value !== undefined ? String(value).trim() : undefined,
  )
  description: string;
}
