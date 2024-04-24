import { Controller, Get, HttpCode, Redirect } from '@nestjs/common';

@Controller('cawt')
export class CawtController {
  @Get()
  @Redirect('https://xnxx.com', 301)
  missingFunctionName(): string {
    const prompt = 'engineering';

    return prompt;
  }
}
