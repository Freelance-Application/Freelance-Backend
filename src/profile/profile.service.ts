import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { CreateProfileDto, UpdateProfileDto } from './dto';
import { UserSkillService } from 'src/user-skill/user-skill.service';
import { SkillService } from 'src/skill/skill.service';

@Injectable()
export class ProfileService {
  constructor(
    private readonly profileRepository: ProfileRepository,
    private readonly userSkillService: UserSkillService,
    private readonly skillService: SkillService,
  ) {}

  async create(userId: string, createProfileDto: CreateProfileDto) {
    const profileExists = await this.findByUserId(userId);
    if (profileExists) {
      throw new ConflictException('User already has a profile');
    }

    const hasUserSkills = createProfileDto.skills.length > 0;

    if (hasUserSkills) {
      const skillsIds = createProfileDto.skills.map((skill) => skill.skillId);
      const skills = await this.skillService.findManyByIds(skillsIds);
      if (skills.length !== skillsIds.length) {
        throw new NotFoundException('One or more skills not found');
      }
    }

    const profile = await this.profileRepository.create(
      userId,
      createProfileDto,
    );

    if (hasUserSkills) {
      const userSkills = await this.userSkillService.create(
        profile.id,
        createProfileDto.skills,
      );
      profile.skills = userSkills;
    }

    return profile;
  }

  async findByUserId(userId: string) {
    return this.profileRepository.findByUserId(userId);
  }

  async update(userId: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.findByUserId(userId);
    if (!profile) {
      throw new NotFoundException('User does not have a profile');
    }

    const newSkills = updateProfileDto.skills ?? [];
    const hasUserSkills = newSkills.length > 0;

    if (hasUserSkills) {
      const skillsIds = newSkills.map((skill) => skill.skillId) || [];
      const skills = await this.skillService.findManyByIds(skillsIds);
      if (skills.length !== skillsIds.length) {
        throw new NotFoundException('One or more skills not found');
      }
    }

    const newProfile = await this.profileRepository.update(profile.id, {
      bio: updateProfileDto.bio ?? profile.bio,
      university: updateProfileDto.university ?? profile.university,
    });

    if (hasUserSkills) {
      const userSkills = await this.userSkillService.update(
        profile.id,
        newSkills,
      );
      newProfile.skills = userSkills;
    }

    return newProfile;
  }
}
