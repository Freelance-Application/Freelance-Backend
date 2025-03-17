import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';

@Injectable()
export class UserSkillRepository {
  constructor(private readonly database: DatabaseService) {}

  async findByProfileId(profileId: string) {
    return this.database.userSkill.findMany({
      where: {
        profileId,
      },
      include: {
        skill: true,
      },
    });
  }

  async deleteMany(userSkillsId: string[]) {
    return this.database.userSkill.deleteMany({
      where: {
        id: {
          in: userSkillsId,
        },
      },
    });
  }

  async createMany(profileId: string, userSkillsDto: CreateUserSkillDto[]) {
    return this.database.userSkill.createMany({
      data: userSkillsDto.map((userSkill) => ({
        ...userSkill,
        profileId,
      })),
    });
  }

  async update(userSkillId: string, userSkillDto: CreateUserSkillDto) {
    return this.database.userSkill.update({
      where: {
        id: userSkillId,
      },
      data: userSkillDto,
      include: {
        skill: true,
      },
    });
  }
}
