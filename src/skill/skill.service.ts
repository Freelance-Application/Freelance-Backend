import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillsRepository } from './skill.repository';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillsRepository) {}

  async create(createSkillDto: CreateSkillDto) {
    return this.skillRepository.create(createSkillDto);
  }
}
