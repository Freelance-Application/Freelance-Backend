import { Injectable, NotFoundException } from '@nestjs/common';
import { SkillsRepository } from './skill.repository';
import { CreateSkillDto, UpdateSkillDto } from './dto';

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
    return this.skillRepository.update(id, {
      name: updateSkillDto.name ?? skill.name,
      description: updateSkillDto.description ?? skill.description,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.skillRepository.delete(id);
    return {
      msg: 'Skill deleted successfully',
    };
  }
}
