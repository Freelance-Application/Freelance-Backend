import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

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
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.service.create(createServiceDto);
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
}
