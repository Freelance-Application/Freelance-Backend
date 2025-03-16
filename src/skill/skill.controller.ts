import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SkillDto } from './dto/skill.dto';
import { CreateSkillDto } from './dto/create-skill.dto';
import { SkillService } from './skill.service';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RoleUser } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

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
    return this.skillService.create(createSkillDto);
  }
}
