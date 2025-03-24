import {
  Body,
  Controller,
  Get,
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
  constructor(private readonly service: ProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create profile' })
  @ApiResponse({
    status: 201,
    type: ProfileDto,
  })
  @ApiBearerAuth()
  create(@Req() req: Request, @Body() createProfileDto: CreateProfileDto) {
    return this.service.create(req.user!.userId, createProfileDto);
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
    return this.service.update(req.user!.userId, updateProfileDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get profiles' })
  @ApiResponse({
    status: 200,
    type: [ProfileDto],
  })
  list() {
    return this.service.list();
  }
}
