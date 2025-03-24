import { ApiProperty } from '@nestjs/swagger';
import { InitialServiceDto } from './initial-service.dto';
import { UserDto } from 'src/users/dto';
import { ServiceCategoryDto } from 'src/service-category/dto/service-category.dto';

export class ServiceDto extends InitialServiceDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  reviewCount: number;

  @ApiProperty({ example: '4.5' })
  rating: string;

  @ApiProperty()
  userId: number;

  @ApiProperty({ type: UserDto })
  user: UserDto;

  @ApiProperty({ type: [ServiceCategoryDto] })
  serviceCategories: ServiceCategoryDto;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
