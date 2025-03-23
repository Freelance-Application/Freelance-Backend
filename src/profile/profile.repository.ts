import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProfileDto, UpdateProfileDto } from './dto';

@Injectable()
export class ProfileRepository {
  constructor(private readonly database: DatabaseService) {}

  async create(userId: string, data: CreateProfileDto) {
    return this.database.profile.create({
      data: {
        university: data.university,
        bio: data.bio,
        userId,
      },
      include: {
        skills: true,
      },
    });
  }

  async findByUserId(userId: string) {
    return this.database.profile.findUnique({
      where: { userId, deletedAt: null },
      include: {
        skills: {
          include: {
            skill: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            lastname: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
            role: true,
          },
        },
      },
    });
  }

  async update(id: string, data: UpdateProfileDto) {
    return this.database.profile.update({
      where: { id },
      data: {
        university: data.university,
        bio: data.bio,
        updatedAt: new Date(),
      },
      include: {
        skills: true,
      },
    });
  }

  async findAll() {
    return this.database.profile.findMany({
      where: { deletedAt: null },
      include: {
        skills: {
          include: {
            skill: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            lastname: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            deletedAt: true,
            role: true,
          },
        },
      },
      orderBy: {
        user: {
          name: 'asc',
        },
      },
    });
  }
}
