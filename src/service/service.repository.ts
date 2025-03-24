import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { InitialServiceDto } from './dto/initial-service.dto';
import { userSelectFields } from 'src/commons/select-fields';
import { SearchServiceDto } from './dto/search-service.dto';

@Injectable()
export class ServiceRepository {
  constructor(private readonly database: DatabaseService) {}

  async findAll(searchServiceDto: SearchServiceDto) {
    return this.database.service.findMany({
      where: {
        deletedAt: null,
        ...(searchServiceDto.title && {
          title: { contains: searchServiceDto.title, mode: 'insensitive' },
        }),
        ...(searchServiceDto.description && {
          description: {
            contains: searchServiceDto.description,
            mode: 'insensitive',
          },
        }),
        ...(searchServiceDto.minPrice && {
          price: { gte: searchServiceDto.minPrice },
        }),
        ...(searchServiceDto.maxPrice && {
          price: { lte: searchServiceDto.maxPrice },
        }),
        ...(searchServiceDto.minRating && {
          rating: { gte: searchServiceDto.minRating },
        }),
        ...(searchServiceDto.maxRating && {
          rating: { lte: searchServiceDto.maxRating },
        }),
        ...(searchServiceDto?.categoryIds.length > 0 && {
          serviceCategories: {
            some: {
              categoryId: { in: searchServiceDto.categoryIds },
            },
          },
        }),
      },
      include: {
        serviceCategories: { include: { category: true } },
        user: {
          select: userSelectFields,
        },
      },
      orderBy: [
        {
          rating: 'desc',
        },
        {
          reviewCount: 'desc',
        },
        {
          title: 'asc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });
  }

  async create(data: InitialServiceDto, userId: string) {
    return this.database.service.create({ data: { ...data, userId } });
  }

  async findById(id: string, userId: string) {
    const service = await this.database.service.findUnique({
      where: { id, userId, deletedAt: null },
      include: {
        serviceCategories: { include: { category: true } },
        user: { select: userSelectFields },
      },
    });
    return service;
  }

  async delete(id: string) {
    return this.database.service.update({
      where: { id },
      data: { deletedAt: new Date(), updatedAt: new Date() },
    });
  }

  async findOne(id: string) {
    return this.database.service.findUnique({
      where: { id, deletedAt: null },
      include: {
        serviceCategories: { include: { category: true } },
        user: { select: userSelectFields },
      },
    });
  }

  async update(id: string, data: InitialServiceDto) {
    return this.database.service.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
      include: {
        serviceCategories: { include: { category: true } },
        user: { select: userSelectFields },
      },
    });
  }
}
