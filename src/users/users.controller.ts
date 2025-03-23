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
import { CreateUserDto, UpdateUserDto, UserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MessageResponseDto } from 'src/commons/dto/message-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    type: UserDto,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: [UserDto],
  })
  @ApiOperation({ summary: 'Find all users' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @ApiOperation({ summary: 'Find user' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  update(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
    return this.service.update(req.user!.userId, updateUserDto);
  }

  @Delete('')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Remove user' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'User deleted successfully',
    type: MessageResponseDto,
  })
  remove(@Req() req: Request) {
    return this.service.remove(req.user!.userId);
  }
}
