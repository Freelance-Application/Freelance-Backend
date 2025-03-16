import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthResponseDto } from './dto/auth-response.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({
    status: 200,
    type: AuthResponseDto,
  })
  async login(@Body() { email, password }: LoginDto) {
    const user = await this.authService.validateUser(email, password);
    return this.authService.login(user);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get Profile' })
  @ApiResponse({
    status: 200,
    type: AuthResponseDto,
  })
  getProfile(@Req() req: Request) {
    const userId = req.user?.userId;
    return this.authService.getProfile(userId!);
  }
}
