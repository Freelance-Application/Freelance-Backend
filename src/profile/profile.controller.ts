import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileDto, UpdateProfileDto } from './dto';
import { ProfileService } from './profile.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create profile' })
  @ApiResponse({
    status: 201,
    type: ProfileDto,
  })
  @ApiBearerAuth()
  create(@Req() req: Request, @Body() createProfileDto: CreateProfileDto) {
    return this.profileService.create(req.user!.userId, createProfileDto);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update profile' })
  @ApiResponse({
    status: 200,
    type: ProfileDto,
  })
  @ApiBearerAuth()
  update(@Req() req: Request, @Body() updateProfileDto: UpdateProfileDto) {
    return this.profileService.update(req.user!.userId, updateProfileDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get profile' })
  @ApiResponse({
    status: 200,
    type: ProfileDto,
  })
  findOne(@Param('id') userId: string) {
    return this.profileService.findByUserId(userId);
  }

  @Get()
  @ApiOperation({ summary: 'Get profiles' })
  @ApiResponse({
    status: 200,
    type: [ProfileDto],
  })
  list() {
    return this.profileService.list();
  }
}
