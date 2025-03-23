import { ApiProperty } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

export class CategoryDto extends CreateCategoryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
