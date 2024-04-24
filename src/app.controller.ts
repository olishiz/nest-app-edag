import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('pussy')
  getPussy(): string {
    return 'pussy ass bitchh';
  }

  @Get('raw')
  markZuick(): string {
    return 'i fuck it raw and creamy';
  }

  @Get('oli')
  oli(): string {
    return 'oli';
  }
}
