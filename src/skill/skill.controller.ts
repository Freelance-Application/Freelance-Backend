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
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SkillService } from './skill.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RoleUser } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { MessageResponseDto } from 'src/commons/dto/message-response.dto';
import { CreateSkillDto, SkillDto, UpdateSkillDto } from './dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly service: SkillService) {}

  @Post()
  @ApiOperation({ summary: 'Create skill' })
  @ApiResponse({
    status: 201,
    type: SkillDto,
  })
  @ApiBearerAuth()
  @Roles(RoleUser.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  create(@Body() createSkillDto: CreateSkillDto) {
    return this.service.create(createSkillDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all skills' })
  @ApiResponse({
    status: 200,
    type: [SkillDto],
  })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find skill' })
  @ApiResponse({
    status: 200,
    type: SkillDto,
  })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update skill' })
  @ApiResponse({
    status: 200,
    type: SkillDto,
  })
  @ApiBearerAuth()
  @Roles(RoleUser.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async update(
    @Param('id') id: string,
    @Body() updateSkillDto: UpdateSkillDto,
  ) {
    return this.service.update(id, updateSkillDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete skill' })
  @ApiResponse({
    status: 200,
    type: MessageResponseDto,
    description: 'Skill deleted successfully',
  })
  @ApiBearerAuth()
  @Roles(RoleUser.ADMIN)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
