import { Injectable } from '@nestjs/common';
import { UserSkillRepository } from './user-skill.repository';
import { UserSkill } from '@prisma/client';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';

@Injectable()
export class UserSkillService {
  constructor(private readonly repository: UserSkillRepository) {}

  async findByProfileId(profileId: string) {
    return this.repository.findByProfileId(profileId);
  }

  async create(profileId: string, userSkillsDto: CreateUserSkillDto[]) {
    return this.repository.createManyAndReturn(profileId, userSkillsDto);
  }

  async deleteMany(userSkillsId: string[]) {
    return this.repository.deleteMany(userSkillsId);
  }

  async updateMany(
    userSkillsDto: CreateUserSkillDto[],
    userSkills: UserSkill[],
  ) {
    const newUserSkills: UserSkill[] = [];
    for (const userSkillDto of userSkillsDto) {
      const toUpdateUserSkill = userSkills.find(
        (userSkill) => userSkill.skillId === userSkillDto.skillId,
      );

      if (toUpdateUserSkill) {
        const updatedUserSkill = await this.repository.update(
          toUpdateUserSkill?.id,
          {
            level: userSkillDto.level ?? toUpdateUserSkill.level,
            description:
              userSkillDto.description ?? toUpdateUserSkill.description,
            skillId: userSkillDto.skillId,
          },
        );
        newUserSkills.push(updatedUserSkill);
      }
    }

    return newUserSkills;
  }

  async update(profileId: string, userSkillsDto: CreateUserSkillDto[]) {
    const userSkills = await this.repository.findByProfileId(profileId);
    const newUserSkills: UserSkill[] = [];

    const skillsToDelete = this.getSkillsToDelete(userSkills, userSkillsDto);
    if (skillsToDelete.length > 0) {
      const skillsToDeleteId = skillsToDelete.map((skill) => skill.id);
      await this.repository.deleteMany(skillsToDeleteId);
    }

    const skillsToCreate = this.getSkillsToCreate(userSkills, userSkillsDto);
    if (skillsToCreate.length > 0) {
      const newUserSkillsCreated = await this.create(profileId, skillsToCreate);
      newUserSkills.push(...newUserSkillsCreated);
    }

    const skillsToKeep = this.getSkillsAlreadyExist(userSkills, userSkillsDto);
    if (skillsToKeep.length > 0) {
      const newUserSkillsUpdated = await this.updateMany(
        skillsToKeep,
        userSkills,
      );
      newUserSkills.push(...newUserSkillsUpdated);
    }

    return newUserSkills;
  }

  getSkillsToDelete(
    userSkills: UserSkill[],
    newUserSkills: CreateUserSkillDto[],
  ) {
    return userSkills.filter((userSkill) => {
      return !newUserSkills.some(
        (newUserSkill) => newUserSkill.skillId === userSkill.skillId,
      );
    });
  }

  getSkillsToCreate(
    userSkills: UserSkill[],
    newUserSkills: CreateUserSkillDto[],
  ) {
    return newUserSkills.filter((newUserSkill) => {
      return !userSkills.some(
        (userSkill) => userSkill.skillId === newUserSkill.skillId,
      );
    });
  }

  getSkillsAlreadyExist(
    userSkills: UserSkill[],
    newUserSkills: CreateUserSkillDto[],
  ) {
    return newUserSkills.filter((newUserSkill) => {
      return userSkills.some(
        (userSkill) => userSkill.skillId === newUserSkill.skillId,
      );
    });
  }
}
