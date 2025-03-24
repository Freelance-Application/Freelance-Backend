import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { CreateUserSkillDto } from 'src/user-skill/dto/create-user-skill.dto';
import { InitialProfileDto } from './initial-profile.dto';

export class CreateProfileDto extends InitialProfileDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateUserSkillDto)
  @ApiProperty({ type: [CreateUserSkillDto] })
  skills: CreateUserSkillDto[];
}
