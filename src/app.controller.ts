import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { HealthStatus, User } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  // Endpoint /health
  @Get('health')
  getHealth(): HealthStatus {
    return this.appService.getHealth();
  }
}
