import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
import { CreateProfileDto, UpdateProfileDto } from './dto';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async create(userId: string, createProfileDto: CreateProfileDto) {
    const profileExists = await this.findByUserId(userId);
    if (profileExists) {
      throw new ConflictException('User already has a profile');
    }
    return this.profileRepository.create(userId, createProfileDto);
  }

  async findByUserId(userId: string) {
    return this.profileRepository.findByUserId(userId);
  }

  async update(userId: string, updateProfileDto: UpdateProfileDto) {
    const profile = await this.findByUserId(userId);
    if (!profile) {
      throw new NotFoundException('User does not have a profile');
    }

    return this.profileRepository.update(profile.id, {
      bio: updateProfileDto.bio ?? profile.bio,
      university: updateProfileDto.university ?? profile.university,
    });
  }
}
