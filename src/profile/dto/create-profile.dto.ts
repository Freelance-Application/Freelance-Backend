import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { CreateUserSkillDto } from 'src/user-skill/dto/create-user-skill.dto';

export class CreateProfileDto {
  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).toUpperCase())
  university: string;

  @IsString()
  @ApiProperty()
  @Transform(({ value }) => String(value).trim())
  bio: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserSkillDto)
  @ApiProperty({ type: [CreateUserSkillDto] })
  skills: CreateUserSkillDto[];
}
