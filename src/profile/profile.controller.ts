import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileDto, UpdateProfileDto } from './dto';
import { ProfileService } from './profile.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
  constructor(private readonly usersService: ProfileService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create profile' })
  @ApiResponse({
    status: 201,
    type: ProfileDto,
  })
  @ApiBearerAuth()
  create(@Req() req: Request, @Body() createProfileDto: CreateProfileDto) {
    return this.usersService.create(req.user!.userId, createProfileDto);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update profile' })
  @ApiResponse({
    status: 201,
    type: ProfileDto,
  })
  @ApiBearerAuth()
  update(@Req() req: Request, @Body() updateProfileDto: UpdateProfileDto) {
    return this.usersService.update(req.user!.userId, updateProfileDto);
  }
}
