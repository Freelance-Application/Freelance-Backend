import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RoleUser } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CreateCategoryDto } from './dto/create-category.dto';
import { MessageResponseDto } from 'src/commons/dto/message-response.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({
    status: 201,
    type: CategoryDto,
  })
  @ApiBearerAuth()
  @Roles(RoleUser.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all categories' })
  @ApiResponse({
    status: 200,
    type: [CategoryDto],
  })
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find category' })
  @ApiResponse({
    status: 200,
    type: CategoryDto,
  })
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({
    status: 200,
    type: CategoryDto,
  })
  @ApiBearerAuth()
  @Roles(RoleUser.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({
    status: 200,
    type: MessageResponseDto,
    description: 'category deleted successfully',
  })
  @ApiBearerAuth()
  @Roles(RoleUser.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
