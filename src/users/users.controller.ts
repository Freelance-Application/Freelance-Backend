import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    type: UserResponseDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [UserResponseDto],
  })
  @ApiOperation({ summary: 'Find all users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
  })
  @ApiOperation({ summary: 'Find user' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: UserResponseDto,
  })
  update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user!.userId, updateUserDto);
  }

  @Delete('')
  @ApiOperation({ summary: 'Remove user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
    type: String,
  })
  remove(@Req() req: Request) {
    return this.usersService.remove(req.user!.userId);
  }
}
