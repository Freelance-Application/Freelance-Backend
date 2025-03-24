import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Request } from 'express';
import { MessageResponseDto } from 'src/commons/dto/message-response.dto';
import { ServiceDto } from './dto/service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { SearchServiceDto } from './dto/search-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly service: ServiceService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create service' })
  @ApiResponse({
    status: 201,
    type: ServiceDto,
  })
  @ApiBearerAuth()
  create(@Body() createServiceDto: CreateServiceDto, @Req() req: Request) {
    const { user } = req;
    return this.service.create(createServiceDto, user.userId);
  }

  @Post('list')
  @ApiOperation({ summary: 'List service' })
  @ApiResponse({
    status: 201,
    type: [ServiceDto],
  })
  list(@Body() searchServiceDto: SearchServiceDto) {
    return this.service.list(searchServiceDto);
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

  @Get(':id')
  @ApiOperation({ summary: 'Get service' })
  @ApiResponse({
    status: 201,
    type: ServiceDto,
  })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update service' })
  @ApiResponse({
    status: 201,
    type: ServiceDto,
  })
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() createServiceDto: UpdateServiceDto,
    @Req() req: Request,
  ) {
    const { user } = req;
    return this.service.update(id, createServiceDto, user.userId);
  }
}
