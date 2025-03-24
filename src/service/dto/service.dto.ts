import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/category/dto/category.dto';
import { InitialServiceDto } from './initial-service.dto';

export class ServiceDto extends InitialServiceDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  reviewCount: number;

  @ApiProperty()
  rating: string;

  @ApiProperty()
  userId: number;

  @ApiProperty({ type: CategoryDto })
  category: CategoryDto;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
