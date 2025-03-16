import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillsRepository } from './skill.repository';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillsRepository) {}

  async create(createSkillDto: CreateSkillDto) {
    return this.skillRepository.create(createSkillDto);
  }

  async findAll() {
    return this.skillRepository.findAll();
  }

  async findOne(id: string) {
    const skill = await this.skillRepository.findById(id);
    if (!skill) {
      throw new NotFoundException('Skill not found');
    }
    return skill;
  }

  async update(id: string, updateSkillDto: UpdateSkillDto) {
    const skill = await this.findOne(id);
    return this.skillRepository.update(id, { ...skill, ...updateSkillDto });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.skillRepository.delete(id);
    return {
      msg: 'Skill deleted successfully',
    };
  }
}
