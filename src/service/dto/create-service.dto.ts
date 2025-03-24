import { ApiProperty } from '@nestjs/swagger';
import { ArrayMinSize, IsArray, IsString } from 'class-validator';
import { InitialServiceDto } from './initial-service.dto';

export class CreateServiceDto extends InitialServiceDto {
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  @ApiProperty({ type: [String] })
  categoryIds: string[];
}
