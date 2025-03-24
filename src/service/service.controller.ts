import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Request } from 'express';
import { MessageResponseDto } from 'src/commons/dto/message-response.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create service' })
  @ApiResponse({
    status: 201,
    type: String,
  })
  @ApiBearerAuth()
  create(@Body() createServiceDto: CreateServiceDto, @Req() req: Request) {
    const { user } = req;
    return this.service.create(createServiceDto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List service' })
  @ApiResponse({
    status: 201,
    type: String,
  })
  list() {
    return this.service.list();
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete service' })
  @ApiResponse({
    status: 201,
    description: 'Service deleted successfully',
    type: MessageResponseDto,
  })
  @ApiBearerAuth()
  delete(@Param('id') id: string, @Req() req: Request) {
    const { user } = req;
    return this.service.delete(id, user.userId);
  }
}
