import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateUserSkillDto } from 'src/user-skill/dto/create-user-skill.dto';

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

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserSkillDto)
  @ApiProperty({ type: [CreateUserSkillDto] })
  skills?: CreateUserSkillDto[];
}
