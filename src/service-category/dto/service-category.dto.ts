import { ApiProperty } from '@nestjs/swagger';
import { CategoryDto } from 'src/category/dto/category.dto';

export class ServiceCategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  serviceId: string;

  @ApiProperty()
  categoryId: string;

  @ApiProperty({ type: CategoryDto })
  category: CategoryDto;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
